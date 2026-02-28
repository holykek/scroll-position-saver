(function () {
  'use strict';

  const STORAGE_KEY_PREFIX = 'scroll_pos_';
  const THROTTLE_MS = 150;
  const RESTORE_DELAY_MS = 50;
  const RESTORE_RETRIES = 10;
  const RESTORE_RETRY_INTERVAL_MS = 100;

  function getStorageKey() {
    return STORAGE_KEY_PREFIX + window.location.href;
  }

  function saveScroll() {
    const key = getStorageKey();
    const value = {
      x: window.scrollX,
      y: window.scrollY,
      t: Date.now()
    };
    chrome.storage.local.set({ [key]: value }).catch(() => {});
  }

  let saveScheduled = null;
  function scheduleSave() {
    if (saveScheduled) return;
    saveScheduled = setTimeout(() => {
      saveScroll();
      saveScheduled = null;
    }, THROTTLE_MS);
  }

  function restoreScroll() {
    const key = getStorageKey();
    chrome.storage.local.get(key).then((data) => {
      const saved = data[key];
      if (!saved || typeof saved.x !== 'number' || typeof saved.y !== 'number') return;

      function apply() {
        window.scrollTo(saved.x, saved.y);
      }

      function tryRestore(attempt) {
        const docHeight = document.documentElement.scrollHeight;
        const viewHeight = window.innerHeight;
        if (docHeight >= saved.y + viewHeight || attempt >= RESTORE_RETRIES) {
          apply();
          return;
        }
        setTimeout(() => tryRestore(attempt + 1), RESTORE_RETRY_INTERVAL_MS);
      }

      setTimeout(() => tryRestore(0), RESTORE_DELAY_MS);
    }).catch(() => {});
  }

  function attachScrollListener() {
    window.addEventListener('scroll', scheduleSave, { passive: true });
  }

  function init() {
    attachScrollListener();
    restoreScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      restoreScroll();
    }
  });

  window.addEventListener('popstate', () => {
    setTimeout(restoreScroll, RESTORE_DELAY_MS);
  });

})();

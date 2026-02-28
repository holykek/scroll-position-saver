document.getElementById('clear').addEventListener('click', async () => {
  const keys = await chrome.storage.local.get(null);
  const scrollKeys = Object.keys(keys).filter(k => k.startsWith('scroll_pos_'));
  if (scrollKeys.length === 0) {
    showMessage('Nothing to clear.');
    return;
  }
  await chrome.storage.local.remove(scrollKeys);
  showMessage('Cleared ' + scrollKeys.length + ' saved position(s).');
});

function showMessage(text) {
  const el = document.getElementById('message');
  el.textContent = text;
  el.hidden = false;
  setTimeout(() => { el.hidden = true; }, 2000);
}

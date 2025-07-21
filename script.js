
function showService(text) {
  document.getElementById('popup-text').innerText = text;
  document.getElementById('popup').classList.remove('hidden');
}
function hidePopup() {
  document.getElementById('popup').classList.add('hidden');
}

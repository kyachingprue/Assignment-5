
//Change Color elements-------------------
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function () {
  historyTab.classList.add('bg-btn-color');
  donationTab.classList.remove('bg-btn-color');
})
donationTab.addEventListener('click', function () {
  donationTab.classList.add('bg-btn-color');
  historyTab.classList.remove('bg-btn-color');
})

// Input change Elements------------------
function showSectionById(id) {
  document.getElementById('new-element-input').classList.add('hidden');
  document.getElementById('history-add').classList.add('hidden');
  document.getElementById('important-question').classList.add('hidden');
  //show elements id
  document.getElementById(id).classList.remove('hidden');
}
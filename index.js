/****************************
  hide/show settings modal
****************************/
const settingsIcon = document.querySelector(".settings-icon");
const settingsModal = document.querySelector("aside.settings");
const settingsClose = document.querySelector(".settings .close-icon");

settingsIcon.onclick = function showSettingsModal() {
  settingsModal.classList.add("visible");
}

settingsClose.onclick = function hideSettingsModal() {
  settingsModal.classList.remove("visible");
}

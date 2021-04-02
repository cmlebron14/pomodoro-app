/****************************
 * timer functionality
****************************/
const timer = document.querySelector(".timer");
const label = document.querySelector(".timer .label");

const toggleLabel = function() {
  let labelValue = label.innerHTML;
  if(labelValue === "pause") {
    label.innerHTML = "start";
  } else {
    label.innerHTML = "pause";
  } 
}

const countDown = function() {
  let seconds = document.querySelector(".seconds");
  let secondsHTML = seconds.innerHTML;
  let minutes = document.querySelector(".minutes");
  let minutesHTML = minutes.innerHTML;

  secondsHTML--;
  seconds.innerHTML = secondsHTML;
}

timer.addEventListener('click', function(e) {
  toggleLabel();

  /*countDown();
  setInterval(function() {
    countDown();
  }, 1000);*/
});

//set the time (in seconds)
//get the time (in seconds)
//convert the time to a usable format
//output the timer data as a reusable object
//display the clock on the page
//stop the clock when it reaches zero


/****************************
 * hide/show settings modal
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

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

//set the time (in seconds)

//get the time + convert to total seconds
const countDown = function() {
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  let modifiedMinutes = Number.parseInt(minutes.innerHTML);
  let modifiedSeconds = Number.parseInt(seconds.innerHTML);

  let totalSeconds = (modifiedMinutes * 60) + modifiedSeconds; // 1020 + 59 = 1079
  totalSeconds--;

  let newMinutes = Math.floor(totalSeconds / 60);
  let newSeconds = totalSeconds % 60;

  minutes.innerHTML = newMinutes;
  seconds.innerHTML = newSeconds;
};

//convert the time to a usable format
//output the timer data as a reusable object
//display the clock on the page
//stop the clock when it reaches zero

timer.addEventListener('click', function(e) {
  toggleLabel();

  countDown();
  setInterval(countDown, 1000);
});



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

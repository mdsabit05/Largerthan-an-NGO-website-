// const video = document.getElementById("myVideo");
// const playBtn = document.getElementById("playBtn");

// playBtn.addEventListener("click", () => {
//   video.play();
//   playBtn.style.display = "none"; // hide button once playing
// });

// video.addEventListener("pause", () => {
//   playBtn.style.display = "flex"; // show button if paused
// });




const openpopup = document.getElementById("openpopup");
const popupOverlay = document.getElementById("popupOverlay");
const closepopup = document.getElementById("closepopup");

// Open popup
openpopup.addEventListener("click", () => {
  popupOverlay.style.display = "flex";
});

// Close popup with X
closepopup.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});

// Close when clicking outside popup
window.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.style.display = "none";
  }
});



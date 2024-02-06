// Add this JavaScript code in your <script> section, after the audio element
const audio = document.getElementById("backgroundAudio");
const muteButton = document.getElementById("muteButton");

// Initially, the audio is not muted
let isMuted = false;

muteButton.addEventListener("click", () => {
  if (isMuted) {
    // Unmute the audio
    audio.muted = false;
    muteButton.textContent = "Mute";
  } else {
    // Mute the audio
    audio.muted = true;
    muteButton.textContent = "Unmute";
  }

  // Toggle the mute state
  isMuted = !isMuted;
});

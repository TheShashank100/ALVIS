<<<<<<< HEAD
let slideIndex = 0;
let intValue = 42; 
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

const audio = document.getElementById("backgroundAudio");
const muteButton = document.getElementById("muteButton");

=======
// Add this JavaScript code in your <script> section, after the audio element
const audio = document.getElementById("backgroundAudio");
const muteButton = document.getElementById("muteButton");

// Initially, the audio is not muted
>>>>>>> e67d7511b2770773ab231be197b209f796195a9b
let isMuted = false;

muteButton.addEventListener("click", () => {
  if (isMuted) {
<<<<<<< HEAD
    audio.muted = false;
    muteButton.textContent = "Mute";
  } else {
    audio.muted = true;
    muteButton.textContent = "Unmute";
  }
  isMuted = !isMuted;
});

function joinStudyGroup() {
  const userName = document.getElementById('username').value;
  const isNamePresent = userName.length > 0; // Decision structure and logical evaluation

  if (isNamePresent) {
      document.getElementById('joinScreen').classList.add('hidden');
      document.getElementById('chatScreen').classList.remove('hidden');
      document.getElementById('resources').classList.remove('hidden');
      console.log('User joined: ' + userName); // Output to console
  } else {
      alert('Please enter your name.'); // Decision structure
  }
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageText = messageInput.value;
  messageInput.value = '';
  const messagesContainer = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.textContent = messageText;
  messagesContainer.appendChild(messageElement);
  console.log('Message sent: ' + messageText); // Output to console

  // Mathematical operation
  const numMessages = messagesContainer.children.length;
  const messageCountText = 'Total messages: ' + numMessages;
  console.log(messageCountText); // Show message count in console
  document.getElementById('resources').textContent = messageCountText; // Output to DOM
}

document.getElementById('joinScreen').style.display = 'flex'; // Interactive CSS change via JS
=======
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
>>>>>>> e67d7511b2770773ab231be197b209f796195a9b

const keydisplay = document.querySelector('#keyDisplay');
const keys =document.getElementById('keys');
const keyCodes = document.querySelector('#keycodeDisplay');
console.log(keydisplay);

document.addEventListener('keydown', (event) => {
//   keys.textContent =  event.key.toUpperCase() ;
  keydisplay.innerHTML = 'You Pressed ' + event.key;
  keyCodes.textContent = event.keyCode;
 
  // copied from stackoverflow.com
  const audio = new Audio("spacebar-click-keyboard-199448.mp3"); // Replace with your sound file URL
  audio.play();
  // Optional: Log the key pressed
  console.log(`Key pressed: ${event.key}`);
  let audios;
  if (event.key === "a") {
      audios = new Audio("sound-a.mp3"); // Replace with your sound for 'A'
  } else if (event.key === "b") {
      audios = new Audio("sound-b.mp3"); // Replace with your sound for 'B'
  } else {
      audios = new Audio("default-sound.mp3"); // Default sound
  }
  audios.play();
 //copied from stackoverflow.com
 
});


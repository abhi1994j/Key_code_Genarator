const keydisplay = document.querySelector('#keyDisplay');
const keys =document.getElementById('keys');
const keyCodes = document.querySelector('#keycodeDisplay');
console.log(keydisplay);

document.addEventListener('keydown', (event) => {
//   keys.textContent =  event.key.toUpperCase() ;
  keydisplay.innerHTML = 'You Pressed ' + event.key.toUpperCase();
  keyCodes.textContent = event.keyCode;
});
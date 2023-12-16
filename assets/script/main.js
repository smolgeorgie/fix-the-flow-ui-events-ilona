// JUMP HANDLER
let interactionJump = document.querySelector('a:nth-of-type(12)')

interactionJump.addEventListener('click', jumpHandler)
interactionJump.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interactionJump.classList.toggle('jump')
}


// SHAKE HANDLER
let interactionShake = document.querySelector('a:nth-of-type(1)')

interactionShake.addEventListener('click', shakeHandler)
interactionShake.addEventListener('shake', shakeHandler)

function shakeHandler() {
  interactionShake.classList.toggle('shake')
}


// PULSE SCALE
const button = document.querySelector('a:nth-of-type(6)');
const initialSize = button.offsetWidth;
const animationDuration = 1000; // 1 second
const scaleIncrement = 0.3;

function startPulsing() {
  let scaleFactor = 1;

  function animate() {
    button.style.transform = `scale(${scaleFactor})`;

    if (scaleFactor === 1) {
      scaleFactor -= scaleIncrement;
    } else if (scaleFactor === 0) {
      scaleFactor += scaleIncrement;
    }

    setTimeout(animate, animationDuration / 2);
  }

  animate();
}

button.addEventListener('click', startPulsing);


// FLIP HORIZONTAL
let flipElement = document.querySelector('a:nth-of-type(8)');

flipElement.addEventListener('click', function () {
  this.classList.add('flipHoriBot');
});


// SWIRL OUT
let swirlElement = document.querySelector('a:nth-of-type(9)');

swirlElement.addEventListener('click', function () {
  this.classList.add('swirlOut');
});


// JELLO HORIZONTAL
let jelloElement = document.querySelector('a:nth-of-type(10)');

jelloElement.addEventListener('click', function () {
  this.classList.add('jelloHorizontal');
});


// ROLL OUT ANIMATION
let rollElement = document.querySelector('a:nth-of-type(11)');

rollElement.addEventListener('click', function () {
  this.classList.add('rollOut');
});


// SLIDE OUT ANIMATION
let slideElement = document.querySelector('a:nth-of-type(13)');

slideElement.addEventListener('click', function () {
  this.classList.add('slideOut');
});


// UNCLICKABLE BUTTON
let unclickableButton = document.querySelector('a:nth-of-type(15)');

unclickableButton.addEventListener('click', () => alert('You cannot click me!'));

unclickableButton.addEventListener('mouseover', () => {
  unclickableButton.style.left = Math.random() * 100 + '%';
  unclickableButton.style.top = Math.random() * 100 + '%';
});
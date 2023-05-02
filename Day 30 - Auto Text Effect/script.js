const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Ashraf Emad Alagmawy Loves You ❤️';

let index = 1,
  speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerHTML = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));

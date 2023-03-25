const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActiveCircle = 1;

// Next Button Event On Click it
next.addEventListener('click', () => {
  currentActiveCircle++;
  if (currentActiveCircle > circles.length) {
    currentActiveCircle = circles.length;
  }
  update();
});

// Previous Button Event On Click it
prev.addEventListener('click', () => {
  currentActiveCircle--;
  if (currentActiveCircle < 1) {
    currentActiveCircle = 1;
  }
  update();
});

// Update on the next or prev
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActiveCircle) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
  if (currentActiveCircle == 1) {
    prev.disabled = true;
  } else if (currentActiveCircle == circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}

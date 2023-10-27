const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const stepDescription = document.getElementById('step-description');

const totalSteps = circles.length;
let currActive = 1;

next.addEventListener('click', () => {
  if (currActive < totalSteps) {
    currActive++;
    update();
  }
});

prev.addEventListener('click', () => {
  if (currActive > 1) {
    currActive--;
    update();
  }
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  const width = ((currActive - 1) / (totalSteps - 1)) * 100 + '%';

  progress.style.width = width;
  prev.disabled = currActive === 1;
  next.disabled = currActive === totalSteps;
  stepDescription.textContent =
    circles[currActive - 1].getAttribute('step-step');
}

update();

// Retrieving DOM elements
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); // All step circles
const stepDescription = document.getElementById('step-description'); // Element to display step description

// Current active step
let currActive = 1;

// Event listener for the "Next" button
next.addEventListener('click', () => {
  if (currActive < circles.length) {
    currActive++;
    update();
  }
});

// Event listener for the "Previous" button
prev.addEventListener('click', () => {
  if (currActive > 1) {
    currActive--; // Move to the previous step
    update();
  }
});

function update() {
  // Loop through all circles to update their active/inactive status
  circles.forEach((circle, index) => {
    if (index < currActive) {
      circle.classList.add('active'); // Mark circles up to the active step as active
    } else {
      circle.classList.remove('active'); // Mark circles after the active step as inactive
    }
  });

  const width = ((currActive - 1) / (circles.length - 1)) * 100 + '%';

  // Set the width of the progress bar
  progress.style.width = width;

  // Disable the buttons at the start and end of steps
  prev.disabled = currActive === 1;
  next.disabled = currActive === circles.length;

  // Set the step description based on the current active step
  stepDescription.textContent =
    circles[currActive - 1].getAttribute('step-step');
}

update();

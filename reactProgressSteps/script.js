// Retrieving DOM elements
const progress = document.getElementById('progress'); // The progress bar
const prev = document.getElementById('prev'); // Button to go to previous step
const next = document.getElementById('next'); // Button to go to next step
const circles = document.querySelectorAll('.circle'); // All step circles
const stepDescription = document.getElementById('step-description'); // Element to display step description

// Total number of steps
const totalSteps = circles.length;

// Current active step
let currActive = 1;

// Event listener for the "Next" button
next.addEventListener('click', () => {
  if (currActive < totalSteps) {
    currActive++; // Move to the next step
    update(); // Update the UI
  }
});

// Event listener for the "Previous" button
prev.addEventListener('click', () => {
  if (currActive > 1) {
    currActive--; // Move to the previous step
    update(); // Update the UI
  }
});

// Function to update the UI based on the current active step
function update() {
  // Loop through all circles to update their active/inactive status
  circles.forEach((circle, index) => {
    if (index < currActive) {
      circle.classList.add('active'); // Mark circles up to the active step as active
    } else {
      circle.classList.remove('active'); // Mark circles after the active step as inactive
    }
  });

  // Calculate the width of the progress bar based on the current active step
  const width = ((currActive - 1) / (totalSteps - 1)) * 100 + '%';

  // Set the width of the progress bar
  progress.style.width = width;

  // Disable the buttons at the start and end of steps
  prev.disabled = currActive === 1;
  next.disabled = currActive === totalSteps;

  // Set the step description based on the current active step
  stepDescription.textContent =
    circles[currActive - 1].getAttribute('step-step');
}

// Initially update the UI for the first step
update();

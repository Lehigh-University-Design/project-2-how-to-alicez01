// ==================================
// KEEP DROPDOWN OPEN AFTER CLICK
// ==================================
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');
  const homeBtn = document.querySelector('.nav-btn-home');
  let keepOpen = false;

  dropdown.addEventListener('mouseenter', function() {
    if (!keepOpen) dropdownContent.style.display = 'flex';
  });
  dropdown.addEventListener('mouseleave', function() {
    if (!keepOpen) dropdownContent.style.display = '';
  });

  homeBtn.addEventListener('click', function(e) {
    keepOpen = !keepOpen;
    dropdownContent.style.display = keepOpen ? 'flex' : '';
    e.stopPropagation();
  });

  dropdownContent.addEventListener('click', function(e) {
    keepOpen = true;
    dropdownContent.style.display = 'flex';
    e.stopPropagation();
  });

  document.body.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      keepOpen = false;
      dropdownContent.style.display = '';
    }
  });
});


// ==================================
// MOVE HEART WITH SCROLL + CHANGE NUMBER + DISAPPEAR AFTER POINT
// ==================================
document.addEventListener('DOMContentLoaded', function() {
  const stepHeart = document.querySelector('.step-heart');
  const stepHeartLabel = document.querySelector('.step-heart-label');
  if (!stepHeart || !stepHeartLabel) return;

  // Define scroll points for each step number
  const steps = [
    { number: '1', y: 1200 },
    { number: '2', y: 2000 },
    { number: '3', y: 2300 },
    { number: '4', y: 2600 },
    { number: '5', y: 2900 },
    { number: 'checkpoint', y: 3300 },
    { number: '6', y: 3800 },
    { number: '7', y: 4100 },
    { number: '8', y: 4600 },
    { number: '9', y: 5000 },
    { number: '10', y: 5500 },
    { number: '🎉', y: 6000 } // Final step with a special icon
  ];

  // Settings
  const baseTop = -50;       // starting offset (matches CSS top)
  const movementSpeed = 0.1; // how fast it moves
  const appearAt = 1800;     // when it starts showing
  const disappearAt = 6450;  // when it fades out completely

  // Initialize heart appearance
  stepHeart.style.opacity = '0';
  stepHeart.style.transition = 'opacity 0.6s ease, visibility 0.6s ease';
  stepHeart.style.visibility = 'hidden';

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    // Show heart between appearAt and disappearAt points
    if (scrollY > appearAt && scrollY < disappearAt) {
      stepHeart.style.opacity = '1';
      stepHeart.style.visibility = 'visible';
    } else {
      stepHeart.style.opacity = '0';
      stepHeart.style.visibility = 'hidden';
    }

    // Move heart smoothly down as user scrolls
    const newTop = baseTop + scrollY * movementSpeed;
    stepHeart.style.top = `${newTop}px`;

    // Update the step number based on scroll position
    let currentStep = steps[0].number;
    for (let i = steps.length - 1; i >= 0; i--) {
      if (scrollY >= steps[i].y) {
        currentStep = steps[i].number;
        break;
      }
    }

    // Fade animation when the number changes
    if (stepHeartLabel.textContent !== currentStep) {
      stepHeartLabel.textContent = currentStep;
      stepHeartLabel.classList.add('fade-change');
      setTimeout(() => stepHeartLabel.classList.remove('fade-change'), 400);
    }
  });
});

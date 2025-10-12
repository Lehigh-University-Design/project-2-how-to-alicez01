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
// MOVE HEART WITH SCROLL + CHANGE NUMBER
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
    { number: 'checkpoint', y: 3200 },
    { number: '6', y: 3500 },
    { number: '7', y: 3800 },
    { number: '8', y: 4100},
    { number: '9', y: 4400},
  ];

  // Starting position (matches CSS top)
  const baseTop = 0; 
  const movementSpeed = 0.1;
  const appearAt = 1400; // ⬅️ increase this number to hide longer (e.g., 2500, 3000)
  const disappears = 1400; // ⬅️ disappears quickly when scrolling up
  // Initially hide the heart
  stepHeart.style.opacity = '0';
  stepHeart.style.transition = 'opacity 0.6s ease';

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;

    // Fade in once user scrolls past the appearAt point
    if (scrollY > appearAt) {
      stepHeart.style.opacity = '1';
    } else {
      stepHeart.style.opacity = '0';
    }

    // Move heart smoothly down as user scrolls
    const newTop = baseTop + scrollY * movementSpeed;
    stepHeart.style.top = `${newTop}px`;

    // Update number based on scroll position
    let currentStep = steps[0].number;
    for (let i = steps.length - 1; i >= 0; i--) {
      if (scrollY >= steps[i].y) {
        currentStep = steps[i].number;
        break;
      }
    }

    // Fade animation when number changes
    if (stepHeartLabel.textContent !== currentStep) {
      stepHeartLabel.textContent = currentStep;
      stepHeartLabel.classList.add('fade-change');
      setTimeout(() => stepHeartLabel.classList.remove('fade-change'), 400);
    }
  });
});

// Show/hide colored paper label on click

document.addEventListener('DOMContentLoaded', function() {
  const toothpickImg = document.querySelector('.toothpick-btn');
  const toothpickLabel = document.querySelector('.toothpick-label');

  if (toothpickImg && toothpickLabel) {
    toothpickImg.addEventListener('click', function() {
      toothpickLabel.classList.toggle('show');
    });
  }
});

// Show/hide colored paper label on click

document.addEventListener('DOMContentLoaded', function() {
  const paperImg = document.querySelector('.paper-btn');
  const paperLabel = document.querySelector('.paper-label');

  if (paperImg && paperLabel) {
    paperImg.addEventListener('click', function() {
      paperLabel.classList.toggle('show');
    });
  }
});

// Show/hide skewers label on click

document.addEventListener('DOMContentLoaded', function() {
  const skewersImg = document.querySelector('.skewers-btn');
  const skewersLabel = document.querySelector('.skewers-label');

  if (skewersImg && skewersLabel) {
    skewersImg.addEventListener('click', function() {
      skewersLabel.classList.toggle('show');
    });
  }
});

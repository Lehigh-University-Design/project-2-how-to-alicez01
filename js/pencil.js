// Show/hide colored paper label on click

document.addEventListener('DOMContentLoaded', function() {
  const pencilImg = document.querySelector('.pencil-btn');
  const pencilLabel = document.querySelector('.pencil-label');

  if (pencilImg && pencilLabel) {
    pencilImg.addEventListener('click', function() {
      pencilLabel.classList.toggle('show');
    });
  }
});

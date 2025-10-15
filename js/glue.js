// Show/hide colored paper label on click

document.addEventListener('DOMContentLoaded', function() {
  const glueImg = document.querySelector('.glue-btn');
  const glueLabel = document.querySelector('.glue-label');

  if (glueImg && glueLabel) {
    glueImg.addEventListener('click', function() {
      glueLabel.classList.toggle('show');
    });
  }
});

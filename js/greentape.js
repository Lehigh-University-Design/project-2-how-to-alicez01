// Show/hide skewers label on click

document.addEventListener('DOMContentLoaded', function() {
  const greentapeImg = document.querySelector('.greentape-btn');
  const greentapeLabel = document.querySelector('.skewers-label');

  if (greentapeImgImg && greentapeLabel) {
    greentapeImg.addEventListener('click', function() {
      greentapeLabel.classList.toggle('show');
    });
  }
});

// Show/hide greentape label on click

document.addEventListener('DOMContentLoaded', function() {
  const greentapeImg = document.querySelector('.greentape-btn');
  const greentapeLabel = document.querySelector('.greentape-label');

  if (greentapeImg && greentapeLabel) {
    greentapeImg.addEventListener('click', function() {
      greentapeLabel.classList.toggle('show');
    });
  }
});

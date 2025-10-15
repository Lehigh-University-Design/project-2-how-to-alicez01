// Show/hide colored paper label on click

document.addEventListener('DOMContentLoaded', function() {
  const scissorsImg = document.querySelector('.scissors-btn');
  const scissorsLabel = document.querySelector('.scissors-label');

  if (scissorsImg && scissorsLabel) {
    scissorsImg.addEventListener('click', function() {
      scissorsLabel.classList.toggle('show');
    });
  }
});

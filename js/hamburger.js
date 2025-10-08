// Hamburger menu functionality

document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.hamburger-btn');
  const menu = document.querySelector('.hamburger-menu');

  menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open');
  });
});

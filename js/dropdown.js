// Keep dropdown open after click

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

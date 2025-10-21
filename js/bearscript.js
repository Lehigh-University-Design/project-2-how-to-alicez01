const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';


  // Create bear trail (absolute so it scrolls with page)
  const trail = document.createElement('div');
  trail.classList.add('bear-trail');
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);

  // Remove trail after animation
  setTimeout(() => trail.remove(), 600);
});

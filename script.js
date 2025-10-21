const button = document.getElementById('runawayBtn');

document.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;

  const distanceX = Math.abs(x - (rect.left + rect.width / 2));
  const distanceY = Math.abs(y - (rect.top + rect.height / 2));

  if (distanceX < 100 && distanceY < 60) {
    const newLeft = Math.random() * (window.innerWidth - rect.width);
    const newTop = Math.random() * (window.innerHeight - rect.height);
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
  }
});

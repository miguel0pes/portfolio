const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');

if (menuBtn && sideMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = sideMenu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuBtn.textContent = isOpen ? '✕' : '☰';
  });
}

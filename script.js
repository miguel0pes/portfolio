// Fade-in ao scroll (IntersectionObserver)
const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

elements.forEach((el) => observer.observe(el));

// Menu hambúrguer + overlay
const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');
const overlay = document.querySelector('.menu-overlay');

function closeMenu() {
  if (!sideMenu || !overlay || !menuBtn) return;
  sideMenu.classList.remove('open');
  overlay.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = '☰';
}

function openMenu() {
  if (!sideMenu || !overlay || !menuBtn) return;
  sideMenu.classList.add('open');
  overlay.classList.add('open');
  menuBtn.setAttribute('aria-expanded', 'true');
  menuBtn.textContent = '✕';
}

if (menuBtn && sideMenu && overlay) {
  menuBtn.addEventListener('click', () => {
    const isOpen = sideMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Opcional: fechar menu ao clicar num link
  sideMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', closeMenu);
  });
}

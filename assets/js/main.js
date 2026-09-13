(() => {
  const body = document.body;

  // PORTFOLIO SUBMENU
  const toggle = document.querySelector('.portfolio-toggle');
  const submenu = document.querySelector('.portfolio-submenu');
  if (toggle && submenu) {
    toggle.addEventListener('click', () => {
      const open = submenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // HOME SLIDESHOW — altere HOME_INTERVAL_MS para 30000 se quiser 30 segundos.
  const stage = document.querySelector('[data-slideshow]');
  if (stage) {
    const slides = [
      'images/homepage/01.webp',
      'images/homepage/02.webp',
      'images/homepage/03.webp',
      'images/homepage/04.webp',
      'images/homepage/05.webp',
      'images/homepage/06.webp',
      'images/homepage/07.webp',
      'images/homepage/08.webp'
    ];
    const HOME_INTERVAL_MS = 10000;
    const layers = [...stage.querySelectorAll('.bg-slide')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let current = 0;
    let activeLayer = 0;
    let timer;

    const preload = (src) => { const img = new Image(); img.src = src; };
    slides.forEach(preload);

    const setLayer = (layerIndex, slideIndex) => {
      layers[layerIndex].style.backgroundImage = `url("${slides[slideIndex]}")`;
    };

    setLayer(0, 0);
    layers[0].classList.add('is-visible');
    if (slides.length > 1) setLayer(1, 1);

    const nextSlide = () => {
      const nextIndex = (current + 1) % slides.length;
      const nextLayer = activeLayer === 0 ? 1 : 0;
      setLayer(nextLayer, nextIndex);
      requestAnimationFrame(() => {
        layers[nextLayer].classList.add('is-visible');
        layers[activeLayer].classList.remove('is-visible');
      });
      current = nextIndex;
      activeLayer = nextLayer;
    };

    const start = () => {
      if (!reduceMotion && slides.length > 1 && !timer) timer = window.setInterval(nextSlide, HOME_INTERVAL_MS);
    };
    const stop = () => { if (timer) { clearInterval(timer); timer = undefined; } };
    document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
    start();
  }

  // PORTFOLIO COLLECTIONS
  const collectionData = {
    "greve-geral": { title: "Greve Geral", images: ["images/collections/greve-geral/GG1.webp", "images/collections/greve-geral/GG2.webp", "images/collections/greve-geral/GG3.webp", "images/collections/greve-geral/GG4.webp", "images/collections/greve-geral/GG5.webp", "images/collections/greve-geral/GG6.webp", "images/collections/greve-geral/GG7.webp", "images/collections/greve-geral/GG8.webp", "images/collections/greve-geral/GG9.webp", "images/collections/greve-geral/GG10.webp", "images/collections/greve-geral/GG11.webp", "images/collections/greve-geral/GG12.webp", "images/collections/greve-geral/GG13.webp", "images/collections/greve-geral/GG14.webp", "images/collections/greve-geral/GG15.webp", "images/collections/greve-geral/GG16.webp", "images/collections/greve-geral/GG17.webp", "images/collections/greve-geral/GG18.webp", "images/collections/greve-geral/GG19.webp", "images/collections/greve-geral/GG20.webp", "images/collections/greve-geral/GG21.webp", "images/collections/greve-geral/GG22.webp", "images/collections/greve-geral/GG23.webp", "images/collections/greve-geral/GG24.webp", "images/collections/greve-geral/GG25.webp", "images/collections/greve-geral/GG26.webp", "images/collections/greve-geral/GG27.webp", "images/collections/greve-geral/GG28.webp", "images/collections/greve-geral/GG29.webp", "images/collections/greve-geral/GG30.webp", "images/collections/greve-geral/GG31.webp"] },
    "mega-centrais-solares": { title: "Não às mega centrais solares", images: ["images/collections/mega-centrais-solares/Solar1.webp", "images/collections/mega-centrais-solares/Solar2.webp", "images/collections/mega-centrais-solares/Solar3.webp", "images/collections/mega-centrais-solares/Solar4.webp", "images/collections/mega-centrais-solares/Solar5.webp", "images/collections/mega-centrais-solares/Solar6.webp", "images/collections/mega-centrais-solares/Solar7.webp", "images/collections/mega-centrais-solares/Solar8.webp", "images/collections/mega-centrais-solares/Solar9.webp", "images/collections/mega-centrais-solares/Solar10.webp", "images/collections/mega-centrais-solares/Solar11.webp", "images/collections/mega-centrais-solares/Solar12.webp", "images/collections/mega-centrais-solares/Solar13.webp", "images/collections/mega-centrais-solares/Solar14.webp", "images/collections/mega-centrais-solares/Solar15.webp", "images/collections/mega-centrais-solares/Solar16.webp", "images/collections/mega-centrais-solares/Solar17.webp", "images/collections/mega-centrais-solares/Solar18.webp", "images/collections/mega-centrais-solares/Solar19.webp", "images/collections/mega-centrais-solares/Solar20.webp", "images/collections/mega-centrais-solares/Solar21.webp", "images/collections/mega-centrais-solares/Solar22.webp", "images/collections/mega-centrais-solares/Solar23.webp", "images/collections/mega-centrais-solares/Solar24.webp", "images/collections/mega-centrais-solares/Solar25.webp", "images/collections/mega-centrais-solares/Solar26.webp", "images/collections/mega-centrais-solares/Solar27.webp", "images/collections/mega-centrais-solares/Solar28.webp", "images/collections/mega-centrais-solares/Solar29.webp", "images/collections/mega-centrais-solares/Solar30.webp", "images/collections/mega-centrais-solares/Solar31.webp", "images/collections/mega-centrais-solares/Solar32.webp", "images/collections/mega-centrais-solares/Solar33.webp", "images/collections/mega-centrais-solares/Solar34.webp", "images/collections/mega-centrais-solares/Solar35.webp", "images/collections/mega-centrais-solares/Solar36.webp", "images/collections/mega-centrais-solares/Solar37.webp", "images/collections/mega-centrais-solares/Solar38.webp", "images/collections/mega-centrais-solares/Solar39.webp", "images/collections/mega-centrais-solares/Solar40.webp"] },
    "street-moments": { title: "Street Moments", images: [] },
    "wsl": { title: "WSL", images: [] },
    "diversos": { title: "Diversos", images: [] },
    "retratos": { title: "Retratos", images: ["images/collections/retratos/2.webp", "images/collections/retratos/3.webp"] }
  };

  const portfolioPage = document.querySelector('[data-portfolio-page]');
  let visibleCards = [];

  if (portfolioPage) {
    const params = new URLSearchParams(window.location.search);
    let category = params.get('category') || 'greve-geral';
    if (!collectionData[category]) category = 'greve-geral';

    const collection = collectionData[category];
    const title = portfolioPage.querySelector('[data-collection-title]');
    const count = portfolioPage.querySelector('[data-collection-count]');
    const gallery = portfolioPage.querySelector('[data-gallery]');
    const empty = portfolioPage.querySelector('[data-empty]');

    title.textContent = collection.title;
    document.title = `${collection.title} — Miguel Lopes`;
    count.textContent = collection.images.length === 1 ? '1 fotografia' : `${collection.images.length} fotografias`;

    document.querySelectorAll('[data-category-link]').forEach((link) => {
      if (link.dataset.categoryLink === category) link.classList.add('is-active');
    });

    if (!collection.images.length) {
      gallery.hidden = true;
      empty.hidden = false;
      count.textContent = '0 fotografias';
    } else {
      gallery.hidden = false;
      empty.hidden = true;
      const fragment = document.createDocumentFragment();
      collection.images.forEach((src, index) => {
        const button = document.createElement('button');
        button.className = 'photo-card';
        button.type = 'button';
        button.dataset.full = src;
        button.setAttribute('aria-label', `Abrir fotografia ${index + 1} de ${collection.images.length}`);

        const img = document.createElement('img');
        img.src = src;
        img.alt = `${collection.title} — fotografia ${index + 1}`;
        img.loading = index < 8 ? 'eager' : 'lazy';
        img.decoding = 'async';

        button.appendChild(img);
        fragment.appendChild(button);
      });
      gallery.appendChild(fragment);
      visibleCards = [...gallery.querySelectorAll('.photo-card')];
    }
  }

  // LIGHTBOX — uses only the images in the selected collection.
  const lightbox = document.querySelector('.lightbox');
  if (visibleCards.length && lightbox) {
    const image = lightbox.querySelector('.lightbox-image');
    const count = lightbox.querySelector('.lightbox-count');
    const close = lightbox.querySelector('.lightbox-close');
    const prev = lightbox.querySelector('.lightbox-prev');
    const next = lightbox.querySelector('.lightbox-next');
    let index = 0;

    const show = (newIndex) => {
      index = (newIndex + visibleCards.length) % visibleCards.length;
      const card = visibleCards[index];
      const thumb = card.querySelector('img');
      image.src = card.dataset.full || thumb.src;
      image.alt = thumb.alt;
      count.textContent = `${String(index + 1).padStart(2, '0')} / ${String(visibleCards.length).padStart(2, '0')}`;
    };

    const open = (newIndex) => {
      show(newIndex);
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      body.style.overflow = 'hidden';
      close.focus();
    };

    const closeBox = () => {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      body.style.overflow = '';
      visibleCards[index].focus();
    };

    visibleCards.forEach((card, i) => card.addEventListener('click', () => open(i)));
    close.addEventListener('click', closeBox);
    prev.addEventListener('click', () => show(index - 1));
    next.addEventListener('click', () => show(index + 1));
    lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeBox(); });
    document.addEventListener('keydown', (event) => {
      if (!lightbox.classList.contains('open')) return;
      if (event.key === 'Escape') closeBox();
      if (event.key === 'ArrowLeft') show(index - 1);
      if (event.key === 'ArrowRight') show(index + 1);
    });
  }
})();

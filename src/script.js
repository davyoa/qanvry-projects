document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Theme Switcher
  const toggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    htmlElement.classList.remove('dark');
  }

  toggleBtn?.addEventListener('click', () => {
    const isDark = htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Mobile Menu Drawer Functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  const drawerLinks = document.querySelectorAll('.mobile-nav-item');

  let isMenuOpen = false;

  function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileDrawer.classList.remove('-translate-y-full', 'opacity-0', 'pointer-events-none');
      mobileDrawer.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      openIcon?.classList.add('hidden');
      openIcon?.classList.remove('block');
      closeIcon?.classList.add('block');
      closeIcon?.classList.remove('hidden');
    } else {
      mobileDrawer.classList.add('-translate-y-full', 'opacity-0', 'pointer-events-none');
      mobileDrawer.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      openIcon?.classList.add('block');
      openIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
      closeIcon?.classList.remove('block');
    }
  }

  mobileMenuBtn?.addEventListener('click', toggleMobileMenu);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMobileMenu();
    });
  });

  // Hero Background Slideshow Loop
  const slides = document.querySelectorAll('#hero-slideshow .slide');
  let currentSlide = 0;

  if (slides.length > 0) {
    setInterval(() => {
      slides[currentSlide].classList.remove('opacity-100');
      slides[currentSlide].classList.add('opacity-0');

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.remove('opacity-0');
      slides[currentSlide].classList.add('opacity-100');
    }, 5000);
  }

  // Scroll Animation Observer
  const animatedElements = document.querySelectorAll('.fade-in-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
});
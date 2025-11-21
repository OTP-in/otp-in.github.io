document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-sm');
      navbar.classList.replace('bg-white/80', 'bg-white/95');
    } else {
      navbar.classList.remove('shadow-sm');
      navbar.classList.replace('bg-white/95', 'bg-white/80');
    }
  });

  // Close mobile menu on click
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.getElementById('navbarNav');
  const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

  navLinks.forEach((l) => {
    l.addEventListener('click', () => {
      if (menuToggle.classList.contains('show')) {
        bsCollapse.toggle();
      }
    });
  });
});

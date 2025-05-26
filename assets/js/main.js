// Placeholder for future JS interactivity 

// Animasi scroll sederhana (AOS-like)
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-aos]');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('aos-animate');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Smooth scroll nav
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Notifikasi form kontak
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = 'Pesan berhasil dikirim!';
    formMessage.style.opacity = 1;
    setTimeout(() => {
      formMessage.style.opacity = 0;
      contactForm.reset();
    }, 2500);
  });
}

// Navbar blur on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 30) {
    navbar.style.background = 'rgba(17,17,17,0.93)';
  } else {
    navbar.style.background = 'rgba(17,17,17,0.85)';
  }
});

// Typing effect fallback (jika JS ingin override animasi CSS)
// (Tidak wajib, sudah ada di CSS) 

// Skills progress bar animation
function animateSkillBars() {
  document.querySelectorAll('.skill-bar-inner').forEach(bar => {
    const skill = bar.getAttribute('data-skill');
    if (bar.offsetParent !== null) {
      bar.style.width = skill + '%';
    }
  });
}
window.addEventListener('DOMContentLoaded', animateSkillBars);
window.addEventListener('scroll', animateSkillBars);

// Education timeline animation
function animateTimeline() {
  document.querySelectorAll('.timeline-item').forEach((item, i) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      setTimeout(() => item.classList.add('visible'), i * 200);
    }
  });
}
window.addEventListener('scroll', animateTimeline);
window.addEventListener('DOMContentLoaded', animateTimeline);

// Portfolio card staggered animation
function animatePortfolioCards() {
  document.querySelectorAll('.portfolio-card').forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      setTimeout(() => card.classList.add('visible'), i * 180);
    }
  });
}
window.addEventListener('scroll', animatePortfolioCards);
window.addEventListener('DOMContentLoaded', animatePortfolioCards);

// Efek parallax tilt pada foto hero
const heroImg = document.querySelector('.hero-img img');
if (heroImg) {
  heroImg.addEventListener('mousemove', function(e) {
    const rect = heroImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8; // max 8deg
    const rotateY = ((x - centerX) / centerX) * 8;
    heroImg.style.transform = `scale(1.05) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  heroImg.addEventListener('mouseleave', function() {
    heroImg.style.transform = '';
  });
}

// Bokeh/particle animation di setiap section
function createSectionBokeh() {
  document.querySelectorAll('section').forEach(section => {
    let bg = section.querySelector('.section-bg-bokeh');
    if (!bg) {
      bg = document.createElement('div');
      bg.className = 'section-bg-bokeh';
      section.prepend(bg);
    }
    bg.innerHTML = '';
    const colors = [
      'rgba(59,130,246,0.18)', // biru
      'rgba(167,139,250,0.18)', // ungu
      'rgba(244,114,182,0.18)', // pink
      'rgba(251,191,36,0.13)', // kuning
      'rgba(255,255,255,0.10)'
    ];
    const n = Math.floor(Math.random() * 3) + 5; // 5-7 partikel
    for (let i = 0; i < n; i++) {
      const p = document.createElement('div');
      p.className = 'bokeh-particle';
      const size = Math.random() * 80 + 40;
      p.style.width = p.style.height = size + 'px';
      p.style.left = Math.random() * 90 + '%';
      p.style.top = Math.random() * 70 + '%';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = (12 + Math.random() * 8) + 's';
      bg.appendChild(p);
    }
  });
}
window.addEventListener('DOMContentLoaded', createSectionBokeh);
window.addEventListener('resize', createSectionBokeh); 

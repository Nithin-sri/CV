// ── COPY EMAIL ──
const copyBtn = document.getElementById('copyBtn');
const copyMsg = document.getElementById('copyMsg');

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText('nithinsri1443@gmail.com').then(() => {
    copyMsg.style.opacity = '1';
    setTimeout(() => {
      copyMsg.style.opacity = '0';
    }, 2200);
  });
});

// ── SKILL BAR ANIMATION ON LOAD ──
window.addEventListener('load', () => {
  const fills = document.querySelectorAll('.skill-fill');
  setTimeout(() => {
    fills.forEach(fill => {
      const targetWidth = fill.getAttribute('data-width');
      fill.style.width = targetWidth + '%';
    });
  }, 300);
});

// ── SCROLL FADE-IN FOR SECTIONS ──
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
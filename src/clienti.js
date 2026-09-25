const marqueeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.2 }); 

const marqueeElement = document.querySelector('.marquee-viewer');

if (marqueeElement) {
  marqueeObserver.observe(marqueeElement);
}
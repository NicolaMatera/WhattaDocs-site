const mockupeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('bottom-top');
    }
  });
}, { threshold: 0.2 }); 

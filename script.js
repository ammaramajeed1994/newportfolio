// Scroll reveal
function revealSections() {
  document.querySelectorAll('section').forEach(section => {
    if(section.getBoundingClientRect().top < window.innerHeight - 100) section.classList.add('visible');
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = (window.scrollY > 300) ? "block" : "none";
});
backToTop.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));
// Cards slide-up on scroll
function revealCards() {
  document.querySelectorAll('.projects-grid .card').forEach(card => {
    if(card.getBoundingClientRect().top < window.innerHeight - 50) {
      card.style.transform = "translateY(0)";
      card.style.opacity = "1";
    }
  });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

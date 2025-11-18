document.getElementById('year').textContent = new Date().getFullYear();

// init AOS animations
if (window.AOS) AOS.init({duration:700,easing:'ease-out-cubic',once:true});

// small nav toggle
const btn = document.querySelector('.nav-toggle');
const navlinks = document.querySelector('.navlinks');
btn?.addEventListener('click', ()=> navlinks.classList.toggle('open'));

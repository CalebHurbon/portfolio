// scripts.js

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');

  if (!localStorage.getItem('effectShown')) {
    localStorage.setItem('effectShown', 'true');
    setTimeout(function() {
      loader.classList.add('fade-out');
    }, 2000);
  } else {
    // Effect already shown before, hide loader immediately
    loader.style.display = 'none';
  }
});

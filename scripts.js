// scripts.js

// Wait until the page loads
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  // Set a timeout to fade out the loader after 2 seconds
  setTimeout(function() {
    loader.classList.add('fade-out');
  }, 2000);
});
// scripts.js

window.addEventListener('load', function() {
  const loader = document.getElementById('loader');

  if (!localStorage.getItem('effectShown')) {
    localStorage.setItem('effectShown', 'true');
    setTimeout(function() {
      loader.classList.add('fade-out');
    }, 1500);
  } else {
    // Effect already shown before, hide loader immediately
    loader.style.display = 'none';
  }
});


// Accordian script credit:w3schools
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

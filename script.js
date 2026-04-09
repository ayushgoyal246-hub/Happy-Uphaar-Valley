// SMOOTH SCROLL

document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// PRODUCT HOVER EFFECT

var products = document.querySelectorAll('.product-card');

products.forEach(function(card) {

  card.addEventListener('mouseenter', function() {
    this.style.transform = "scale(1.05)";
  });

  card.addEventListener('mouseleave', function() {
    this.style.transform = "scale(1)";
  });

});

// SCROLL ANIMATION

window.addEventListener('scroll', function() {

  var navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background = "#ffffff";
    navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
  } else {
    navbar.style.background = "#ffffff";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  }

});
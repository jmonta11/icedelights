'use strict';
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 5000); // Change slide every 3 seconds
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}
// Smooth scroll function
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop
        });
    }
}

// Add click event listener to the "About Us" menu item
const aboutMenuItem = document.querySelector('a[href="#about"]');
aboutMenuItem.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('#about'); 
});

// Add click event listener to the "Contact Us" menu item
const contactMenuItem = document.querySelector('a[href="#contact"]');
contactMenuItem.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('#contact'); 
});


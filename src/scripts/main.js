'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Toggle ---
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const navLinks = document.querySelectorAll('.nav__link');

  if (burger && header) {
    burger.addEventListener('click', () => {
      header.classList.toggle('header--open');
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('header--open');
        
        // Update active class
        navLinks.forEach(navL => navL.classList.remove('nav__link--active'));
        link.classList.add('nav__link--active');
      });
    });
  }

  // --- Contact Form Submission Handling ---
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Stop default action to prevent 405 Method Not Allowed

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      // Form validation check
      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }

      // Custom popup confirmation
      alert(`Thank you, ${name}! Your message has been sent successfully. We will contact you soon.`);

      // Reset form fields
      contactForm.reset();

      // Scroll smoothly to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Hero Slider ---
  const slides = document.querySelectorAll('.hero__slide');
  const prevBtn = document.querySelector('.slider__btn--prev');
  const nextBtn = document.querySelector('.slider__btn--next');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('hero__slide--active');
      } else {
        slide.classList.remove('hero__slide--active');
      }
    });
    currentSlide = index;
  }

  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  function startAutoplay() {
    slideInterval = setInterval(nextSlide, 5000); // 5 seconds autoplay
  }

  function resetAutoplay() {
    clearInterval(slideInterval);
    startAutoplay();
  }

  if (slides.length > 0) {
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
      });
    }

    startAutoplay();
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function setCurrentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

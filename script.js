// Slideshow Script
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  slides.forEach((slide) => (slide.style.display = "none")); // Hide all slides
  dots.forEach((dot) => dot.classList.remove("active")); // Deactivate all dots

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1; // Loop back to the first slide

  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  dots[slideIndex - 1].classList.add("active"); // Activate the corresponding dot
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function setCurrentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Yes/No Box Script
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.textContent = "That's wonderful! 💖";
});

noBtn.addEventListener("click", () => {
  response.textContent = "That's okay! Maybe next year. 😊";
});

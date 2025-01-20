// Slideshow Script
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
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function setCurrentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Interactive Q&A
document.getElementById("submit-btn").addEventListener("click", () => {
  const answer = document.getElementById("answer").value.trim();
  const responseDiv = document.getElementById("response");

  if (answer) {
    responseDiv.innerHTML = `<p>Thank you for sharing! 💖 Your answer: "${answer}"</p>`;
    document.getElementById("valentine-form").reset();
  } else {
    responseDiv.innerHTML = "<p>Please write something before submitting!</p>";
  }
});
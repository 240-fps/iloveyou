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

// Response Box Script
document.getElementById("send-btn").addEventListener("click", () => {
  const responseBox = document.getElementById("response-box");
  const responseDisplay = document.getElementById("response-display");
  const response = responseBox.value.trim();

  if (response) {
    responseDisplay.innerHTML = `You said: "${response}" 💖`;
    responseBox.value = ""; // Clear the textarea
  } else {
    responseDisplay.innerHTML = "Please write something before sending!";
  }
});

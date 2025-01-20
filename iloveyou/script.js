// Slideshow Script
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function setCurrentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

// Interactive Q&A
document.getElementById('submit-btn').addEventListener('click', () => {
  const answer = document.getElementById('answer').value.trim();
  const responseDiv = document.getElementById('response');

  if (answer) {
    responseDiv.innerHTML = `<p>Thank you for sharing! 💖 Your answer: "${answer}"</p>`;
    document.getElementById('valentine-form').reset();
  } else {
    responseDiv.innerHTML = '<p>Please write something before submitting!</p>';
  }
});


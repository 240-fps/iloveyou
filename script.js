let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
  });
}

function startSlideshow() {
  showSlide(currentSlide);
  currentSlide = (currentSlide + 1) % slides.length;
  setTimeout(startSlideshow, 5000);
}

startSlideshow();

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

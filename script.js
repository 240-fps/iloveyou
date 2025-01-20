// Slideshow Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlide = index;
}

// Initialize slideshow
showSlide(0);

// Yes/No Button Logic
document.getElementById('yes-btn').addEventListener('click', () => {
  const hearts = document.createElement('div');
  hearts.className = 'heart-animation';
  document.body.appendChild(hearts);

  setTimeout(() => {
    hearts.remove();
  }, 3000);
});

document.getElementById('no-btn').addEventListener('click', () => {
  document.getElementById('response-message').innerText = "Oh no! But I'll still love you forever. ❤️";
});

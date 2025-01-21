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

// Button 1 Logic
document.getElementById('yes-btn-1').addEventListener('click', () => {
  // Heart animation
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000); // Remove heart after 5 seconds
  }

  // Update response message
  const responseMessage = document.getElementById('response-message');
  responseMessage.textContent = 'Yay! You said Yes! ❤️';
});

// Button 2 Logic
document.getElementById('yes-btn-2').addEventListener('click', () => {
  const responseMessage = document.getElementById('response-message');
  responseMessage.textContent = "Of course, you said Yes! 💕 I'm so happy!";
});

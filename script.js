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

// Yes Buttons Logic
document.getElementById('yes-btn-1').addEventListener('click', () => {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  const responseMessage = document.getElementById('response-message');
  responseMessage.textContent = 'Yay! You said Yes! ❤️';
});

document.getElementById('yes-btn-2').addEventListener('click', () => {
  const responseMessage = document.getElementById('response-message');
  responseMessage.textContent = "Of course, you said Yes! 💕 I'm so happy!";
});

// Toggle Itinerary Cards
function toggleCard(selectedCard) {
  const cards = document.querySelectorAll('.itinerary-card');
  cards.forEach((card) => {
    if (card === selectedCard) {
      card.classList.toggle('expanded');
    } else {
      card.classList.remove('expanded');
    }
  });
}

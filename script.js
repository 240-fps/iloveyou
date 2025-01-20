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

// Heart Celebration
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');

yesButton.addEventListener('click', () => {
  createHeartCelebration();
});

noButton.addEventListener('click', () => {
  alert("Oh no! But I'll still love you! ❤️");
});

function createHeartCelebration() {
  const body = document.body;
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
}

// Add heart celebration styles
const style = document.createElement('style');
style.innerHTML = `
  .heart {
    position: fixed;
    bottom: 0;
    width: 20px;
    height: 20px;
    background: pink;
    opacity: 0.8;
    border-radius: 50%;
    animation: float 5s linear infinite;
  }
  
  @keyframes float {
    0% {
      transform: translateY(0) scale(1);
    }
    100% {
      transform: translateY(-100vh) scale(0.5);
    }
  }
`;
document.head.appendChild(style);

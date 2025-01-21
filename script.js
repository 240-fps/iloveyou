// Page Navigation
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function goToPage(index) {
  if (index >= 0 && index < pages.length) {
    pages[currentPage].classList.remove('active');
    pages[index].classList.add('active');
    currentPage = index;
    updateDots();
  }
}

document.getElementById('yes-btn-1').addEventListener('click', () => goToPage(1));
document.getElementById('yes-btn-2').addEventListener('click', () => goToPage(1));

// Slideshow Logic
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slideshow-dots .dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentSlideIndex = index;
}

showSlide(0);

// Secret Message Logic
const revealButton = document.getElementById('reveal-btn');
const notePopup = document.getElementById('note-popup');

revealButton.addEventListener('click', (event) => {
  notePopup.classList.toggle('hidden');
  event.stopPropagation(); // Prevent closing on button click
});

document.addEventListener('click', () => {
  notePopup.classList.add('hidden');
});

// Itinerary Card Logic
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

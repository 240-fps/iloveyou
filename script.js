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

// Navigation Dots
function updateDots() {
  const dots = document.querySelectorAll('.navigation-dots .dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentPage);
  });
}

updateDots();

// Itinerary Cards
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

// Secret Message
document.getElementById('reveal-btn').addEventListener('click', () => {
  const notePopup = document.getElementById('note-popup');
  notePopup.classList.toggle('hidden');
});

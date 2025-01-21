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

// Swipe Navigation
let startX = 0;
document.addEventListener('touchstart', (event) => {
  startX = event.touches[0].clientX;
});

document.addEventListener('touchend', (event) => {
  const endX = event.changedTouches[0].clientX;
  const diffX = startX - endX;

  if (diffX > 50) {
    goToPage(currentPage + 1); // Swipe left
  } else if (diffX < -50) {
    goToPage(currentPage - 1); // Swipe right
  }
});

// Navigation Dots
function updateDots() {
  const dots = document.querySelectorAll('.navigation-dots .dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentPage);
  });
}

updateDots();

// Secret Message
const notePopup = document.getElementById('note-popup');
document.getElementById('reveal-btn').addEventListener('click', () => {
  notePopup.style.display = notePopup.style.display === 'block' ? 'none' : 'block';
});

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

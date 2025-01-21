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

function updateDots() {
  const dots = document.querySelectorAll('.navigation-dots .dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentPage);
  });
}

document.getElementById('yes-btn-1').addEventListener('click', () => goToPage(1));
document.getElementById('yes-btn-2').addEventListener('click', () => goToPage(1));

// Swipe Navigation
let startX = 0;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) goToPage(currentPage + 1);
  if (startX - endX < -50) goToPage(currentPage - 1);
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

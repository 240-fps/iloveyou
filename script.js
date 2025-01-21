// Page Navigation
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function goToPage(index) {
  if (index >= 0 && index < pages.length) {
    pages.forEach((page, i) => {
      page.style.transform = `translateX(${(i - index) * 100}vw)`;
    });
    currentPage = index;
    updateDots();
  }
}

function updateDots() {
  const dots = document.querySelectorAll('.navigation-dots .dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentPage);
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
  if (startX - endX > 50) goToPage(currentPage + 1); // Swipe left
  if (startX - endX < -50) goToPage(currentPage - 1); // Swipe right
});

// Itinerary Cards
function toggleCard(card) {
  const cards = document.querySelectorAll('.itinerary-card');
  cards.forEach((c) => {
    if (c === card) {
      c.classList.toggle('expanded');
    } else {
      c.classList.remove('expanded');
    }
  });
}

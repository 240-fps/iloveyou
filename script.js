// Page Navigation
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function goToPage(index) {
  if (index >= 0 && index < pages.length) {
    pages[currentPage].classList.remove('active');
    pages[index].classList.add('active');
    currentPage = index;
  }
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
  if (startX - endX > 50) {
    goToPage(currentPage + 1);
  } else if (startX - endX < -50) {
    goToPage(currentPage - 1);
  }
});

// Secret Message
const revealButton = document.getElementById('reveal-btn');
const notePopup = document.getElementById('note-popup');

revealButton.addEventListener('click', (e) => {
  notePopup.classList.toggle('hidden');
  e.stopPropagation();
});

document.addEventListener('click', (e) => {
  if (!notePopup.contains(e.target) && !revealButton.contains(e.target)) {
    notePopup.classList.add('hidden');
  }
});

// Itinerary Logic
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

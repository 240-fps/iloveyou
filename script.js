// Page Navigation Logic
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function goToPage(pageIndex) {
  pages[currentPage].classList.remove('active');
  pages[pageIndex].classList.add('active');
  currentPage = pageIndex;
}

// Initialize with Page 1
goToPage(0);

// Yes Buttons Logic
document.getElementById('yes-btn-1').addEventListener('click', () => {
  goToPage(1); // Go to Slideshow Page
});

document.getElementById('yes-btn-2').addEventListener('click', () => {
  goToPage(1); // Go to Slideshow Page
});

// Slideshow Next Button
document.getElementById('next-to-video').addEventListener('click', () => {
  goToPage(2); // Go to Video Page
});

// Video Next Button
document.getElementById('next-to-itinerary').addEventListener('click', () => {
  goToPage(3); // Go to Itinerary Page
});

// Slideshow Logic
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}
showSlide(0);

// Itinerary Cards Logic
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

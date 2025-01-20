// Get the input and response elements
const itineraryInput = document.getElementById('itinerary-text');
const responseMessage = document.getElementById('response-message');
const submitButton = document.getElementById('submit-btn');

// Add event listener for submit button
submitButton.addEventListener('click', () => {
  const message = itineraryInput.value.trim();
  
  if (message) {
    responseMessage.innerHTML = `<p>Thank you, baby! Here’s what I have planned for us:</p><p>${message}</p>`;
    itineraryInput.style.display = 'none';
    submitButton.style.display = 'none';
  } else {
    responseMessage.innerHTML = `<p>Please write something, my love! ❤️</p>`;
  }
});

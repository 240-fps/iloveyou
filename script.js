// Capture the response and display it
document.getElementById("send-btn").addEventListener("click", () => {
    const responseBox = document.getElementById("response-box");
    const responseDisplay = document.getElementById("response-display");
    const response = responseBox.value.trim();
  
    if (response) {
      responseDisplay.innerHTML = `You said: "${response}" 💖`;
      responseBox.value = ""; // Clear the textarea
    } else {
      responseDisplay.innerHTML = "Please write something before sending!";
    }
  });
  
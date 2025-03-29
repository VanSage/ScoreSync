// Example of a score update simulation
let currentScore = 0;

// Function to update the score dynamically
function updateScore() {
  currentScore += Math.floor(Math.random() * 10) + 1; // Simulate new score
  document.getElementById("score").innerText = `Score: ${currentScore}`;
}

// Initialize with the first score
document.addEventListener("DOMContentLoaded", () => {
  updateScore();
});

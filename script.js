let count = 0;
let maxCount = 0;
let countingStarted = false;

// Start the counting process after setting the number
function startCounting() {
  const maxCountInput = document.getElementById("max-count-input").value;
  
  if (maxCountInput && !countingStarted) {
    maxCount = parseInt(maxCountInput);
    
    // Initially hide the input section and show the circle screen with count 0
    document.getElementById("initial-screen").classList.add("hidden");
    document.getElementById("count-screen").classList.remove("hidden");

    countingStarted = true;  // Mark that counting has started
    
    // Display initial count of 0
    document.getElementById("count-display").textContent = count;
  }
}

// Function to increase count by 1
function increaseCount() {
  if (countingStarted && count < maxCount) {
    count += 1; // Increase by 1
    document.getElementById("count-display").textContent = count;
    if (count >= maxCount) {
      navigator.vibrate(200); // Vibrate when max count is reached
      document.getElementById("count-screen").classList.add("hidden");
      document.getElementById("completion-screen").classList.remove("hidden");
    }
  }
}

// Listen for clicks on the page, excluding the header, footer, and input field
document.body.addEventListener("click", function(event) {
  const target = event.target;
  
  // Check if the clicked element is not in the input box, header, or footer
  if (!target.closest('.input-box') && !target.closest('header') && !target.closest('footer')) {
    if (!countingStarted) {
      startCounting();  // Start counting on first click
    } else {
      increaseCount();  // Increase the count on subsequent clicks
    }
  }
});

// Select button and output area
const btn = document.querySelector("#action-btn");
const output = document.querySelector(".feedback");

// Add event listener for interactivity
btn.addEventListener("click", () => {
  // Update text dynamically
  output.textContent = "Rendering Dynamic Content!";
  output.style.color = "#0D9488"; // Teal accent color
});

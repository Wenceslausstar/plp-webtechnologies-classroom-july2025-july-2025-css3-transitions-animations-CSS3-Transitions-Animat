// Part 2: JavaScript Functions

// Global variable
let globalFactor = 10;

// Function with parameters + return
function calculateArea(length, width) {
  // local variable
  let area = length * width;
  return area;
}

// Function demonstrating scope
function multiplyByGlobal(num) {
  return num * globalFactor;
}

// Trigger on button click
document.getElementById("calcBtn").addEventListener("click", () => {
  let length = 5;
  let width = 4;
  let area = calculateArea(length, width);
  let result = multiplyByGlobal(area);
  document.getElementById(
    "areaResult"
  ).textContent = `Area: ${area}, Multiplied by globalFactor: ${result}`;
  console.log("Area calculated:", area);
  console.log("With globalFactor:", result);
});

// Part 3: JS + CSS Animations

// Box animation on button click
const animateBtn = document.getElementById("animateBtn");
const jsBox = document.getElementById("jsBox");

animateBtn.addEventListener("click", () => {
  jsBox.classList.toggle("animate");
});

// Modal popup
const modalBtn = document.getElementById("modalBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex"; // show modal
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none"; // hide modal
});

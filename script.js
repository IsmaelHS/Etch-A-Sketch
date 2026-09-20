// Create 16x16 divs.
const divs = [];
for (let i = 0; i <= 255; i++) {
  divs.push(document.createElement("div"));
}

// Append the divs to the container div.
const container = document.querySelector(".container");
for (let div of divs) {
  container.appendChild(div);
}

// Add hover effect on the divs
container.addEventListener("mouseover", (event) => {
  event.target.classList.add("hover");
});
container.addEventListener("mouseout", (event) => {
  event.target.classList.remove("hover");
});

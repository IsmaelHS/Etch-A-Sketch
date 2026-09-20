// Create a 16x16 grid.
let divs = [];
let divWidth = 60;
for (let i = 0; i <= 255; i++) {
  divs.push(document.createElement("div"));
}

// Append the divs to the container div.
let container = document.querySelector(".container");
for (let div of divs) {
  div.setAttribute("style", `width : ${divWidth}px; height : ${divWidth}px`);
  container.appendChild(div);
}

// Add hover effect on the divs
container.addEventListener("mouseover", (event) => {
  event.target.classList.add("hover");
});
container.addEventListener("mouseout", (event) => {
  event.target.classList.remove("hover");
});

// Add ability to resize
const resize = document.querySelector(".resize");
resize.addEventListener("click", () => {
  try {
    // Get the new size from the user and check if it's in proper range.
    let size = Number(
      prompt("Enter the number of squares per side for the new grid"),
    );
    if (size < 2 || size > 100 || Number.isNaN(size)) {
      throw new Error("The size should be a number in range 2 to 100.");
    }

    // Reset the grid with the new size.
    divs = [];
    divWidth = Math.ceil(960 / size);
    container.replaceChildren();
    for (let i = 0; i < size * size; i++) {
      divs.push(document.createElement("div"));
    }
    for (let div of divs) {
      div.setAttribute(
        "style",
        `width : ${divWidth}px; height : ${divWidth}px`,
      );
      container.appendChild(div);
    }
  } catch (error) {
    alert(error);
  }
});

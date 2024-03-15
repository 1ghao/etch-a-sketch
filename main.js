//create 16 divs
const gridContainer = document.querySelector(".gridContainer");
createGrid(4);

gridContainer.addEventListener("mouseover", (e) => {
  let target = e.target;
  target.style.backgroundColor = `rgb(${createRandomColor()})`;
});

function createRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  return `${red}, ${blue}, ${green}`;
}

const creatorButton = document.querySelector("#creator");

creatorButton.addEventListener("click", () => {
  let answer;
  do {
    answer = parseInt(prompt("What is the length of the desired side?"));
  } while (answer > 100 || answer <= 0 || isNaN(answer));

  createGrid(answer);
  let gridChilds = Array.from(gridContainer.childNodes);
  gridChilds.map((child) => {
    child.style.flexBasis = `${Math.floor(100 / answer)}%`;
  });
});

function createGrid(sideLength) {
  gridContainer.textContent = "";
  for (let i = 0; i < sideLength ** 2; i++) {
    let genericDiv = document.createElement("div");
    gridContainer.appendChild(genericDiv);
  }
}

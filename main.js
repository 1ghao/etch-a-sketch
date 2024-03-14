//create 16 divs
const gridContainer = document.querySelector(".gridContainer");
for (let i = 0; i < 16; i++) {
  let genericDiv = document.createElement("div");
  gridContainer.appendChild(genericDiv);
}

gridContainer.addEventListener("mouseover", (e) => {
  let target = e.target;
  target.style.backgroundColor = "gray";
});

const gridCreator = document.querySelector("button");

gridCreator.addEventListener("click", () => {
  let answer;
  do {
    answer = parseInt(prompt("What is the length of the desired side?"));
  } while (answer > 10 || answer <= 0 || isNaN(answer));

  answer;
});

function createGrid(sideLength) {
  gridContainer.textContent = "";
  for (let i = 0; i < sideLength ** 2; i++) {
    let genericDiv = document.createElement("div");
    gridContainer.appendChild(genericDiv);
  }
}

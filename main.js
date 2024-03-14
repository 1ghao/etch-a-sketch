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

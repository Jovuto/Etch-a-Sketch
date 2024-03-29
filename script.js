const GRID_AREA = document.querySelector(".grid");

for (i = 0; i < 256; i++) {
    const PAINT_AREA = document.createElement("div");
    GRID_AREA.appendChild(PAINT_AREA);
    PAINT_AREA.classList.add("paintArea");
    PAINT_AREA.addEventListener("mouseover", (e) => {
        e.target.classList.add("red");
    })
}

console.log(GRID_AREA.childElementCount);
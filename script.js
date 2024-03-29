const GRID_AREA = document.querySelector(".grid");
const RESET_BUTTON = document.querySelector("button");

RESET_BUTTON.addEventListener("click", () => {
    let resetMessage = prompt("How big would you like the grid to be? No bigger than 100x100");
    console.log(+resetMessage);
    if ((resetMessage > 100) || isNaN(resetMessage) || (resetMessage <= 0)) {
    alert("Either your number was above 100, 0 or below, or not a number. Try again.")
    }
    else {
        gridClear();
        createGrid(resetMessage);
    }
})

createGrid(16);
GRID_AREA.addEventListener("mousedown", () =>{
    GRID_AREA.addEventListener("mouseover", colorSquare);
})

GRID_AREA.addEventListener("mouseup", () => {
    GRID_AREA.removeEventListener("mouseover", colorSquare);
})

function colorSquare(e){
    e.stopPropagation();
    if (e.target != GRID_AREA){
        e.target.classList.add("red");
    }
}

function createGrid(gridSize) {
    const PAINT_AREA_SIZE = findGridSize(gridSize);
    console.log(PAINT_AREA_SIZE);
    const GRID_SIZE_MULTIPLIED = gridSize * gridSize;
    for (i = 0; i < GRID_SIZE_MULTIPLIED; i++) {
        const PAINT_AREA = document.createElement("div");
        PAINT_AREA.style.width = `${PAINT_AREA_SIZE}px`;
        PAINT_AREA.style.height = `${PAINT_AREA_SIZE}px`
        GRID_AREA.appendChild(PAINT_AREA);
        PAINT_AREA.classList.add("paintArea");
    }
}

function findGridSize(gridSize) {
    const GRID_AREA_SIZE = 640;
    return (GRID_AREA_SIZE/10)/(gridSize/10);
}

function gridClear() {
    while (GRID_AREA.lastChild) {
        GRID_AREA.removeChild(GRID_AREA.lastChild);
    }
}

console.log(GRID_AREA.childElementCount);
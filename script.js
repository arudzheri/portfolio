function createGrid() {
    const gridContainer = document.getElementById("grid-container");
    const gridSize = document.getElementById("grid-size").value;

    gridContainer.innerHTML = ""; // Clear previous grid

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
        gridContainer.appendChild(cell);
    }
}

// Initialize default grid
createGrid();

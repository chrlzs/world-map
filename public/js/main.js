import Version from "./utils/version.js";
import Grid from "./core/grid.js";
import GridCreator from "./core/gridCreator.js";

class App {
  static grid;

  static gridElement;

  static init() {
    this.grid = new Grid(120, 60);
    this.gridElement = document.querySelector(".grid");
    this.createGrid();
    this.displayGrid();
    this.updateVersionText();
  }

  static updateVersionText() {
    let ver = new Version();
    let version = ver.getVersion();
    this.setPageTitle(version);
  }

  static setPageTitle(version) {
    document.title = `Version ${version}`;
  }

  static createGrid() {
    GridCreator.createGrid(this.grid);
  }

  static displayGrid(targetX = -1, targetY = -1, direction = "") {
    this.gridElement.innerHTML = "";

    for (let y = 0; y < this.grid.height; y++) {
      for (let x = 0; x < this.grid.width; x++) {
        const cellElement = document.createElement("div");
        cellElement.className = "cell";
        cellElement.dataset.x = x;
        cellElement.dataset.y = y;

        if (this.grid.isSolid(x, y)) {
          cellElement.classList.add("cell-solid");
        }

        if (this.grid.isLand(x, y)) {
          cellElement.classList.add("land");
        }

        if (this.grid.isWater(x, y)) {
          cellElement.classList.add("water");
        }

        if (x === targetX && y === targetY) {
          // Add a glyph element to represent the center of the selected tile
          const glyphElement = document.createElement("div");
          glyphElement.className = "glyph";

          // Set the direction class for the glyph element
          glyphElement.classList.add(`cell-entity-${direction}`);

          cellElement.appendChild(glyphElement);
        }

        // Add click event listener to each cell element
        cellElement.addEventListener("click", () => {
          const clickedX = parseInt(cellElement.dataset.x);
          const clickedY = parseInt(cellElement.dataset.y);
          console.log(`Clicked cell coordinates: (${clickedX}, ${clickedY})`);
        });

        this.gridElement.appendChild(cellElement);
      }
    }
    //TODO: Remove - these methods are just validating usage
    this.grid.addClassToCell(2, 3, "highlight");
    this.grid.setCellDataAttribute(2, 3, "test", "ABC");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  App.init();
});

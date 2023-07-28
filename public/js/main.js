import Version from "./utils/version.js";
import Grid from "./core/grid.js";
import Globe from "./core/globe.js";

class App {
  static grid;
  static gridElement;

  static init() {
    this.initializeGrid();
    this.createGlobe();
    this.displayGrid();
    this.updateVersionText();
    this.highlightRegions();
  }

  static initializeGrid() {
    this.grid = new Grid(120, 60);
    this.gridElement = document.querySelector(".grid");
  }

  static highlightRegions() {
    this.highlightRegion("UnitedStates", "cell-usa");
    this.highlightRegion("Canada", "cell-canada");
    this.highlightRegion("Greenland", "cell-greenland");
    this.highlightRegion("Iceland", "cell-iceland");
    this.highlightRegion("Ireland", "cell-ireland");
    this.highlightRegion("UnitedKingdom", "cell-united-kingdom");
    this.highlightRegion("Norway", "cell-norway");
    this.highlightRegion("Sweden", "cell-sweden");
    this.highlightRegion("Finland", "cell-finland");
    this.highlightRegion("Estonia", "cell-estonia");
    this.highlightRegion("Latvia", "cell-latvia"); 
    this.highlightRegion("Lithuania", "cell-lithuania");
    this.highlightRegion("Belarus", "cell-belarus");
    this.highlightRegion("Ukraine", "cell-ukraine");
    this.highlightRegion("Poland", "cell-poland");
    this.highlightRegion("Moldova", "cell-moldova");
    this.highlightRegion("Romania", "cell-romania");
    this.highlightRegion("Bulgaria", "cell-bulgaria");
    this.highlightRegion("Greece", "cell-greece");
  }
  
  static highlightRegion(region, className) {
    const states = Globe[`get${region}`]();
    states.forEach(cell => {
      const [x, y] = cell; // Extract the coordinates from the cell
      this.grid.addClassToCell(x, y, className);
    });
  
  }
  

  static updateVersionText() {
    const ver = new Version();
    const version = ver.getVersion();
    this.setPageTitle(version);
  }
  
  static setPageTitle(version) {
    document.title = `World Map: Version ${version}`;
  }

  static createGlobe() {
    Globe.createGlobe(this.grid);
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
          const glyphElement = document.createElement("div");
          glyphElement.className = "glyph";
          glyphElement.classList.add(`cell-entity-${direction}`);
          cellElement.appendChild(glyphElement);
        }

        cellElement.addEventListener("click", () => {
          const clickedX = parseInt(cellElement.dataset.x);
          const clickedY = parseInt(cellElement.dataset.y);
          console.log(clickedX + "," + clickedY);
          cellElement.classList.add("selected");
        });

        this.gridElement.appendChild(cellElement);
      }
    }

    this.grid.addClassToCell(2, 3, "highlight");
    this.grid.setCellDataAttribute(2, 3, "test", "ABC");

  }
}

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
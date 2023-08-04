import Version from "./utils/version.js";
import Grid from "./core/grid.js";
import Globe from "./core/globe.js";

class App {
  constructor() {
    this.grid = new Grid(120, 60);
    this.gridElement = document.querySelector(".grid");
    this.version = new Version().getVersion();
    this.highlightedRegions = [
      { name: "UnitedStates", className: "cell-usa" },
      { name: "Canada", className: "cell-canada" },
      { name: "Greenland", className: "cell-greenland" },
      { name: "Iceland", className: "cell-iceland" },
      { name: "Ireland", className: "cell-ireland" },
      { name: "UnitedKingdom", className: "cell-united-kingdom" },
      { name: "Norway", className: "cell-norway" },
      { name: "Sweden", className: "cell-sweden" },
      { name: "Finland", className: "cell-finland" },
      { name: "Estonia", className: "cell-estonia" },
      { name: "Latvia", className: "cell-latvia" },
      { name: "Lithuania", className: "cell-lithuania" },
      { name: "France", className: "cell-france" },
      { name: "Portugal", className: "cell-portugal" },
      { name: "Spain", className: "cell-spain" },
      { name: "Italy", className: "cell-italy" },
      { name: "Belgium", className: "cell-belgium" },
      { name: "Mexico", className: "cell-mexico" },
      { name: "Cuba", className: "cell-cuba" },
      // Add more regions as needed
    ];
  }

  init() {
    this.createGlobe();
    this.displayGrid();
    this.updateVersionText();
    this.highlightRegions();
  }

  highlightRegions() {
    this.highlightedRegions.forEach((region) => {
      const states = Globe[`get${region.name}`]();
      states.forEach((cell) => {
        const [x, y] = cell;
        this.grid.addClassToCell(x, y, region.className);
      });
    });
  }

  updateVersionText() {
    document.title = `World Map: Version ${this.version}`;
  }

  createGlobe() {
    Globe.createGlobe(this.grid);
  }

  displayGrid(targetX = -1, targetY = -1, direction = "") {
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
          const countryName = this.getCountryNameFromCoordinates(x, y);
          cellElement.dataset.countryName = countryName;
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

        cellElement.addEventListener("mouseover", () => {
          const countryName = cellElement.dataset.countryName;
          if (countryName) {
            console.log("Hovered over:", countryName);
            // You can display the country name in a tooltip or any other way you prefer
          }
        });

        this.gridElement.appendChild(cellElement);
      }
    }

    this.grid.addClassToCell(2, 3, "highlight");
    this.grid.setCellDataAttribute(2, 3, "test", "ABC");
  }

  getCountryNameFromCoordinates(x, y) {
    // Country mappings based on grid coordinates
    const countryMap = {
      2: { 3: "UnitedStates" },
      10: { 20: "Canada" },
      30: { 10: "Greenland" },
      40: { 50: "Iceland" },
      20: { 40: "Ireland" },
      15: { 45: "UnitedKingdom" },
      70: { 20: "Norway" },
      75: { 20: "Sweden" },
      80: { 20: "Finland" },
      85: { 20: "Estonia" },
      80: { 30: "Latvia" },
      75: { 30: "Lithuania" },
      25: { 30: "France" },
      20: { 25: "Portugal" },
      25: { 20: "Spain" },
      35: { 25: "Italy" },
      30: { 25: "Belgium" },
      5: { 10: "Mexico" },
      10: { 10: "Cuba" },
      // Add more country mappings as needed
    };

    return countryMap[x]?.[y] || "";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});

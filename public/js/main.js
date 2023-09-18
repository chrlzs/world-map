import Version from "./utils/version.js";
import Grid from "./core/grid.js";
import Globe from "./core/globe.js";

class App {
  constructor() {
    this.grid = new Grid(120, 60);
    this.gridElement = document.querySelector(".grid");
    this.version = new Version().getVersion();
    this.currentCountryName = "";
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
      { name: "Belize", className: "cell-belize" },
      { name: "Guatamala", className: "cell-guatamala" },
      { name: "ElSalvador", className: "cell-el-salvador" },
      { name: "Honduras", className: "cell-honduras" },
      { name: "Nicaragua", className: "cell-nicaragua" },
      { name: "CostaRica", className: "cell-costa-rica" },
      { name: "Panama", className: "cell-panama" },
      { name: "Columbia", className: "cell-columbia" },
      { name: "Venezuela", className: "cell-venezuela" },
      { name: "Guyana", className: "cell-guyana" },
      { name: "Suriname", className: "cell-suriname" },
      { name: "Ecuador", className: "cell-ecuador" },
      { name: "Peru", className: "cell-peru" },
      { name: "Chile", className: "cell-chile" },
      { name: "Bolivia", className: "cell-bolivia" },
      { name: "FrenchGuiana", className: "cell-french-guiana" },
      { name: "Paraguay", className: "cell-paraguay" },
      { name: "Uraguay", className: "cell-uraguay" },
      { name: "Argentina", className: "cell-argentina" },
      { name: "Brazil", className: "cell-brazil" },
      { name: "Madagascar", className: "cell-madagascar" },
      { name: "SouthAfrica", className: "cell-south-africa" },
      { name: "Namibia", className: "cell-namibia" },
      { name: "NewZealand", className: "cell-new-zealand" },
      { name: "PapuaNewGuinea", className: "cell-papua-new-guinea"},
      { name: "Australia", className: "cell-australia"},
      { name: "Mozambique", className: "cell-mozambique"},
      { name: "Botswana", className: "cell-botswana"},
      { name: "Angola", className: "cell-angola"},
      { name: "Zimbabwe", className: "cell-zimbabwe"},
    ];

    this.tooltipElement = document.createElement("div");
    this.tooltipElement.className = "tooltip";
    document.body.appendChild(this.tooltipElement);
  }

  init() {
    this.createGlobe();
    this.displayGrid();
    this.updateVersionText();
    this.setupClickHandlers();
    this.highlightRegions();
  }

  highlightRegions() {
    this.highlightedRegions.forEach((region) => {
      const states = Globe[`get${region.name}`]();
      states.forEach(([x, y]) => {
        this.grid.addClassToCell(x, y, region.className);
        const cellElement = this.gridElement.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        cellElement.dataset.countryName = region.name;
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

        this.gridElement.appendChild(cellElement);
      }
    }

    this.grid.addClassToCell(2, 3, "highlight");
    this.grid.setCellDataAttribute(2, 3, "test", "ABC");
  }

  setupClickHandlers() {
    this.gridElement.addEventListener("click", (event) => {
      const cellElement = event.target.closest(".cell");
      if (!cellElement) return;
      const countryName = cellElement.dataset.countryName;
      const clickedX = parseInt(cellElement.dataset.x);
      const clickedY = parseInt(cellElement.dataset.y);
      console.log(`Clicked coordinates: ${clickedX},${clickedY}`);
      if (countryName) {
        console.log("Country Name:", countryName);
      } else {
        console.log("No country found at this location.");
      }
      cellElement.classList.add("selected");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new App();
  app.init();
});
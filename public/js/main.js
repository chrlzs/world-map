import Version from "./utils/version.js";
import Grid from "./core/grid.js";
import NPC from "./entities/npc.js";
import Player from "./entities/player.js";
import Enemy from "./entities/enemy.js";
import PathFinder from "./core/pathfinder.js";

let dialogShown = false; // Flag to track if the dialog box has been shown

class App {
  static grid;
  static player;
  static npc;
  static gridElement;
  static enemy;

  static init() {
    this.grid = new Grid(120, 60);
    this.player = new Player(0, 1, 100);
    this.npc = new NPC(0, 0, 100);
    // Place the NPC at a random position on the grid
    this.placeNPC();
    // Create an instance of the Enemy
    this.enemy = new Enemy(0, 0, 50);
    this.gridElement = document.querySelector(".grid");
    this.createGrid();
    this.displayGrid();
    this.updateVersionText();

    // Add arrow key event listeners
    /*
    document.addEventListener("keydown", (event) => {
      this.handleArrowKey(event);
    });
    */
  }

  static handleArrowKey(event) {
    /*
    const { key } = event;
    let newX = this.player.x;
    let newY = this.player.y;

    switch (key) {
      case "ArrowUp":
        newY--;
        break;
      case "ArrowDown":
        newY++;
        break;
      case "ArrowLeft":
        newX--;
        break;
      case "ArrowRight":
        newX++;
        break;
      default:
        return;
    }

    if (
      this.grid.isValidPosition(newX, newY) &&
      !this.grid.isSolid(newX, newY)
    ) {
      const targetCellOccupiedByNPC =
        this.npc.x === newX && this.npc.y === newY;

      if (targetCellOccupiedByNPC) {
        // Player has reached the NPC, stop player's movement and interact with the NPC
        this.interactWithNPC();
      } else {
        // Continue with regular movement
        const newPath = PathFinder.findPath(
          this.grid,
          this.player,
          this.player.x,
          this.player.y,
          newX,
          newY,
          this.npc
        );

        if (newPath && newPath.length > 0) {
          this.animatePath(newPath);
          this.player.x = newX;
          this.player.y = newY;
        }
      }
    }
    */
  }

  static placeNPC() {
    // Generate random coordinates within the grid boundaries
    const newX = Math.floor(Math.random() * this.grid.width);
    const newY = Math.floor(Math.random() * this.grid.height);

    // Check if the generated coordinates are valid and not blocked by a solid object
    if (
      this.grid.isValidPosition(newX, newY) &&
      !this.grid.isSolid(newX, newY)
    ) {
      this.grid.setCellDataAttribute(newX, newY, "test", "charlie");
      this.npc.moveTo(newX, newY);
    } else {
      // If the generated coordinates are not valid, recursively try again until a valid position is found
      this.placeNPC();
    }
  }

  static interactWithNPC() {
    // Add your logic for interacting with the NPC here
    if (dialogShown) {
      dialogShown = false;
    } else {
      console.log("Interacting with the NPC");
      // Show the dialog box
// Show the dialog box
const dialogBox = document.getElementById("dialogBox");
const modalOverlay = document.createElement("div");
modalOverlay.className = "modal-overlay";
document.body.appendChild(modalOverlay);
dialogBox.style.display = "block";
const text = "Hello, NPC! How are you today?";
dialogShown = true;
let currentIndex = 0;

const typeText = () => {
  if (currentIndex < text.length) {
    const currentChar = text.charAt(currentIndex);

    // Check if the current character is a whitespace character
    if (currentChar === ' ') {
      dialogContent.innerHTML += '&nbsp;'; // Preserve space using HTML entity
    } else {
      dialogContent.innerHTML += currentChar;
    }

    currentIndex++;
    setTimeout(typeText, 50); // Delay between typing each character
  }
};

// Clear the previous text message before typing the new one
dialogContent.innerHTML = '';
typeText();
    }
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
    this.grid.setCell(0, 0, 1);

    this.grid.setCell(49, 4, 1);
    this.grid.setCell(50, 4, 1);
    this.grid.setCell(51, 4, 1);
    this.grid.setCell(52, 4, 1);

    this.grid.setCell(37, 5, 1);
    this.grid.setCell(38, 5, 1);
    this.grid.setCell(39, 5, 1);
    this.grid.setCell(40, 5, 1);
    this.grid.setCell(41, 5, 1);
    this.grid.setCell(42, 5, 1);

    this.grid.setCell(46, 5, 1); 
    this.grid.setCell(47, 5, 1);
    this.grid.setCell(48, 5, 1);
    this.grid.setCell(49, 5, 1);
    this.grid.setCell(50, 5, 1);
    this.grid.setCell(51, 5, 1);
    this.grid.setCell(52, 5, 1);
    this.grid.setCell(53, 5, 1);
    this.grid.setCell(54, 5, 1);
    this.grid.setCell(55, 5, 1);

    this.grid.setCell(82, 5, 1);
    this.grid.setCell(83, 5, 1);

    this.grid.setCell(85, 5, 1);

    this.grid.setCell(34, 6, 1);
    this.grid.setCell(35, 6, 1);
    this.grid.setCell(36, 6, 1);
    this.grid.setCell(37, 6, 1);
    this.grid.setCell(38, 6, 1);
    this.grid.setCell(39, 6, 1);
    this.grid.setCell(40, 6, 1);
    this.grid.setCell(41, 6, 1);
    this.grid.setCell(42, 6, 1);
    this.grid.setCell(43, 6, 1);

    this.grid.setCell(45, 6, 1);
    this.grid.setCell(46, 6, 1);
    this.grid.setCell(47, 6, 1);
    this.grid.setCell(48, 6, 1);
    this.grid.setCell(49, 6, 1);
    this.grid.setCell(50, 6, 1);
    this.grid.setCell(51, 6, 1);
    this.grid.setCell(52, 6, 1);
    this.grid.setCell(53, 6, 1);
    this.grid.setCell(54, 6, 1);
    this.grid.setCell(55, 6, 1);
    this.grid.setCell(56, 6, 1);
    this.grid.setCell(57, 6, 1);
    this.grid.setCell(58, 6, 1);
    this.grid.setCell(59, 6, 1);

    this.grid.setCell(78, 6, 1);
    this.grid.setCell(79, 6, 1);

    this.grid.setCell(83, 6, 1);
    this.grid.setCell(84, 6, 1);
    this.grid.setCell(85, 6, 1);

    this.grid.setCell(89, 6, 1);
    this.grid.setCell(90, 6, 1);

    this.grid.setCell(26, 7, 1);

    this.grid.setCell(28, 7, 1);

    this.grid.setCell(31, 7, 1);
    this.grid.setCell(32, 7, 1);

    this.grid.setCell(36, 7, 1);
    this.grid.setCell(37, 7, 1);
    this.grid.setCell(38, 7, 1);
    this.grid.setCell(39, 7, 1);
    this.grid.setCell(40, 7, 1);
    this.grid.setCell(41, 7, 1);

    this.grid.setCell(45, 7, 1);
    this.grid.setCell(46, 7, 1);
    this.grid.setCell(47, 7, 1);
    this.grid.setCell(48, 7, 1);
    this.grid.setCell(49, 7, 1);
    this.grid.setCell(50, 7, 1);
    this.grid.setCell(51, 7, 1);
    this.grid.setCell(52, 7, 1);
    this.grid.setCell(53, 7, 1);
    this.grid.setCell(54, 7, 1);
    this.grid.setCell(55, 7, 1);
    this.grid.setCell(56, 7, 1);
    this.grid.setCell(57, 7, 1);
    this.grid.setCell(58, 7, 1);

    this.grid.setCell(65, 7, 1);
    this.grid.setCell(67, 7, 1);
    this.grid.setCell(68, 7, 1);
    this.grid.setCell(69, 7, 1);

    this.grid.setCell(89, 7, 1);
    this.grid.setCell(90, 7, 1);

    this.grid.setCell(25, 8, 1);
    this.grid.setCell(26, 8, 1);

    this.grid.setCell(28, 8, 1);
    this.grid.setCell(29, 8, 1);

    this.grid.setCell(33, 8, 1);
    this.grid.setCell(34, 8, 1);
    this.grid.setCell(35, 8, 1);

    this.grid.setCell(37, 8, 1);
    this.grid.setCell(38, 8, 1);
    this.grid.setCell(39, 8, 1);

    this.grid.setCell(43, 8, 1);
    this.grid.setCell(44, 8, 1);
    this.grid.setCell(45, 8, 1);
    this.grid.setCell(46, 8, 1);
    this.grid.setCell(47, 8, 1);
    this.grid.setCell(48, 8, 1);
    this.grid.setCell(49, 8, 1);
    this.grid.setCell(50, 8, 1);
    this.grid.setCell(51, 8, 1);
    this.grid.setCell(52, 8, 1);
    this.grid.setCell(53, 8, 1);
    this.grid.setCell(54, 8, 1);
    this.grid.setCell(55, 8, 1);
    this.grid.setCell(56, 8, 1);
    this.grid.setCell(57, 8, 1);

    this.grid.setCell(64, 8, 1);
    this.grid.setCell(65, 8, 1);
    this.grid.setCell(66, 8, 1);
    this.grid.setCell(67, 8, 1);

    this.grid.setCell(69, 8, 1);
    this.grid.setCell(70, 8, 1);

    this.grid.setCell(91, 8, 1);
    this.grid.setCell(92, 8, 1);

    this.grid.setCell(22, 9, 1);
    this.grid.setCell(23, 9, 1);

    this.grid.setCell(27, 9, 1);

    this.grid.setCell(30, 9, 1);
    this.grid.setCell(31, 9, 1);

    this.grid.setCell(33, 9, 1);
    this.grid.setCell(34, 9, 1);
    this.grid.setCell(35, 9, 1);

    this.grid.setCell(38, 9, 1);

    this.grid.setCell(41, 9, 1);
    this.grid.setCell(42, 9, 1);
    this.grid.setCell(43, 9, 1);
    this.grid.setCell(44, 9, 1);
    this.grid.setCell(45, 9, 1);
    this.grid.setCell(46, 9, 1);
    this.grid.setCell(47, 9, 1);
    this.grid.setCell(48, 9, 1);
    this.grid.setCell(49, 9, 1);
    this.grid.setCell(50, 9, 1);
    this.grid.setCell(51, 9, 1);
    this.grid.setCell(52, 9, 1);
    this.grid.setCell(53, 9, 1);
    this.grid.setCell(54, 9, 1);
    this.grid.setCell(55, 9, 1);
    this.grid.setCell(56, 9, 1);

    this.grid.setCell(65, 9, 1);
    this.grid.setCell(66, 9, 1);
    this.grid.setCell(67, 9, 1);
    this.grid.setCell(68, 9, 1);

    this.grid.setCell(92, 9, 1);
    this.grid.setCell(93, 9, 1);

    this.grid.setCell(98, 9, 1);
    this.grid.setCell(99, 9, 1);
    this.grid.setCell(100, 9, 1);

    this.grid.setCell(22, 10, 1);
    this.grid.setCell(23, 10, 1);

    this.grid.setCell(25, 10, 1);
    this.grid.setCell(26, 10, 1);

    this.grid.setCell(28, 10, 1);
    this.grid.setCell(29, 10, 1);
    this.grid.setCell(30, 10, 1);

    this.grid.setCell(36, 10, 1);
    this.grid.setCell(37, 10, 1);

    this.grid.setCell(42, 10, 1);
    this.grid.setCell(43, 10, 1);
    this.grid.setCell(44, 10, 1);
    this.grid.setCell(45, 10, 1);
    this.grid.setCell(46, 10, 1);
    this.grid.setCell(47, 10, 1);
    this.grid.setCell(48, 10, 1);
    this.grid.setCell(49, 10, 1);
    this.grid.setCell(50, 10, 1);
    this.grid.setCell(51, 10, 1);
    this.grid.setCell(52, 10, 1);
    this.grid.setCell(53, 10, 1);
    this.grid.setCell(54, 10, 1);
    this.grid.setCell(55, 10, 1);
    this.grid.setCell(56, 10, 1);
    this.grid.setCell(57, 10, 1);

    this.grid.setCell(68, 10, 1);

    this.grid.setCell(98, 10, 1);
  
    this.grid.setCell(101, 10, 1);
    this.grid.setCell(102, 10, 1);

    this.grid.setCell(24, 11, 1);
    this.grid.setCell(25, 11, 1);
    this.grid.setCell(26, 11, 1);

    this.grid.setCell(31, 11, 1);

    this.grid.setCell(33, 11, 1);
    this.grid.setCell(34, 11, 1);

    this.grid.setCell(44, 11, 1);
    this.grid.setCell(45, 11, 1);
    this.grid.setCell(46, 11, 1);
    this.grid.setCell(47, 11, 1);
    this.grid.setCell(48, 11, 1);
    this.grid.setCell(49, 11, 1);
    this.grid.setCell(50, 11, 1);
    this.grid.setCell(51, 11, 1);
    this.grid.setCell(52, 11, 1);
    this.grid.setCell(53, 11, 1);
    this.grid.setCell(54, 11, 1);
    this.grid.setCell(55, 11, 1);

    this.grid.setCell(92, 11, 1);

    this.grid.setCell(102, 11, 1);

    this.grid.setCell(21, 12, 1);
    this.grid.setCell(22, 12, 1);
    this.grid.setCell(23, 12, 1);

    this.grid.setCell(27, 12, 1);
    this.grid.setCell(28, 12, 1);

    this.grid.setCell(31, 12, 1);
    this.grid.setCell(32, 12, 1);
    this.grid.setCell(33, 12, 1);

    this.grid.setCell(35, 12, 1);

    this.grid.setCell(45, 12, 1);
    this.grid.setCell(46, 12, 1);
    this.grid.setCell(47, 12, 1);
    this.grid.setCell(48, 12, 1);
    this.grid.setCell(49, 12, 1);
    this.grid.setCell(50, 12, 1);
    this.grid.setCell(51, 12, 1);
    this.grid.setCell(52, 12, 1);
    this.grid.setCell(53, 12, 1);
    this.grid.setCell(54, 12, 1);
    this.grid.setCell(55, 12, 1);
    this.grid.setCell(56, 12, 1);

    this.grid.setCell(80, 12, 1);
    this.grid.setCell(81, 12, 1);

    this.grid.setCell(91, 12, 1);
    this.grid.setCell(92, 12, 1);
    this.grid.setCell(93, 12, 1);
    this.grid.setCell(94, 12, 1);

    this.grid.setCell(98, 12, 1);
    this.grid.setCell(99, 12, 1);

    this.grid.setCell(21, 13, 1);
    this.grid.setCell(22, 13, 1);

    this.grid.setCell(25, 13, 1);
    this.grid.setCell(26, 13, 1);
    this.grid.setCell(27, 13, 1);
    this.grid.setCell(28, 13, 1);

    this.grid.setCell(30, 13, 1);
    this.grid.setCell(31, 13, 1);

    this.grid.setCell(34, 13, 1);
    this.grid.setCell(35, 13, 1);
    this.grid.setCell(36, 13, 1);
    this.grid.setCell(37, 13, 1);

    this.grid.setCell(45, 13, 1);
    this.grid.setCell(46, 13, 1);
    this.grid.setCell(47, 13, 1);
    this.grid.setCell(48, 13, 1);
    this.grid.setCell(49, 13, 1);
    this.grid.setCell(50, 13, 1);
    this.grid.setCell(51, 13, 1);
    this.grid.setCell(52, 13, 1);
    this.grid.setCell(53, 13, 1);
    this.grid.setCell(54, 13, 1);
    this.grid.setCell(55, 13, 1);
    this.grid.setCell(56, 13, 1);

    this.grid.setCell(78, 13, 1);
    this.grid.setCell(79, 13, 1);
    this.grid.setCell(80, 13, 1);

    this.grid.setCell(83, 13, 1);
    this.grid.setCell(84, 13, 1);

    this.grid.setCell(89, 13, 1);
    this.grid.setCell(90, 13, 1);
    this.grid.setCell(91, 13, 1);
    this.grid.setCell(92, 13, 1);
    this.grid.setCell(93, 13, 1);
    this.grid.setCell(94, 13, 1);

    this.grid.setCell(9, 14, 1);
    this.grid.setCell(10, 14, 1);
    this.grid.setCell(11, 14, 1);
    this.grid.setCell(12, 14, 1);

    this.grid.setCell(24, 14, 1);
    this.grid.setCell(25, 14, 1);
    this.grid.setCell(26, 14, 1);
    this.grid.setCell(27, 14, 1);
    this.grid.setCell(28, 14, 1);
    this.grid.setCell(29, 14, 1);
    this.grid.setCell(30, 14, 1);
    this.grid.setCell(31, 14, 1);

    this.grid.setCell(34, 14, 1);
    this.grid.setCell(35, 14, 1);
    this.grid.setCell(36, 14, 1);
    this.grid.setCell(37, 14, 1);
    this.grid.setCell(38, 14, 2);

    this.grid.setCell(46, 14, 1);
    this.grid.setCell(47, 14, 1);
    this.grid.setCell(48, 14, 1);
    this.grid.setCell(49, 14, 1);
    this.grid.setCell(50, 14, 1);
    this.grid.setCell(51, 14, 1);
    this.grid.setCell(52, 14, 1);
    this.grid.setCell(53, 14, 1);
    this.grid.setCell(54, 14, 1);
    this.grid.setCell(55, 14, 1);

    this.grid.setCell(77, 14, 2);
    this.grid.setCell(78, 14, 1);

    this.grid.setCell(83, 14, 2); //here
    this.grid.setCell(84, 14, 1);
    this.grid.setCell(85, 14, 1);

    this.grid.setCell(87, 14, 1);
    this.grid.setCell(88, 14, 1);
    this.grid.setCell(89, 14, 1);
    this.grid.setCell(90, 14, 1);
    this.grid.setCell(91, 14, 1);
    this.grid.setCell(92, 14, 1);
    this.grid.setCell(93, 14, 1);

    this.grid.setCell(98, 14, 1);
    this.grid.setCell(99, 14, 1);

    this.grid.setCell(7, 15, 1);
    this.grid.setCell(8, 15, 1);
    this.grid.setCell(9, 15, 1);
    this.grid.setCell(10, 15, 1);
    this.grid.setCell(11, 15, 1);
    this.grid.setCell(12, 15, 1);
    this.grid.setCell(13, 15, 1);
    this.grid.setCell(14, 15, 1);
    this.grid.setCell(15, 15, 1);
    this.grid.setCell(16, 15, 1);

    this.grid.setCell(20, 15, 1);
    this.grid.setCell(21, 15, 1);
    this.grid.setCell(22, 15, 1);
    this.grid.setCell(23, 15, 1);

    this.grid.setCell(30, 15, 1);
    this.grid.setCell(31, 15, 1);

    this.grid.setCell(33, 15, 1);
    this.grid.setCell(34, 15, 1);
    this.grid.setCell(35, 15, 1);
    this.grid.setCell(36, 15, 1);
    this.grid.setCell(37, 15, 1);
    this.grid.setCell(38, 15, 1);

    this.grid.setCell(46, 15, 1);
    this.grid.setCell(47, 15, 1);
    this.grid.setCell(48, 15, 1);
    this.grid.setCell(49, 15, 1);
    this.grid.setCell(50, 15, 1);
    this.grid.setCell(51, 15, 1);
    this.grid.setCell(52, 15, 1);
    this.grid.setCell(53, 15, 1);

    this.grid.setCell(57, 15, 1);
    this.grid.setCell(58, 15, 1);

    this.grid.setCell(66, 15, 2);
    this.grid.setCell(67, 15, 1);
    this.grid.setCell(68, 15, 1);

    this.grid.setCell(76, 15, 2);
    this.grid.setCell(77, 15, 1);

    this.grid.setCell(80, 15, 1);

    this.grid.setCell(83, 15, 2);
    this.grid.setCell(84, 15, 1);
    this.grid.setCell(85, 15, 1);
    this.grid.setCell(86, 15, 1);
    this.grid.setCell(87, 15, 1);
    this.grid.setCell(88, 15, 1);
    this.grid.setCell(89, 15, 1);
    this.grid.setCell(90, 15, 1);
    this.grid.setCell(91, 15, 1);
    this.grid.setCell(92, 15, 1);
    this.grid.setCell(93, 15, 1);
    this.grid.setCell(94, 15, 1);
    this.grid.setCell(95, 15, 1);
    this.grid.setCell(96, 15, 1);
    this.grid.setCell(97, 15, 1);
    this.grid.setCell(98, 15, 1);
    this.grid.setCell(99, 15, 1);
    this.grid.setCell(100, 15, 1);

    this.grid.setCell(9, 16, 1);
    this.grid.setCell(10, 16, 1);
    this.grid.setCell(11, 16, 1);
    this.grid.setCell(12, 16, 1);
    this.grid.setCell(13, 16, 1);
    this.grid.setCell(14, 16, 1);
    this.grid.setCell(15, 16, 1);
    this.grid.setCell(16, 16, 1);
    this.grid.setCell(17, 16, 1);
    this.grid.setCell(18, 16, 1);
    this.grid.setCell(19, 16, 1);
    this.grid.setCell(20, 16, 1);
    this.grid.setCell(21, 16, 1);
    this.grid.setCell(22, 16, 1);
    this.grid.setCell(23, 16, 1);
    this.grid.setCell(24, 16, 1);
    this.grid.setCell(25, 16, 1);

    this.grid.setCell(28, 16, 1);
    this.grid.setCell(29, 16, 1);
    this.grid.setCell(30, 16, 1);
    this.grid.setCell(31, 16, 1);
    this.grid.setCell(32, 16, 1);

    this.grid.setCell(34, 16, 1);
    this.grid.setCell(35, 16, 1);

    this.grid.setCell(37, 16, 1);
    this.grid.setCell(38, 16, 1);
    this.grid.setCell(39, 16, 1);

    this.grid.setCell(45, 16, 1);
    this.grid.setCell(46, 16, 1);
    this.grid.setCell(47, 16, 1);
    this.grid.setCell(48, 16, 1);
    this.grid.setCell(49, 16, 1);
    this.grid.setCell(50, 16, 1);
    this.grid.setCell(51, 16, 1);

    this.grid.setCell(57, 16, 1);
    this.grid.setCell(58, 16, 1);
    this.grid.setCell(59, 16, 1);

    this.grid.setCell(64, 16, 1);
    this.grid.setCell(65, 16, 1);
    this.grid.setCell(66, 16, 1);
    this.grid.setCell(67, 16, 1);
    this.grid.setCell(68, 16, 1);
    this.grid.setCell(69, 16, 1);
    this.grid.setCell(70, 16, 1);
    this.grid.setCell(71, 16, 1);

    this.grid.setCell(79, 16, 1);
    this.grid.setCell(80, 16, 1);
    this.grid.setCell(81, 16, 1);
    this.grid.setCell(82, 16, 1);
    this.grid.setCell(83, 16, 1);
    this.grid.setCell(84, 16, 1);
    this.grid.setCell(85, 16, 1);
    this.grid.setCell(86, 16, 1);
    this.grid.setCell(87, 16, 1);
    this.grid.setCell(88, 16, 1);
    this.grid.setCell(89, 16, 1);
    this.grid.setCell(90, 16, 1);
    this.grid.setCell(91, 16, 1);
    this.grid.setCell(92, 16, 1);
    this.grid.setCell(93, 16, 1);
    this.grid.setCell(94, 16, 1);
    this.grid.setCell(95, 16, 1);
    this.grid.setCell(96, 16, 1);
    this.grid.setCell(97, 16, 1);
    this.grid.setCell(98, 16, 1);
    this.grid.setCell(99, 16, 1);
    this.grid.setCell(100, 16, 1);
    this.grid.setCell(101, 16, 1);
    this.grid.setCell(102, 16, 1);

    this.grid.setCell(105, 16, 1);
    this.grid.setCell(106, 16, 1);

    this.grid.setCell(111, 16, 1);
    this.grid.setCell(112, 16, 1);
  
    this.grid.setCell(7, 17, 1);
    this.grid.setCell(8, 17, 1);
    this.grid.setCell(9, 17, 1);
    this.grid.setCell(10, 17, 1);
    this.grid.setCell(11, 17, 1);
    this.grid.setCell(12, 17, 1);
    this.grid.setCell(13, 17, 1);
    this.grid.setCell(14, 17, 1);
    this.grid.setCell(15, 17, 1);
    this.grid.setCell(16, 17, 1);
    this.grid.setCell(17, 17, 1);
    this.grid.setCell(18, 17, 1);
    this.grid.setCell(19, 17, 1);
    this.grid.setCell(20, 17, 1);
    this.grid.setCell(21, 17, 1);
    this.grid.setCell(22, 17, 1);
    this.grid.setCell(23, 17, 1);
    this.grid.setCell(24, 17, 1);
    this.grid.setCell(25, 17, 1);
    this.grid.setCell(26, 17, 1);
    this.grid.setCell(27, 17, 1);
    this.grid.setCell(28, 17, 1);
    this.grid.setCell(29, 17, 1);
    this.grid.setCell(30, 17, 1);
    this.grid.setCell(31, 17, 1);
    this.grid.setCell(32, 17, 1);

    this.grid.setCell(38, 17, 1);
    this.grid.setCell(39, 17, 1);

    this.grid.setCell(46, 17, 1);
    this.grid.setCell(47, 17, 1);
    this.grid.setCell(48, 17, 1);
    this.grid.setCell(49, 17, 1);

    this.grid.setCell(62, 17, 1);
    this.grid.setCell(63, 17, 1);
    this.grid.setCell(64, 17, 1);
    this.grid.setCell(65, 17, 1);
    this.grid.setCell(66, 17, 1);
    this.grid.setCell(67, 17, 1);
    this.grid.setCell(68, 17, 1);
    this.grid.setCell(69, 17, 1);
    this.grid.setCell(70, 17, 1);
    this.grid.setCell(71, 17, 1);

    this.grid.setCell(76, 17, 1);
    this.grid.setCell(77, 17, 1);
    this.grid.setCell(78, 17, 1);
    this.grid.setCell(79, 17, 1);
    this.grid.setCell(80, 17, 1);
    this.grid.setCell(81, 17, 1);
    this.grid.setCell(82, 17, 1);
    this.grid.setCell(83, 17, 1);
    this.grid.setCell(84, 17, 1);
    this.grid.setCell(85, 17, 1);
    this.grid.setCell(86, 17, 1);
    this.grid.setCell(87, 17, 1);
    this.grid.setCell(88, 17, 1);
    this.grid.setCell(89, 17, 1);
    this.grid.setCell(90, 17, 1);
    this.grid.setCell(91, 17, 1);
    this.grid.setCell(92, 17, 1);
    this.grid.setCell(93, 17, 1);
    this.grid.setCell(94, 17, 1);
    this.grid.setCell(95, 17, 1);
    this.grid.setCell(96, 17, 1);
    this.grid.setCell(97, 17, 1);
    this.grid.setCell(98, 17, 1);
    this.grid.setCell(99, 17, 1);
    this.grid.setCell(100, 17, 1);
    this.grid.setCell(101, 17, 1);
    this.grid.setCell(102, 17, 1);
    this.grid.setCell(103, 17, 1);
    this.grid.setCell(104, 17, 1);
    this.grid.setCell(105, 17, 1);
    this.grid.setCell(106, 17, 1);
    this.grid.setCell(107, 17, 1);
    this.grid.setCell(108, 17, 1);
    this.grid.setCell(109, 17, 1);
    this.grid.setCell(110, 17, 1);

    this.grid.setCell(9, 18, 1);
    this.grid.setCell(10, 18, 1);
    this.grid.setCell(11, 18, 1);
    this.grid.setCell(12, 18, 1);
    this.grid.setCell(13, 18, 1);
    this.grid.setCell(14, 18, 1);
    this.grid.setCell(15, 18, 1);
    this.grid.setCell(16, 18, 1);
    this.grid.setCell(17, 18, 1);
    this.grid.setCell(18, 18, 1);
    this.grid.setCell(19, 18, 1);
    this.grid.setCell(20, 18, 1);
    this.grid.setCell(21, 18, 1);
    this.grid.setCell(21, 18, 1);
    this.grid.setCell(22, 18, 1);
    this.grid.setCell(23, 18, 1);
    this.grid.setCell(24, 18, 1);
    this.grid.setCell(25, 18, 1);
    this.grid.setCell(26, 18, 1);
    this.grid.setCell(27, 18, 1);
    this.grid.setCell(28, 18, 1);
    this.grid.setCell(29, 18, 1);
    this.grid.setCell(30, 18, 1);
    this.grid.setCell(31, 18, 1);

    this.grid.setCell(34, 18, 1);
    this.grid.setCell(35, 18, 1);

    this.grid.setCell(37, 18, 1);
    this.grid.setCell(38, 18, 1);
    this.grid.setCell(39, 18, 1);

    this.grid.setCell(47, 18, 1);
    this.grid.setCell(48, 18, 1);
    this.grid.setCell(49, 18, 1);

    this.grid.setCell(61, 18, 1);
    this.grid.setCell(62, 18, 1);
    this.grid.setCell(63, 18, 1);
    this.grid.setCell(64, 18, 1);

    this.grid.setCell(67, 18, 1);
    this.grid.setCell(68, 18, 1);
    this.grid.setCell(69, 18, 1);

    this.grid.setCell(73, 18, 1);
    this.grid.setCell(74, 18, 1);
    this.grid.setCell(75, 18, 1);
    this.grid.setCell(76, 18, 1);
    this.grid.setCell(77, 18, 1);
    this.grid.setCell(78, 18, 1);
    this.grid.setCell(79, 18, 1);
    this.grid.setCell(80, 18, 1);
    this.grid.setCell(81, 18, 1);
    this.grid.setCell(82, 18, 1);
    this.grid.setCell(83, 18, 1);
    this.grid.setCell(84, 18, 1);
    this.grid.setCell(85, 18, 1);
    this.grid.setCell(86, 18, 1);
    this.grid.setCell(87, 18, 1);
    this.grid.setCell(88, 18, 1);
    this.grid.setCell(89, 18, 1);
    this.grid.setCell(90, 18, 1);
    this.grid.setCell(91, 18, 1);
    this.grid.setCell(92, 18, 1);
    this.grid.setCell(93, 18, 1);
    this.grid.setCell(94, 18, 1);
    this.grid.setCell(95, 18, 1);
    this.grid.setCell(96, 18, 1);
    this.grid.setCell(97, 18, 1);
    this.grid.setCell(98, 18, 1);
    this.grid.setCell(99, 18, 1);
    this.grid.setCell(100, 18, 1);
    this.grid.setCell(101, 18, 1);
    this.grid.setCell(102, 18, 1);
    this.grid.setCell(103, 18, 1);
    this.grid.setCell(104, 18, 1);
    this.grid.setCell(105, 18, 1);
    this.grid.setCell(106, 18, 1);
    this.grid.setCell(107, 18, 1);
    this.grid.setCell(108, 18, 1);
    this.grid.setCell(109, 18, 1);
    this.grid.setCell(110, 18, 1);
    this.grid.setCell(111, 18, 1);
    this.grid.setCell(112, 18, 1);

    this.grid.setCell(7, 19, 1);
    this.grid.setCell(8, 19, 1);
    this.grid.setCell(9, 19, 1);
    this.grid.setCell(10, 19, 1);
    this.grid.setCell(11, 19, 1);

    this.grid.setCell(13, 19, 1);
    this.grid.setCell(14, 19, 1);
    this.grid.setCell(15, 19, 1);
    this.grid.setCell(16, 19, 1);
    this.grid.setCell(17, 19, 1);
    this.grid.setCell(18, 19, 1);
    this.grid.setCell(19, 19, 1);
    this.grid.setCell(20, 19, 1);
    this.grid.setCell(21, 19, 1);
    this.grid.setCell(21, 19, 1);
    this.grid.setCell(22, 19, 1);
    this.grid.setCell(23, 19, 1);
    this.grid.setCell(24, 19, 1);
    this.grid.setCell(25, 19, 1);
    this.grid.setCell(26, 19, 1);
    this.grid.setCell(27, 19, 1);
    this.grid.setCell(28, 19, 1);
    this.grid.setCell(29, 19, 1);
    this.grid.setCell(30, 19, 1);

    this.grid.setCell(38, 19, 1);

    this.grid.setCell(48, 19, 1);
    this.grid.setCell(49, 19, 1);

    this.grid.setCell(61, 19, 1);
    this.grid.setCell(62, 19, 1);
    this.grid.setCell(63, 19, 1);
    this.grid.setCell(64, 19, 1);

    this.grid.setCell(66, 19, 1);
    this.grid.setCell(67, 19, 1);
    this.grid.setCell(68, 19, 1);
    this.grid.setCell(69, 19, 1);
    this.grid.setCell(70, 19, 1);
    this.grid.setCell(71, 19, 1);
    this.grid.setCell(72, 19, 1);
    this.grid.setCell(73, 19, 1);
    this.grid.setCell(74, 19, 1);
    this.grid.setCell(75, 19, 1);
    this.grid.setCell(76, 19, 1);
    this.grid.setCell(77, 19, 1);
    this.grid.setCell(78, 19, 1);
    this.grid.setCell(79, 19, 1);
    this.grid.setCell(80, 19, 1);
    this.grid.setCell(81, 19, 1);
    this.grid.setCell(82, 19, 1);
    this.grid.setCell(83, 19, 1);
    this.grid.setCell(84, 19, 1);
    this.grid.setCell(85, 19, 1);
    this.grid.setCell(86, 19, 1);
    this.grid.setCell(87, 19, 1);
    this.grid.setCell(88, 19, 1);
    this.grid.setCell(89, 19, 1);
    this.grid.setCell(90, 19, 1);
    this.grid.setCell(91, 19, 1);
    this.grid.setCell(92, 19, 1);
    this.grid.setCell(93, 19, 1);
    this.grid.setCell(94, 19, 1);
    this.grid.setCell(95, 19, 1);
    this.grid.setCell(96, 19, 1);
    this.grid.setCell(97, 19, 1);
    this.grid.setCell(98, 19, 1);
    this.grid.setCell(99, 19, 1);
    this.grid.setCell(100, 19, 1);
    this.grid.setCell(101, 19, 1);
    this.grid.setCell(102, 19, 1);
    this.grid.setCell(103, 19, 1);
    this.grid.setCell(104, 19, 1);
    this.grid.setCell(105, 19, 1);
    this.grid.setCell(106, 19, 1);
    this.grid.setCell(107, 19, 1);
    this.grid.setCell(108, 19, 1);
    this.grid.setCell(109, 19, 1);
    this.grid.setCell(110, 19, 1);
    this.grid.setCell(111, 19, 1);
    this.grid.setCell(112, 19, 1);
    this.grid.setCell(113, 19, 1);
    this.grid.setCell(114, 19, 1);

    this.grid.setCell(8, 20, 1);
    this.grid.setCell(9, 20, 1);
    this.grid.setCell(10, 20, 1);

    this.grid.setCell(12, 20, 1);
    this.grid.setCell(13, 20, 1);

    this.grid.setCell(16, 20, 1);
    this.grid.setCell(17, 20, 1);
    this.grid.setCell(18, 20, 1);
    this.grid.setCell(19, 20, 1);
    this.grid.setCell(20, 20, 1);
    this.grid.setCell(21, 20, 1);
    this.grid.setCell(22, 20, 1);
    this.grid.setCell(23, 20, 1);
    this.grid.setCell(24, 20, 1);
    this.grid.setCell(25, 20, 1);
    this.grid.setCell(26, 20, 1);
    this.grid.setCell(27, 20, 1);
    this.grid.setCell(28, 20, 1);
    this.grid.setCell(29, 20, 1);

    this.grid.setCell(34, 20, 1);
    this.grid.setCell(35, 20, 1);
    this.grid.setCell(36, 20, 1);

    this.grid.setCell(61, 20, 1);
    this.grid.setCell(62, 20, 1);
    this.grid.setCell(63, 20, 1);
    this.grid.setCell(64, 20, 1);

    this.grid.setCell(68, 20, 1);
    this.grid.setCell(69, 20, 1);
    this.grid.setCell(70, 20, 1);
    this.grid.setCell(71, 20, 1);
    this.grid.setCell(72, 20, 1);
    this.grid.setCell(73, 20, 1);
    this.grid.setCell(74, 20, 1);
    this.grid.setCell(75, 20, 1);
    this.grid.setCell(76, 20, 1);
    this.grid.setCell(77, 20, 1);
    this.grid.setCell(78, 20, 1);
    this.grid.setCell(79, 20, 1);
    this.grid.setCell(80, 20, 1);
    this.grid.setCell(81, 20, 1);
    this.grid.setCell(82, 20, 1);
    this.grid.setCell(83, 20, 1);
    this.grid.setCell(84, 20, 1);
    this.grid.setCell(85, 20, 1);
    this.grid.setCell(86, 20, 1);
    this.grid.setCell(87, 20, 1);
    this.grid.setCell(88, 20, 1);
    this.grid.setCell(89, 20, 1);
    this.grid.setCell(90, 20, 1);
    this.grid.setCell(91, 20, 1);
    this.grid.setCell(92, 20, 1);
    this.grid.setCell(93, 20, 1);
    this.grid.setCell(94, 20, 1);
    this.grid.setCell(95, 20, 1);
    this.grid.setCell(96, 20, 1);
    this.grid.setCell(97, 20, 1);
    this.grid.setCell(98, 20, 1);
    this.grid.setCell(99, 20, 1);
    this.grid.setCell(100, 20, 1);
    this.grid.setCell(101, 20, 1);
    this.grid.setCell(102, 20, 1);
    this.grid.setCell(103, 20, 1);
    this.grid.setCell(104, 20, 1);
    this.grid.setCell(105, 20, 1);
    this.grid.setCell(106, 20, 1);
    this.grid.setCell(107, 20, 1);
    this.grid.setCell(108, 20, 1);
    this.grid.setCell(109, 20, 1);
    this.grid.setCell(110, 20, 1);
    this.grid.setCell(111, 20, 1);
    this.grid.setCell(112, 20, 1);
    this.grid.setCell(113, 20, 1);
    this.grid.setCell(114, 20, 1);

    this.grid.setCell(9, 21, 1);

    this.grid.setCell(17, 21, 1);
    this.grid.setCell(18, 21, 1);
    this.grid.setCell(19, 21, 1);
    this.grid.setCell(20, 21, 1);
    this.grid.setCell(21, 21, 1);
    this.grid.setCell(22, 21, 1);
    this.grid.setCell(23, 21, 1);
    this.grid.setCell(24, 21, 1);
    this.grid.setCell(25, 21, 1);
    this.grid.setCell(26, 21, 1);
    this.grid.setCell(27, 21, 1);
    this.grid.setCell(28, 21, 1);
    this.grid.setCell(29, 21, 1);

    this.grid.setCell(34, 21, 1);
    this.grid.setCell(35, 21, 1);
    this.grid.setCell(36, 21, 1);
    this.grid.setCell(37, 21, 1);

    this.grid.setCell(55, 21, 1);
    this.grid.setCell(56, 21, 1);

    this.grid.setCell(63, 21, 1);
    this.grid.setCell(64, 21, 1);

    this.grid.setCell(67, 21, 1);
    this.grid.setCell(68, 21, 1);
    this.grid.setCell(69, 21, 1);
    this.grid.setCell(70, 21, 1);
    this.grid.setCell(71, 21, 1);
    this.grid.setCell(72, 21, 1);
    this.grid.setCell(73, 21, 1);
    this.grid.setCell(74, 21, 1);
    this.grid.setCell(75, 21, 1);
    this.grid.setCell(76, 21, 1);
    this.grid.setCell(77, 21, 1);
    this.grid.setCell(78, 21, 1);
    this.grid.setCell(79, 21, 1);
    this.grid.setCell(80, 21, 1);
    this.grid.setCell(81, 21, 1);
    this.grid.setCell(82, 21, 1);
    this.grid.setCell(83, 21, 1);
    this.grid.setCell(84, 21, 1);
    this.grid.setCell(85, 21, 1);
    this.grid.setCell(86, 21, 1);
    this.grid.setCell(87, 21, 1);
    this.grid.setCell(88, 21, 1);
    this.grid.setCell(89, 21, 1);
    this.grid.setCell(90, 21, 1);
    this.grid.setCell(91, 21, 1);
    this.grid.setCell(92, 21, 1);
    this.grid.setCell(93, 21, 1);
    this.grid.setCell(94, 21, 1);
    this.grid.setCell(95, 21, 1);
    this.grid.setCell(96, 21, 1);
    this.grid.setCell(97, 21, 1);
    this.grid.setCell(98, 21, 1);
    this.grid.setCell(99, 21, 1);
    this.grid.setCell(100, 21, 1);
    this.grid.setCell(101, 21, 1);
    this.grid.setCell(102, 21, 1);
    this.grid.setCell(103, 21, 1);
    this.grid.setCell(104, 21, 1);
    this.grid.setCell(105, 21, 1);
    this.grid.setCell(106, 21, 1);
    this.grid.setCell(107, 21, 1);
    this.grid.setCell(108, 21, 1);
    this.grid.setCell(109, 21, 1);
    this.grid.setCell(110, 21, 1);
    this.grid.setCell(111, 21, 1);
    this.grid.setCell(112, 21, 1);

    this.grid.setCell(8, 22, 1);

    this.grid.setCell(18, 22, 1);
    this.grid.setCell(19, 22, 1);
    this.grid.setCell(20, 22, 1);
    this.grid.setCell(21, 22, 1);
    this.grid.setCell(22, 22, 1);
    this.grid.setCell(23, 22, 1);
    this.grid.setCell(24, 22, 1);
    this.grid.setCell(25, 22, 1);
    this.grid.setCell(26, 22, 1);
    this.grid.setCell(27, 22, 1);
    this.grid.setCell(28, 22, 1);
    this.grid.setCell(29, 22, 1);
    this.grid.setCell(30, 22, 1);

    this.grid.setCell(35, 22, 1);
    this.grid.setCell(36, 22, 1);
    this.grid.setCell(37, 22, 1);
    this.grid.setCell(38, 22, 1);

    this.grid.setCell(56, 22, 1);
    this.grid.setCell(57, 22, 1);

    this.grid.setCell(63, 22, 1);

    this.grid.setCell(65, 22, 1);
    this.grid.setCell(66, 22, 1);
    this.grid.setCell(67, 22, 1);
    this.grid.setCell(68, 22, 1);
    this.grid.setCell(69, 22, 1);
    this.grid.setCell(70, 22, 1);
    this.grid.setCell(71, 22, 1);
    this.grid.setCell(72, 22, 1);
    this.grid.setCell(73, 22, 1);
    this.grid.setCell(74, 22, 1);
    this.grid.setCell(75, 22, 1);
    this.grid.setCell(76, 22, 1);
    this.grid.setCell(77, 22, 1);
    this.grid.setCell(78, 22, 1);
    this.grid.setCell(79, 22, 1);
    this.grid.setCell(80, 22, 1);
    this.grid.setCell(81, 22, 1);
    this.grid.setCell(82, 22, 1);
    this.grid.setCell(83, 22, 1);
    this.grid.setCell(84, 22, 1);
    this.grid.setCell(85, 22, 1);
    this.grid.setCell(86, 22, 1);
    this.grid.setCell(87, 22, 1);
    this.grid.setCell(88, 22, 1);
    this.grid.setCell(89, 22, 1);
    this.grid.setCell(90, 22, 1);
    this.grid.setCell(91, 22, 1);
    this.grid.setCell(92, 22, 1);
    this.grid.setCell(93, 22, 1);
    this.grid.setCell(94, 22, 1);
    this.grid.setCell(95, 22, 1);
    this.grid.setCell(96, 22, 1);
    this.grid.setCell(97, 22, 1);
    this.grid.setCell(98, 22, 1);
    this.grid.setCell(99, 22, 1);
    this.grid.setCell(100, 22, 1);
    this.grid.setCell(101, 22, 1);
    this.grid.setCell(102, 22, 1);
    this.grid.setCell(103, 22, 1);
    this.grid.setCell(104, 22, 1);

    this.grid.setCell(106, 22, 1);
    this.grid.setCell(107, 22, 1);
    this.grid.setCell(108, 22, 1);
    this.grid.setCell(109, 22, 1);
    this.grid.setCell(110, 22, 1);
    this.grid.setCell(111, 22, 1);
    this.grid.setCell(112, 22, 1);

    this.grid.setCell(18, 23, 1);
    this.grid.setCell(19, 23, 1);
    this.grid.setCell(20, 23, 1);
    this.grid.setCell(21, 23, 1);
    this.grid.setCell(22, 23, 1);
    this.grid.setCell(23, 23, 1);
    this.grid.setCell(24, 23, 1);
    this.grid.setCell(25, 23, 1);
    this.grid.setCell(26, 23, 1);
    this.grid.setCell(27, 23, 1);
    this.grid.setCell(28, 23, 1);
    this.grid.setCell(29, 23, 1);
    this.grid.setCell(30, 23, 1);
    this.grid.setCell(31, 23, 1);
    this.grid.setCell(32, 23, 1);

    this.grid.setCell(35, 23, 1);
    this.grid.setCell(36, 23, 1);
    this.grid.setCell(37, 23, 1);
    this.grid.setCell(38, 23, 1);
    this.grid.setCell(39, 23, 1);

    this.grid.setCell(54, 23, 1);

    this.grid.setCell(56, 23, 1);
    this.grid.setCell(57, 23, 1);

    this.grid.setCell(60, 23, 1);

    this.grid.setCell(62, 23, 1);

    this.grid.setCell(64, 23, 1);
    this.grid.setCell(65, 23, 1);
    this.grid.setCell(66, 23, 1);
    this.grid.setCell(67, 23, 1);
    this.grid.setCell(68, 23, 1);
    this.grid.setCell(69, 23, 1);
    this.grid.setCell(70, 23, 1);
    this.grid.setCell(71, 23, 1);
    this.grid.setCell(72, 23, 1);
    this.grid.setCell(73, 23, 1);
    this.grid.setCell(74, 23, 1);
    this.grid.setCell(75, 23, 1);
    this.grid.setCell(76, 23, 1);
    this.grid.setCell(77, 23, 1);
    this.grid.setCell(78, 23, 1);
    this.grid.setCell(79, 23, 1);
    this.grid.setCell(80, 23, 1);
    this.grid.setCell(81, 23, 1);
    this.grid.setCell(82, 23, 1);
    this.grid.setCell(83, 23, 1);
    this.grid.setCell(84, 23, 1);
    this.grid.setCell(85, 23, 1);
    this.grid.setCell(86, 23, 1);
    this.grid.setCell(87, 23, 1);
    this.grid.setCell(88, 23, 1);
    this.grid.setCell(89, 23, 1);
    this.grid.setCell(90, 23, 1);
    this.grid.setCell(91, 23, 1);
    this.grid.setCell(92, 23, 1);
    this.grid.setCell(93, 23, 1);
    this.grid.setCell(94, 23, 1);
    this.grid.setCell(95, 23, 1);
    this.grid.setCell(96, 23, 1);
    this.grid.setCell(97, 23, 1);
    this.grid.setCell(98, 23, 1);
    this.grid.setCell(99, 23, 1);
    this.grid.setCell(100, 23, 1);
    this.grid.setCell(101, 23, 1);
    this.grid.setCell(102, 23, 1);
    this.grid.setCell(103, 23, 1);

    this.grid.setCell(106, 23, 1);
    this.grid.setCell(107, 23, 1);
    this.grid.setCell(108, 23, 1);
    this.grid.setCell(109, 23, 1);
    this.grid.setCell(110, 23, 1);
    this.grid.setCell(111, 23, 1);

    this.grid.setCell(19, 24, 1);
    this.grid.setCell(20, 24, 1);
    this.grid.setCell(21, 24, 1);
    this.grid.setCell(22, 24, 1);
    this.grid.setCell(23, 24, 1);
    this.grid.setCell(24, 24, 1);
    this.grid.setCell(25, 24, 1);
    this.grid.setCell(26, 24, 1);
    this.grid.setCell(27, 24, 1);
    this.grid.setCell(28, 24, 1);
    this.grid.setCell(29, 24, 1);
    this.grid.setCell(30, 24, 1);
    this.grid.setCell(31, 24, 1);
    this.grid.setCell(32, 24, 1);

    this.grid.setCell(34, 24, 1);
    this.grid.setCell(35, 24, 1);
    this.grid.setCell(36, 24, 1);
    this.grid.setCell(37, 24, 1);
    this.grid.setCell(38, 24, 1);

    this.grid.setCell(40, 24, 1);

    this.grid.setCell(54, 24, 1);

    this.grid.setCell(56, 24, 1);

    this.grid.setCell(59, 24, 1);
    this.grid.setCell(60, 24, 1);
    this.grid.setCell(61, 24, 1);
    this.grid.setCell(62, 24, 1);
    this.grid.setCell(63, 24, 1);
    this.grid.setCell(64, 24, 1);
    this.grid.setCell(65, 24, 1);
    this.grid.setCell(66, 24, 1);
    this.grid.setCell(67, 24, 1);
    this.grid.setCell(68, 24, 1);
    this.grid.setCell(69, 24, 1);
    this.grid.setCell(70, 24, 1);
    this.grid.setCell(71, 24, 1);
    this.grid.setCell(72, 24, 1);
    this.grid.setCell(73, 24, 1);
    this.grid.setCell(74, 24, 1);
    this.grid.setCell(75, 24, 1);
    this.grid.setCell(76, 24, 1);
    this.grid.setCell(77, 24, 1);
    this.grid.setCell(78, 24, 1);
    this.grid.setCell(79, 24, 1);
    this.grid.setCell(80, 24, 1);
    this.grid.setCell(81, 24, 1);
    this.grid.setCell(82, 24, 1);
    this.grid.setCell(83, 24, 1);
    this.grid.setCell(84, 24, 1);
    this.grid.setCell(85, 24, 1);
    this.grid.setCell(86, 24, 1);
    this.grid.setCell(87, 24, 1);
    this.grid.setCell(88, 24, 1);
    this.grid.setCell(89, 24, 1);
    this.grid.setCell(90, 24, 1);
    this.grid.setCell(91, 24, 1);
    this.grid.setCell(92, 24, 1);
    this.grid.setCell(93, 24, 1);
    this.grid.setCell(94, 24, 1);
    this.grid.setCell(95, 24, 1);
    this.grid.setCell(96, 24, 1);
    this.grid.setCell(97, 24, 1);
    this.grid.setCell(98, 24, 1);
    this.grid.setCell(99, 24, 1);
    this.grid.setCell(100, 24, 1);
    
    this.grid.setCell(105, 24, 1);
    this.grid.setCell(106, 24, 1);
    this.grid.setCell(107, 24, 1);

    this.grid.setCell(20, 25, 1);
    this.grid.setCell(21, 25, 1);
    this.grid.setCell(22, 25, 1);
    this.grid.setCell(23, 25, 1);
    this.grid.setCell(24, 25, 1);
    this.grid.setCell(25, 25, 1);
    this.grid.setCell(26, 25, 1);
    this.grid.setCell(27, 25, 1);
    this.grid.setCell(28, 25, 1);
    this.grid.setCell(29, 25, 1);
    this.grid.setCell(30, 25, 1);
    this.grid.setCell(31, 25, 1);
    this.grid.setCell(32, 25, 1);
    this.grid.setCell(33, 25, 1);
    this.grid.setCell(34, 25, 1);
    this.grid.setCell(35, 25, 1);
    this.grid.setCell(36, 25, 1);
    this.grid.setCell(37, 25, 1);

    this.grid.setCell(40, 25, 1);
    this.grid.setCell(41, 25, 1);

    this.grid.setCell(57, 25, 1);
    this.grid.setCell(58, 25, 1);
    this.grid.setCell(59, 25, 1);
    this.grid.setCell(60, 25, 1);
    this.grid.setCell(61, 25, 1);
    this.grid.setCell(62, 25, 1);
    this.grid.setCell(63, 25, 1);
    this.grid.setCell(64, 25, 1);

    this.grid.setCell(66, 25, 1);
    this.grid.setCell(67, 25, 1);
    this.grid.setCell(68, 25, 1);
    this.grid.setCell(69, 25, 1);

    this.grid.setCell(71, 25, 1);
    this.grid.setCell(72, 25, 1);
    this.grid.setCell(73, 25, 1);
    this.grid.setCell(74, 25, 1);
    this.grid.setCell(75, 25, 1);
    this.grid.setCell(76, 25, 1);
    this.grid.setCell(77, 25, 1);
    this.grid.setCell(78, 25, 1);
    this.grid.setCell(79, 25, 1);
    this.grid.setCell(80, 25, 1);
    this.grid.setCell(81, 25, 1);
    this.grid.setCell(82, 25, 1);
    this.grid.setCell(83, 25, 1);
    this.grid.setCell(84, 25, 1);
    this.grid.setCell(85, 25, 1);
    this.grid.setCell(86, 25, 1);
    this.grid.setCell(87, 25, 1);
    this.grid.setCell(88, 25, 1);
    this.grid.setCell(89, 25, 1);
    this.grid.setCell(90, 25, 1);
    this.grid.setCell(91, 25, 1);
    this.grid.setCell(92, 25, 1);
    this.grid.setCell(93, 25, 1);
    this.grid.setCell(94, 25, 1);
    this.grid.setCell(95, 25, 1);
    this.grid.setCell(96, 25, 1);
    this.grid.setCell(97, 25, 1);
    this.grid.setCell(98, 25, 1);
    this.grid.setCell(99, 25, 1);

    this.grid.setCell(105, 25, 1);
    this.grid.setCell(106, 25, 1);
    this.grid.setCell(107, 25, 1);

    this.grid.setCell(19, 26, 1);
    this.grid.setCell(20, 26, 1);
    this.grid.setCell(21, 26, 1);
    this.grid.setCell(22, 26, 1);
    this.grid.setCell(23, 26, 1);
    this.grid.setCell(24, 26, 1);
    this.grid.setCell(25, 26, 1);
    this.grid.setCell(26, 26, 1);
    this.grid.setCell(27, 26, 1);
    this.grid.setCell(28, 26, 1);
    this.grid.setCell(29, 26, 1);
    this.grid.setCell(30, 26, 1);
    this.grid.setCell(31, 26, 1);
    this.grid.setCell(32, 26, 1);
    this.grid.setCell(33, 26, 1);
    this.grid.setCell(34, 26, 1);
    this.grid.setCell(35, 26, 1);
    this.grid.setCell(36, 26, 1);
    this.grid.setCell(37, 26, 1);
    this.grid.setCell(38, 26, 1);

    this.grid.setCell(40, 26, 1);
    this.grid.setCell(41, 26, 1);
    this.grid.setCell(42, 26, 1);

    this.grid.setCell(58, 26, 1);
    this.grid.setCell(59, 26, 1);
    this.grid.setCell(60, 26, 1);
    this.grid.setCell(61, 26, 1);
    this.grid.setCell(62, 26, 1);
    this.grid.setCell(63, 26, 1);

    this.grid.setCell(67, 26, 1);
    this.grid.setCell(68, 26, 1);

    this.grid.setCell(70, 26, 1);
    this.grid.setCell(71, 26, 1);
    this.grid.setCell(72, 26, 1);
    this.grid.setCell(73, 26, 1);
    this.grid.setCell(74, 26, 1);
    this.grid.setCell(75, 26, 1);
    this.grid.setCell(76, 26, 1);
    this.grid.setCell(77, 26, 1);
    this.grid.setCell(78, 26, 1);
    this.grid.setCell(79, 26, 1);
    this.grid.setCell(80, 26, 1);
    this.grid.setCell(81, 26, 1);
    this.grid.setCell(82, 26, 1);
    this.grid.setCell(83, 26, 1);
    this.grid.setCell(84, 26, 1);
    this.grid.setCell(85, 26, 1);
    this.grid.setCell(86, 26, 1);
    this.grid.setCell(87, 26, 1);
    this.grid.setCell(88, 26, 1);
    this.grid.setCell(89, 26, 1);
    this.grid.setCell(90, 26, 1);
    this.grid.setCell(91, 26, 1);
    this.grid.setCell(92, 26, 1);
    this.grid.setCell(93, 26, 1);
    this.grid.setCell(94, 26, 1);
    this.grid.setCell(95, 26, 1);
    this.grid.setCell(96, 26, 1);
    this.grid.setCell(97, 26, 1);
    this.grid.setCell(98, 26, 1);
    this.grid.setCell(99, 26, 1);

    this.grid.setCell(105, 26, 1);
    this.grid.setCell(106, 26, 1);

    this.grid.setCell(19, 27, 1);
    this.grid.setCell(20, 27, 1);
    this.grid.setCell(21, 27, 1);
    this.grid.setCell(22, 27, 1);
    this.grid.setCell(23, 27, 1);
    this.grid.setCell(24, 27, 1);
    this.grid.setCell(25, 27, 1);
    this.grid.setCell(26, 27, 1);
    this.grid.setCell(27, 27, 1);
    this.grid.setCell(28, 27, 1);
    this.grid.setCell(29, 27, 1);
    this.grid.setCell(30, 27, 1);
    this.grid.setCell(31, 27, 1);
    this.grid.setCell(32, 27, 1);
    this.grid.setCell(33, 27, 1);
    this.grid.setCell(34, 27, 1);
    this.grid.setCell(35, 27, 1);
    this.grid.setCell(36, 27, 1);
    this.grid.setCell(37, 27, 1);

    this.grid.setCell(58, 27, 1);
    this.grid.setCell(59, 27, 1);
    this.grid.setCell(60, 27, 1);
    this.grid.setCell(61, 27, 1);
    this.grid.setCell(62, 27, 1);
    this.grid.setCell(63, 27, 1);

    this.grid.setCell(66, 27, 1);
    this.grid.setCell(67, 27, 1);
    this.grid.setCell(68, 27, 1);

    this.grid.setCell(71, 27, 1);
    this.grid.setCell(72, 27, 1);
    this.grid.setCell(73, 27, 1);
    this.grid.setCell(74, 27, 1);
    this.grid.setCell(75, 27, 1);
    this.grid.setCell(76, 27, 1);
    this.grid.setCell(77, 27, 1);
    this.grid.setCell(78, 27, 1);
    this.grid.setCell(79, 27, 1);
    this.grid.setCell(80, 27, 1);
    this.grid.setCell(81, 27, 1);
    this.grid.setCell(82, 27, 1);
    this.grid.setCell(83, 27, 1);
    this.grid.setCell(84, 27, 1);
    this.grid.setCell(85, 27, 1);
    this.grid.setCell(86, 27, 1);
    this.grid.setCell(87, 27, 1);
    this.grid.setCell(88, 27, 1);
    this.grid.setCell(89, 27, 1);
    this.grid.setCell(90, 27, 1);
    this.grid.setCell(91, 27, 1);
    this.grid.setCell(92, 27, 1);
    this.grid.setCell(93, 27, 1);
    this.grid.setCell(94, 27, 1);
    this.grid.setCell(95, 27, 1);
    this.grid.setCell(96, 27, 1);
    this.grid.setCell(97, 27, 1);
    this.grid.setCell(98, 27, 1);

    this.grid.setCell(19, 28, 1);
    this.grid.setCell(20, 28, 1);
    this.grid.setCell(21, 28, 1);
    this.grid.setCell(22, 28, 1);
    this.grid.setCell(23, 28, 1);
    this.grid.setCell(24, 28, 1);
    this.grid.setCell(25, 28, 1);
    this.grid.setCell(26, 28, 1);
    this.grid.setCell(27, 28, 1);
    this.grid.setCell(28, 28, 1);
    this.grid.setCell(29, 28, 1);
    this.grid.setCell(30, 28, 1);
    this.grid.setCell(31, 28, 1);
    this.grid.setCell(32, 28, 1);
    this.grid.setCell(33, 28, 1);
    this.grid.setCell(34, 28, 1);
    this.grid.setCell(35, 28, 1);

    this.grid.setCell(56, 28, 1);
    this.grid.setCell(57, 28, 1);
    this.grid.setCell(58, 28, 1);

    this.grid.setCell(60, 28, 1);
    this.grid.setCell(61, 28, 1);

    this.grid.setCell(63, 28, 1);
    this.grid.setCell(64, 28, 1);
    this.grid.setCell(65, 28, 1);
    this.grid.setCell(66, 28, 1);
    this.grid.setCell(67, 28, 1);
    this.grid.setCell(68, 28, 1);
    this.grid.setCell(69, 28, 1);

    this.grid.setCell(71, 28, 1);
    this.grid.setCell(72, 28, 1);
    this.grid.setCell(73, 28, 1);
    this.grid.setCell(74, 28, 1);
    this.grid.setCell(75, 28, 1);
    this.grid.setCell(76, 28, 1);
    this.grid.setCell(77, 28, 1);
    this.grid.setCell(78, 28, 1);
    this.grid.setCell(79, 28, 1);
    this.grid.setCell(80, 28, 1);
    this.grid.setCell(81, 28, 1);
    this.grid.setCell(82, 28, 1);
    this.grid.setCell(83, 28, 1);
    this.grid.setCell(84, 28, 1);
    this.grid.setCell(85, 28, 1);
    this.grid.setCell(86, 28, 1);
    this.grid.setCell(87, 28, 1);
    this.grid.setCell(88, 28, 1);
    this.grid.setCell(89, 28, 1);
    this.grid.setCell(90, 28, 1);
    this.grid.setCell(91, 28, 1);
    this.grid.setCell(92, 28, 1);
    this.grid.setCell(93, 28, 1);
    this.grid.setCell(94, 28, 1);
    this.grid.setCell(95, 28, 1);
    this.grid.setCell(96, 28, 1);
    this.grid.setCell(97, 28, 1);
    this.grid.setCell(98, 28, 1);
    this.grid.setCell(99, 28, 1);
    this.grid.setCell(100, 28, 1);

    this.grid.setCell(102, 28, 1);

    this.grid.setCell(19, 29, 1);
    this.grid.setCell(20, 29, 1);
    this.grid.setCell(21, 29, 1);
    this.grid.setCell(22, 29, 1);
    this.grid.setCell(23, 29, 1);
    this.grid.setCell(24, 29, 1);
    this.grid.setCell(25, 29, 1);
    this.grid.setCell(26, 29, 1);


    this.grid.setCell(31, 29, 1);
    this.grid.setCell(32, 29, 1);
    this.grid.setCell(33, 29, 1);
    this.grid.setCell(34, 29, 1);

    this.grid.setCell(55, 29, 1);
    this.grid.setCell(56, 29, 1);
    this.grid.setCell(57, 29, 1);
    this.grid.setCell(58, 29, 1);

    this.grid.setCell(61, 29, 1);

    this.grid.setCell(64, 29, 1);
    this.grid.setCell(65, 29, 1);
    this.grid.setCell(66, 29, 1);
    this.grid.setCell(67, 29, 1);
    this.grid.setCell(68, 29, 1);
    this.grid.setCell(69, 29, 1);
    this.grid.setCell(70, 29, 1);
    this.grid.setCell(71, 29, 1);
    this.grid.setCell(72, 29, 1);
    this.grid.setCell(73, 29, 1);
    this.grid.setCell(74, 29, 1);
    this.grid.setCell(75, 29, 1);
    this.grid.setCell(76, 29, 1);
    this.grid.setCell(77, 29, 1);
    this.grid.setCell(78, 29, 1);
    this.grid.setCell(79, 29, 1);
    this.grid.setCell(80, 29, 1);
    this.grid.setCell(81, 29, 1);
    this.grid.setCell(82, 29, 1);
    this.grid.setCell(83, 29, 1);
    this.grid.setCell(84, 29, 1);
    this.grid.setCell(85, 29, 1);
    this.grid.setCell(86, 29, 1);
    this.grid.setCell(87, 29, 1);
    this.grid.setCell(88, 29, 1);
    this.grid.setCell(89, 29, 1);
    this.grid.setCell(90, 29, 1);
    this.grid.setCell(91, 29, 1);
    this.grid.setCell(92, 29, 1);
    this.grid.setCell(93, 29, 1);
    this.grid.setCell(94, 29, 1);
    this.grid.setCell(95, 29, 1);
    this.grid.setCell(96, 29, 1);
    this.grid.setCell(97, 29, 1);
    this.grid.setCell(98, 29, 1);
    this.grid.setCell(99, 29, 1);
    this.grid.setCell(100, 29, 1);

    this.grid.setCell(102, 29, 1);

    this.grid.setCell(20, 30, 1);
    this.grid.setCell(21, 30, 1);
    this.grid.setCell(22, 30, 1);
    this.grid.setCell(23, 30, 1);
    this.grid.setCell(24, 30, 1);
    this.grid.setCell(25, 30, 1);

    this.grid.setCell(32, 30, 1);

    this.grid.setCell(55, 30, 1);
    this.grid.setCell(56, 30, 1);
    this.grid.setCell(57, 30, 1);

    this.grid.setCell(63, 30, 1);
    this.grid.setCell(64, 30, 1);
    this.grid.setCell(65, 30, 1);
    this.grid.setCell(66, 30, 1);
    this.grid.setCell(67, 30, 1);
    this.grid.setCell(68, 30, 1);
    this.grid.setCell(69, 30, 1);
    this.grid.setCell(70, 30, 1);
    this.grid.setCell(71, 30, 1);
    this.grid.setCell(72, 30, 1);
    this.grid.setCell(73, 30, 1);
    this.grid.setCell(74, 30, 1);
    this.grid.setCell(75, 30, 1);
    this.grid.setCell(76, 30, 1);
    this.grid.setCell(77, 30, 1);
    this.grid.setCell(78, 30, 1);
    this.grid.setCell(79, 30, 1);
    this.grid.setCell(80, 30, 1);
    this.grid.setCell(81, 30, 1);
    this.grid.setCell(82, 30, 1);
    this.grid.setCell(83, 30, 1);
    this.grid.setCell(84, 30, 1);
    this.grid.setCell(85, 30, 1);
    this.grid.setCell(86, 30, 1);
    this.grid.setCell(87, 30, 1);
    this.grid.setCell(88, 30, 1);
    this.grid.setCell(89, 30, 1);
    this.grid.setCell(90, 30, 1);
    this.grid.setCell(91, 30, 1);
    this.grid.setCell(92, 30, 1);
    this.grid.setCell(93, 30, 1);
    this.grid.setCell(94, 30, 1);
    this.grid.setCell(95, 30, 1);
    this.grid.setCell(96, 30, 1);
    this.grid.setCell(97, 30, 1);
    this.grid.setCell(98, 30, 1);
    this.grid.setCell(99, 30, 1);

    this.grid.setCell(101, 30, 1);
    this.grid.setCell(102, 30, 1);

    this.grid.setCell(20, 31, 1);
    this.grid.setCell(21, 31, 1);
    this.grid.setCell(22, 31, 1);
    this.grid.setCell(23, 31, 1);
    this.grid.setCell(24, 31, 1);

    this.grid.setCell(55, 31, 1);
    this.grid.setCell(56, 31, 1);

    this.grid.setCell(60, 31, 1);
    this.grid.setCell(61, 31, 1);

    this.grid.setCell(63, 31, 1);
    this.grid.setCell(64, 31, 1);
    this.grid.setCell(65, 31, 1);
    this.grid.setCell(66, 31, 1);
    this.grid.setCell(67, 31, 1);
    this.grid.setCell(68, 31, 1);
    this.grid.setCell(69, 31, 1);

    this.grid.setCell(72, 31, 1);
    this.grid.setCell(73, 31, 1);
    this.grid.setCell(74, 31, 1);
    this.grid.setCell(75, 31, 1);
    this.grid.setCell(76, 31, 1);
    this.grid.setCell(77, 31, 1);
    this.grid.setCell(78, 31, 1);
    this.grid.setCell(79, 31, 1);
    this.grid.setCell(80, 31, 1);
    this.grid.setCell(81, 31, 1);
    this.grid.setCell(82, 31, 1);
    this.grid.setCell(83, 31, 1);
    this.grid.setCell(84, 31, 1);
    this.grid.setCell(85, 31, 1);
    this.grid.setCell(86, 31, 1);
    this.grid.setCell(87, 31, 1);
    this.grid.setCell(88, 31, 1);
    this.grid.setCell(89, 31, 1);
    this.grid.setCell(90, 31, 1);
    this.grid.setCell(91, 31, 1);
    this.grid.setCell(92, 31, 1);
    this.grid.setCell(93, 31, 1);
    this.grid.setCell(94, 31, 1);
    this.grid.setCell(95, 31, 1);
    this.grid.setCell(96, 31, 1);
    this.grid.setCell(97, 31, 1);
    this.grid.setCell(98, 31, 1);
    this.grid.setCell(99, 31, 1);

    this.grid.setCell(101, 31, 1);
    this.grid.setCell(102, 31, 1);

    this.grid.setCell(20, 32, 1);

    this.grid.setCell(22, 32, 1);
    this.grid.setCell(23, 32, 1);
    this.grid.setCell(24, 32, 1);

    this.grid.setCell(31, 32, 1);

    this.grid.setCell(58, 32, 1);
    this.grid.setCell(59, 32, 1);
    this.grid.setCell(60, 32, 1);
    this.grid.setCell(61, 32, 1);
    this.grid.setCell(62, 32, 1);

    this.grid.setCell(64, 32, 1);
    this.grid.setCell(65, 32, 1);
    this.grid.setCell(66, 32, 1);
    this.grid.setCell(67, 32, 1);
    this.grid.setCell(68, 32, 1);
    this.grid.setCell(69, 32, 1);
    this.grid.setCell(70, 32, 1);

    this.grid.setCell(75, 32, 1);
    this.grid.setCell(76, 32, 1);
    this.grid.setCell(77, 32, 1);
    this.grid.setCell(78, 32, 1);
    this.grid.setCell(79, 32, 1);
    this.grid.setCell(80, 32, 1);
    this.grid.setCell(81, 32, 1);
    this.grid.setCell(82, 32, 1);
    this.grid.setCell(83, 32, 1);
    this.grid.setCell(84, 32, 1);
    this.grid.setCell(85, 32, 1);
    this.grid.setCell(86, 32, 1);
    this.grid.setCell(87, 32, 1);
    this.grid.setCell(88, 32, 1);
    this.grid.setCell(89, 32, 1);
    this.grid.setCell(90, 32, 1);
    this.grid.setCell(91, 32, 1);
    this.grid.setCell(92, 32, 1);
    this.grid.setCell(93, 32, 1);
    this.grid.setCell(94, 32, 1);
    this.grid.setCell(95, 32, 1);
    this.grid.setCell(96, 32, 1);
    this.grid.setCell(97, 32, 1);

    this.grid.setCell(101, 32, 1);

    this.grid.setCell(20, 33, 1);

    this.grid.setCell(22, 33, 1);
    this.grid.setCell(23, 33, 1);
    this.grid.setCell(24, 33, 1);

    this.grid.setCell(32, 33, 1);

    this.grid.setCell(55, 33, 1);
    this.grid.setCell(56, 33, 1);
    this.grid.setCell(57, 33, 1);
    this.grid.setCell(58, 33, 1);
    this.grid.setCell(59, 33, 1);
    this.grid.setCell(60, 33, 1);
    this.grid.setCell(61, 33, 1);
    this.grid.setCell(62, 33, 1);
    this.grid.setCell(63, 33, 1);

    this.grid.setCell(65, 33, 1);
    this.grid.setCell(66, 33, 1);
    this.grid.setCell(67, 33, 1);
    this.grid.setCell(68, 33, 1);
    this.grid.setCell(69, 33, 1);
    this.grid.setCell(70, 33, 1);
    this.grid.setCell(71, 33, 1);
    this.grid.setCell(72, 33, 1);
    this.grid.setCell(73, 33, 1);

    this.grid.setCell(76, 33, 1);
    this.grid.setCell(76, 33, 1);
    this.grid.setCell(77, 33, 1);
    this.grid.setCell(78, 33, 1);
    this.grid.setCell(79, 33, 1);
    this.grid.setCell(80, 33, 1);
    this.grid.setCell(81, 33, 1);
    this.grid.setCell(82, 33, 1);
    this.grid.setCell(83, 33, 1);
    this.grid.setCell(84, 33, 1);
    this.grid.setCell(85, 33, 1);
    this.grid.setCell(86, 33, 1);
    this.grid.setCell(87, 33, 1);
    this.grid.setCell(88, 33, 1);
    this.grid.setCell(89, 33, 1);
    this.grid.setCell(90, 33, 1);
    this.grid.setCell(91, 33, 1);
    this.grid.setCell(92, 33, 1);
    this.grid.setCell(93, 33, 1);
    this.grid.setCell(94, 33, 1);
    this.grid.setCell(95, 33, 1);
    this.grid.setCell(96, 33, 1);
    this.grid.setCell(97, 33, 1);

    this.grid.setCell(99, 33, 1);
    this.grid.setCell(100, 33, 1);

    this.grid.setCell(102, 33, 1);

    this.grid.setCell(21, 34, 1);

    this.grid.setCell(23, 34, 1);
    this.grid.setCell(24, 34, 1);
    this.grid.setCell(25, 34, 1);

    this.grid.setCell(27, 34, 1);
    this.grid.setCell(28, 34, 1);

    this.grid.setCell(33, 34, 1);
    this.grid.setCell(34, 34, 1);

    this.grid.setCell(55, 34, 1);
    this.grid.setCell(56, 34, 1);
    this.grid.setCell(57, 34, 1);
    this.grid.setCell(58, 34, 1);
    this.grid.setCell(59, 34, 1);
    this.grid.setCell(60, 34, 1);
    this.grid.setCell(61, 34, 1);
    this.grid.setCell(62, 34, 1);
    this.grid.setCell(63, 34, 1);
    this.grid.setCell(64, 34, 1);

    this.grid.setCell(66, 34, 1);
    this.grid.setCell(67, 34, 1);
    this.grid.setCell(68, 34, 1);
    this.grid.setCell(69, 34, 1);
    this.grid.setCell(70, 34, 1);
    this.grid.setCell(71, 34, 1);
    this.grid.setCell(72, 34, 1);

    this.grid.setCell(79, 34, 1);
    this.grid.setCell(80, 34, 1);
    this.grid.setCell(81, 34, 1);
    this.grid.setCell(82, 34, 1);
    this.grid.setCell(83, 34, 1);
    this.grid.setCell(84, 34, 1);
    this.grid.setCell(85, 34, 1);
    this.grid.setCell(86, 34, 1);
    this.grid.setCell(87, 34, 1);
    this.grid.setCell(88, 34, 1);
    this.grid.setCell(89, 34, 1);
    this.grid.setCell(90, 34, 1);
    this.grid.setCell(91, 34, 1);
    this.grid.setCell(92, 34, 1);
    this.grid.setCell(93, 34, 1);
    this.grid.setCell(94, 34, 1);
    this.grid.setCell(95, 34, 1);
    this.grid.setCell(96, 34, 1);

    this.grid.setCell(99, 34, 1);
    this.grid.setCell(100, 34, 1);

    this.grid.setCell(21, 35, 1);

    this.grid.setCell(24, 35, 1);
    this.grid.setCell(25, 35, 1);
    this.grid.setCell(26, 35, 1);
    this.grid.setCell(27, 35, 1);;

    this.grid.setCell(33, 35, 1);
    this.grid.setCell(34, 35, 1);

    this.grid.setCell(54, 35, 1);
    this.grid.setCell(55, 35, 1);
    this.grid.setCell(56, 35, 1);
    this.grid.setCell(57, 35, 1);
    this.grid.setCell(58, 35, 1);
    this.grid.setCell(59, 35, 1);
    this.grid.setCell(60, 35, 1);
    this.grid.setCell(61, 35, 1);
    this.grid.setCell(62, 35, 1);
    this.grid.setCell(63, 35, 1);
    this.grid.setCell(64, 35, 1);
    this.grid.setCell(65, 35, 1);

    this.grid.setCell(67, 35, 1);
    this.grid.setCell(68, 35, 1);
    this.grid.setCell(69, 35, 1);
    this.grid.setCell(70, 35, 1);
    this.grid.setCell(71, 35, 1);

    this.grid.setCell(79, 35, 1);
    this.grid.setCell(80, 35, 1);
    this.grid.setCell(81, 35, 1);
    this.grid.setCell(82, 35, 1);
    this.grid.setCell(83, 35, 1);
    this.grid.setCell(84, 35, 1);
    this.grid.setCell(85, 35, 1);
    this.grid.setCell(86, 35, 1);
    this.grid.setCell(87, 35, 1);
    this.grid.setCell(88, 35, 1);
    this.grid.setCell(89, 35, 1);
    this.grid.setCell(90, 35, 1);
    this.grid.setCell(91, 35, 1);
    this.grid.setCell(92, 35, 1);
    this.grid.setCell(93, 35, 1);
    this.grid.setCell(94, 35, 1);
    this.grid.setCell(95, 35, 1);
    this.grid.setCell(96, 35, 1);


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

        if (this.grid.isFlora(x, y)) {
          cellElement.classList.add("flora");
        }

        if (this.grid.isWater(x, y)) {
          cellElement.classList.add("water");
        }

        // Check if the current position matches the NPC position
        if (x === this.npc.x && y === this.npc.y) {
          cellElement.classList.add("cell-entity", "cell-npc", "red"); // Reapply the red CSS class
        }

        if (x === targetX && y === targetY) {
          // Add a glyph element to represent the center of the selected tile
          const glyphElement = document.createElement("div");
          glyphElement.className = "glyph";

          // Check if the current position matches the NPC position
          if (x === this.npc.x && y === this.npc.y) {
            this.interactWithNPC();
            //cellElement.classList.add("cell-entity", "cell-npc", "yellow");
          } else {
            // Player position or empty cell
            glyphElement.innerText = "G";
            cellElement.classList.add("cell-entity");
          }

          // Set the direction class for the glyph element
          glyphElement.classList.add(`cell-entity-${direction}`);

          cellElement.appendChild(glyphElement);
        }

        this.gridElement.appendChild(cellElement);
      }
    }
    //TODO: Remove - these methods are just validating usage
    this.grid.addClassToCell(2, 3, "highlight");
    this.grid.setCellDataAttribute(2, 3, "test", "ABC");
  }
}

function getMovementDirection(prevX, prevY, newX, newY) {
  // Calculate the movement direction based on the previous and new positions
  // Assumes a 45-degree isometric grid

  const deltaX = newX - prevX;
  const deltaY = newY - prevY;

  // Determine the horizontal and vertical movement directions
  let horizontalDirection = "";
  let verticalDirection = "";

  if (deltaX > 0) {
    horizontalDirection = "right";
  } else if (deltaX < 0) {
    horizontalDirection = "left";
  }

  if (deltaY > 0) {
    verticalDirection = "down";
  } else if (deltaY < 0) {
    verticalDirection = "up";
  }

  // Determine the final movement direction based on the horizontal and vertical directions
  let movementDirection = "";

  if (horizontalDirection && verticalDirection) {
    // Diagonal movement
    movementDirection = `${verticalDirection}-${horizontalDirection}`;
  } else if (horizontalDirection) {
    // Horizontal movement
    movementDirection = horizontalDirection;
  } else if (verticalDirection) {
    // Vertical movement
    movementDirection = verticalDirection;
  }

  return movementDirection;
}

document.addEventListener("DOMContentLoaded", function (event) {
  App.init();
});

// Add an event listener to the close button
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => {
  // Hide the dialog box
  const dialogBox = document.getElementById("dialogBox");
  dialogBox.style.display = "none";

  // Remove the modal overlay
  const modalOverlay = document.querySelector(".modal-overlay");
  if (modalOverlay) {
    modalOverlay.remove();
  }
});

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

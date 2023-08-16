import '../css/style.css'
import { darkModeHandle } from "./utils.js";
import { startGame } from "./game.js";

darkModeHandle();

const textarea = document.getElementById("textAreaForPassword");
textarea.addEventListener("input", startGame);



import '../css/style.css'
import { startGame } from "./game.js";

const textarea = document.getElementById("textAreaForPassword");
textarea.addEventListener("input", startGame);



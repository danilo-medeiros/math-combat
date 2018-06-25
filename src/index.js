import Level from "./levels/level";

const gameDiv = document.getElementById("game");
const menuDiv = document.getElementById("main-menu");
const planeSelectionDiv = document.getElementById("plane-selection");
const levelSelectionDiv = document.getElementById("level-selection");

const playButton = document.getElementById("play");
const chooseButton = document.getElementById("choose");
const levelButton = document.getElementById("levels");
const hudDivs = document.getElementsByClassName("hud");
const scoreSpan = document.getElementById("score");
const lifeSpan = document.getElementById("life");
const btnPlaneSelectionButtons = document.getElementsByClassName("btn-plane-selection");
const btnLevelSelectionButtons = document.getElementsByClassName("btn-level-selection");

let selectedPlaneNumber = "1";
let selectedLevelNumber = "1";

const level1 = (p) => new Level(p, scoreSpan, lifeSpan, selectedPlaneNumber, selectedLevelNumber);

for (let i = 0; i < btnLevelSelectionButtons.length; i++) {
	btnLevelSelectionButtons[i].addEventListener("click", () => {
		selectedLevelNumber = btnLevelSelectionButtons[i].id.split("_")[1];
		menuDiv.classList.remove("hidden");
		levelSelectionDiv.classList.add("hidden");
	})
}

for (let i = 0; i < btnPlaneSelectionButtons.length; i++) {
	btnPlaneSelectionButtons[i].addEventListener("click", () => {
		selectedPlaneNumber = btnPlaneSelectionButtons[i].id.split("_")[1];
		menuDiv.classList.remove("hidden");
		planeSelectionDiv.classList.add("hidden");
	})
}

levelButton.addEventListener("click", () => {
	menuDiv.classList.add("hidden");
	levelSelectionDiv.classList.remove("hidden");
})

chooseButton.addEventListener("click", () => {
	menuDiv.classList.add("hidden");
	planeSelectionDiv.classList.remove("hidden");
})

playButton.addEventListener("click", () => {
	initialize();
	new p5(level1, "game");
});

const clean = () => {
	gameDiv.innerHTML = "";
}

const hideMenu = () => {
	menuDiv.classList.add("hidden");
}

const initialize = () => {
	clean();
	hideMenu();
	for (let i = 0; i < hudDivs.length; i++) {
		hudDivs[i].classList.remove("hidden");
	}
}

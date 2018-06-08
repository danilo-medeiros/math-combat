import Level1 from "./levels/level1";

const playButton = document.getElementById("play");
const gameDiv = document.getElementById("game");
const menuDiv = document.getElementById("main-menu");

const level1 = (p) => new Level1(p);

playButton.addEventListener("click", () => {
	clean();
	hideMenu();
	new p5(level1, "game");
});

const clean = () => {
	gameDiv.innerHTML = "";
}

const hideMenu = () => {
	menuDiv.classList.add("hidden");
}


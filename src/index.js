import Level1 from "./levels/level1";

const playButton = document.getElementById("play");
const gameDiv = document.getElementById("game");
const menuDiv = document.getElementById("main-menu");
const hudDivs = document.getElementsByClassName("hud");
const scoreSpan = document.getElementById("score");
const lifeSpan = document.getElementById("life");

const level1 = (p) => new Level1(p, scoreSpan, lifeSpan);

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

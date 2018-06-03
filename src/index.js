import Enemy from "./elements/enemy";
import Player from "./elements/player";
import Elements from "./elements/elements";

let player;
let backgroundImage;

function setup() {
	createCanvas(800, 600);
	player = new Player("1");
	Elements.add(player, new Enemy("1", width / 2));
	backgroundImage = loadImage("assets/img/environment/level_2.png");

}

function draw() {

	background(backgroundImage);

	Elements.list.forEach(e => {
		e.display();
	});

	Elements.checkCollisions();
	
	if (keyIsDown(LEFT_ARROW)) {
		player.move(-1, 0);
	}
	if (keyIsDown(RIGHT_ARROW)) {
		player.move(1, 0);
	}
	if (keyIsDown(UP_ARROW)) {
		player.move(0, -1);
	}
	if (keyIsDown(DOWN_ARROW)) {
		player.move(0, 1);
	}
	if (keyIsDown(32)) {
		player.shot();
	}
	
}

function keyPressed() {
	
}

window.setup = setup;
window.draw = draw;

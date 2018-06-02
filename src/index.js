import Enemy from "./elements/enemy";
import Player from "./elements/player";
import Collision from "./environment/collision"
import Elements from "./elements/elements";

let player;
let collision;

function setup() {
	createCanvas(800, 600);
	player = new Player(0, "1");
	Elements.add(player);
	Elements.add(new Enemy(1, "1", width / 2));
	Elements.add(new Enemy(2, "1", width / 2 - 200));
	Elements.add(new Enemy(3, "1", width / 2 + 200));
	collision = new Collision();
}

function draw() {
	
	background(255, 204, 0);

	Elements.list.forEach(e => {
		e.display();
	});

	collision.check(Elements.list);
	
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

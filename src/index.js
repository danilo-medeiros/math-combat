import Level from "./levels/level";

let level;

function setup() {
	createCanvas(800, 600);
	level = new Level("1", 0);
}

function draw() {

	// background(level.background);
	background(332);

	level.update();

	if (keyIsPressed) {
		level.keyEvent(keyCode);
	}

	/* if (Elements.list.length > 0) {
		if (keyIsDown(LEFT_ARROW)) {
			Elements.list[0].move(-1, 0);
		}
		if (keyIsDown(RIGHT_ARROW)) {
			Elements.list[0].move(1, 0);
		}
		if (keyIsDown(UP_ARROW)) {
			Elements.list[0].move(0, -1);
		}
		if (keyIsDown(DOWN_ARROW)) {
			Elements.list[0].move(0, 1);
		}
		if (keyIsDown(32)) {
			Elements.list[0].shot();
		}
	} */
	
}

window.setup = setup;
window.draw = draw;

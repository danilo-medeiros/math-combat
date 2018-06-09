import Element from "./element";
import { PLANES, EXPLOSIONS, SHOTS } from "../shared/constants";
import Shot from "./shot";

export default class Plane extends Element {

	/*
		* Esta classe define o comportamento do avião
	*/

    constructor(image, x, y) {
		super(image, x, y, 50, 50);
		this.timing = 10;
		this.tolerance = 20;
		this.counter = 0;
		this.timeToShoot = 0;
	}

	showImage(callback) {
		this.counter++;
		if (this.counter === this.timing) {
			this.y += 1;
		}
		if (this.counter === this.timing * 2) {
			this.y -= 1;
			this.counter = 0;
		}
		if (this.timeToShoot > 0)
			this.timeToShoot--;
		super.showImage(callback);
	}

	destroy() {
        super.destroy();
	}
	
	shot() {
		if (this.timeToShoot === 0) {
			let shot = new Shot(0, 15, "shot1", this.x + (this.sizeX / 2), this.y - 70);
			Elements.add(shot);
		}
		this.timeToShoot = 5;
	}

}

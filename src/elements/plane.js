import Element from "./element";
import { PLANES, EXPLOSIONS, SHOTS } from "../shared/constants";
import Shot from "./shot";
import Elements from "./elements";

export default class Plane extends Element {

    constructor(id, type, x, y) {
		super(id, PLANES[type].imgPath, x, y, 100, 100);
		this.counter = 0;
		this.timing = parseInt((0.5/Math.random()) * 10);
		this.tolerance = 0;
		this.timeToShoot = 0;
	}

	display() {
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
		super.display();
	}

	destroy(index) {
        super.destroy(index);
	}
	
	shot() {
		if (this.timeToShoot === 0) {
			Elements.add(new Shot(Elements.list.length+1, 0, 15, "shot1", this.x + this.sizeX / 2, this.y - 70));
		}
		this.timeToShoot = 5;
	}

}

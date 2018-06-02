import Element from "./element";
import { SHOTS } from "../shared/constants";

export default class Shot extends Element {

    constructor(id, directionX, directionY, image, x, y) {
        super(id, SHOTS[image], x - 11, y, 16, 50, 0);
        this.directionX = directionX;
        this.directionY = directionY;
    }

    display() {
        if (!this.isDestroyed) {
            this.x -= this.directionX;
            this.y -= this.directionY;
            super.display();
        }
    }

    hasCollision(anotherElement) {
        return false;
    }

}
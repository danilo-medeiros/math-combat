import Element from "./element";
import { SHOTS } from "../shared/constants";
import Elements from "./elements";

export default class Shot extends Element {

    constructor(directionX, directionY, image, x, y) {
        super(SHOTS[image], x - 11, y, 16, 50, 0);
        this.directionX = directionX;
        this.directionY = directionY;
    }

    display() {
        this.x -= this.directionX;
        this.y -= this.directionY;
        super.display();
    }

    explosion() {
        Elements.remove(this.id);
    }

    hasCollision(anotherElement) {
        return false;
    }

}
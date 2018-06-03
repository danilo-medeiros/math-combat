import Element from "./element";
import { SHOTS } from "../shared/constants";
import Elements from "./elements";

export default class Shot extends Element {

    constructor(directionX, directionY, image, x, y) {
        super(SHOTS[image].imgPath, x, y, SHOTS[image].imgSizeX, SHOTS[image].imgSizeY, 0);
        this.directionX = directionX;
        this.directionY = directionY;
    }

    display() {
        this.move(-1 * this.directionX, -1 * this.directionY);
    }

    destroy() {
        Elements.remove(this.id);
    }

    move(x, y) {
        let newPositionX = this.newPositionX(x);
        let newPositionY = this.newPositionY(y);
        if (newPositionX === this.x && newPositionY === this.y) {
            Elements.remove(this.id);
            return;
        }
        this.x = newPositionX;
        this.y = newPositionY;
        super.display();
    }

}
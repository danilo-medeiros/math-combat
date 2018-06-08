import Element from "./element";
import { SHOTS } from "../shared/constants";
import Elements from "./elements";

export default class Shot extends Element {

    constructor(directionX, directionY, image, x, y) {
        super(image, x, y, 7, 25, 10);
        this.directionX = directionX;
        this.directionY = directionY;
    }

    showImage(callback) {
        this.move(-1 * this.directionX, this.directionY);
        super.showImage(callback);
    }

    move(x, y) {
        let newPositionX = this.newPositionX(x);
        let newPositionY = this.newPositionY(y);
        this.x = newPositionX;
        this.y = newPositionY;
    }

    hasCollision(anotherElement) {
        if (super.hasCollision(anotherElement)) {
            this.canRemove = true;
            return true;
        }
        return false;
    }

}
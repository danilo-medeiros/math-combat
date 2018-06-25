import Element from "./element";
import { SHOTS } from "../shared/constants";

export default class Shot extends Element {

    constructor(directionX, directionY, image, x, y, canDestroyPlayer = false) {
        super(image, x, y, 7, 25, 10);
        this.directionX = directionX;
        this.directionY = directionY;
        this.canDestroyPlayer = canDestroyPlayer;
    }

    showImage(callback) {
        this.move(-1 * this.directionX, this.directionY);
        super.showImage(callback);
    }

    move(x, y) {
        if (this.y < window.innerHeight && this.y > 0) {
            this.y += this.directionY;
        } else {
            this.canRemove = true;
        }
    }

    hasCollision(anotherElement, isPlayer) {
        if (isPlayer && !this.canDestroyPlayer || !isPlayer && this.canDestroyPlayer)
            return false;
        if (super.hasCollision(anotherElement)) {
            this.canRemove = true;
            return true;
        }
        return false;
    }

}
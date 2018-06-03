import { EXPLOSIONS } from "../shared/constants";
import Elements from "./elements";

export default class Element {

    constructor(image, x, y, sizeX, sizeY, tolerance) {
        this.image = loadImage(image);
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.tolerance = tolerance;
        this.speed = 1;
        this.isDestroyed = false;
        this.status = true;
        this.explosionCounter = 0;
        this.id = 0;
    }

    display() {
        if (this.status) {
            image(this.image, this.x, this.y, this.sizeX, this.sizeY);
            if (this.isDestroyed)
                this.explosion();
        }
    }

    move(x, y) {
        let newPosX = this.x + x * this.speed;
        let newPosY = this.y + y * this.speed;
        if (newPosX < width - this.sizeX && newPosX > 0)
            this.x = newPosX;
        if (newPosY < height - this.sizeY && newPosY > 0)
            this.y = newPosY;
        this.display();
    }

    destroy() {
        this.isDestroyed = true;
    }

    explosion() {
        this.explosionCounter++;
        let actualImg = Math.floor(this.explosionCounter / 10) + 1;

        if (actualImg > 2) {
            Elements.remove(this.id);
            this.status = false;
            return;
        }

        this.image = loadImage(EXPLOSIONS["explosion" + actualImg.toString()]);
    }

    containsPoint(x, y) {
        let result = [x - this.x - this.tolerance, y - this.y - this.tolerance];
        return result[0] >= 0 && result[0] <= this.sizeX
            && result[1] >= 0 && result[1] <= this.sizeY;
    }

 
    hasCollision(anotherElement) {
        let interval1 = anotherElement.getDestroyableInterval();
        let interval2 = this.getDestroyableInterval();

        return this.hasIntersection(interval1[0], interval2[0])
            && this.hasIntersection(interval1[1], interval2[1]);
    }

    hasIntersection(interval1, interval2) {
        return interval1[0] < interval2[1] && interval1[1] > interval2[0];
    }

    getDestroyableInterval() {
        return [
            [this.x - this.sizeX / 2 + this.tolerance / 2, this.x + this.sizeX / 2 - this.tolerance / 2],
            [this.y - this.sizeY / 2 + this.tolerance / 2, this.y + this.sizeY / 2 - this.tolerance / 2]
        ]
    }


}
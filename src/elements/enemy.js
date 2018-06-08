import Plane from "./plane";

export default class Enemy extends Plane {

    constructor(image, x, defaultMovement) {
        super(image, x, 50);
        this.defaultMovement = this[defaultMovement];
        this.counterToMove = 0;
        this.startingX = this.x;
    }

    showImage(callback) {
        this.defaultMovement();
        super.showImage(callback);
    }

    zigzag() {
        this.counterToMove++;
        let absCounter = Math.abs(this.counterToMove);
        if (absCounter < 80) {
            this.x -= 10;
            this.y += 10;
        } else  if (absCounter < 160){
            this.x += 10;
            this.y += 10;
        } else {
            this.counterToMove = 0;
        }
    }

    senoid() {
        this.counterToMove++;
        this.x = this.startingX + Math.sin(this.counterToMove * Math.PI / 180) * 50;
        this.y += 1;
        if (this.counterToMove === 360)
            this.counterToMove = 0;
    }

}
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

    senoid() {
        this.counterToMove++;
        this.x = this.startingX + Math.sin(this.counterToMove * Math.PI / 180) * 50;
        this.y += 1;
        if (this.counterToMove === 360)
            this.counterToMove = 0;
    }

    constant() {
        this.y += 1;
    }

    

}
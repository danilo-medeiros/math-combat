import Plane from "./plane";

export default class Enemy extends Plane {

    constructor(image, x, defaultMovement, defaultSpeed = 1) {
        super(image, x, 50);
        this.defaultMovement = this[defaultMovement];
        this.counterToShot = 100 / defaultSpeed;
        this.counterToMove = 0;
        this.defaultSpeed = defaultSpeed;
        this.startingX = this.x;
    }

    showImage(callback) {
        this.defaultMovement();
        this.counterToShot--;
        super.showImage(callback);
    }

    senoid() {
        this.counterToMove++;
        this.x = this.startingX + Math.sin(this.counterToMove * Math.PI / 180) * 50;
        this.moveDown();
        if (this.counterToMove === 360)
            this.counterToMove = 0;
    }

    bigsenoid() {
        this.senoid();
        this.x = this.x * 0.4;
    }

    denominator() {
        this.counterToMove++;
        this.x = this.startingX + (10 / (this.counterToMove - 50)) * 50;
        this.moveDown();
    }

    constant() {
        this.moveDown();
    }

    rect() {
        this.moveDown();
        this.sideMove(1);
    }

    inverseRect() {
        this.moveDown();
        this.sideMove(-1);
    }

    logarithm() {
        this.counterToMove++;
        this.x = this.startingX + Math.log10(this.counterToMove) * 50;
        this.moveDown();
    }

    sideMove(x) {
        if (this.x < window.innerWidth || this.x > 0) {
            this.x = this.x + x * this.defaultSpeed;
        } else {
            this.canRemove = true;
        }
    }

    moveDown() {
        if (this.y < window.innerHeight) {
            this.y = this.y + this.defaultSpeed;
        } else {
            this.canRemove = true;
        }
    }

    

}
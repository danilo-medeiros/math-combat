import Plane from "./plane";

export default class Enemy extends Plane {

    constructor(type, x) {
        super("enemy" + type, x, 50);
        this.counterToMove = 0;
        this.startingX = this.x;
    }

    display() {
        //this.senoid();
        super.display();
    }

    zigzag() {
        this.counterToMove++;
        let absCounter = Math.abs(this.counterToMove);
        if (absCounter < 80) {
            this.x -= 1;
            this.y += 1;
        } else  if (absCounter < 160){
            this.x += 1;
            this.y += 1;
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
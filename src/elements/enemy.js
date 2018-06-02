import Plane from "./plane";

export default class Enemy extends Plane {

    constructor(id, type, x) {
        super(id, "enemy" + type, x - 50, 50, 100, 100);
        this.counterToMove = 0;
    }

    zigzag() {
        this.counterToMove++;
        let absCounter = Math.abs(this.explosionCounter);
        if (absCounter < 50) {
            this.x -= 1;
        } else  if (absCounter < 100){
            this.x += 1;
        } else {
            this.counterToMove = 0;
        }
    }

}
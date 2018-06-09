import Plane from "./plane";

export default class Player extends Plane {

    constructor(image) {
        super(image, (window.innerWidth / 2), (window.innerHeight * 0.8));
        this.speed = 2;
    }

    onKeyEvent(keyCode) {
        if (keyCode === 37)
            this.move(-1, 0);
        if (keyCode === 38)
            this.move(0, -1);
        if (keyCode === 39)
            this.move(1, 0);
        if (keyCode === 40)
            this.move(0, 1);
    }

}
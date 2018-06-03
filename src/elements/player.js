import Plane from "./plane";

export default class Player extends Plane {

    constructor(type) {
        super("plane" + type, (width / 2) - 50, (height * 0.8) - 50);
        this.speed = 2;
    }

    display() {
        if (this.status)
            super.display();
    }


}
import Plane from "./plane";

export default class Player extends Plane {

    constructor(id, type) {
        super(id, "plane" + type, (width / 2) - 50, (height * 0.8) - 50);
        this.speed = 2;
    }

}
import Plane from "./plane";

export default class Player extends Plane {

    constructor(image) {
        super(image, (window.innerWidth / 2), (window.innerHeight * 0.8));
        this.speed = 3;
    }

}
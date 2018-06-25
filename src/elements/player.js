import Plane from "./plane";

export default class Player extends Plane {

    constructor(image) {
        super(image, (window.innerWidth / 2), (window.innerHeight * 0.8));
        this.speed = 3;
        this.shakingCounter = 0;
        this.shake = false;
    }

    showImage(callback) {
        if (this.shake) {
            console.log("Shaking");
            this.shakingCounter++;
            this.x = this.shakingCounter % 2 === 0 ? this.x + 5 : this.x - 5;
            if (this.shakingCounter === 10) {
                this.shake = false;
                this.shakingCounter = false;
            }
        }
        super.showImage(callback);
    }

}
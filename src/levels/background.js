export default class Background {

    constructor(image, startingY = 0) {
        this.image = image;
        this.counter = 0;
        this.startingY = startingY;
        this.posY = this.startingY;
    }

    updatePosition() {
        this.counter++;
        if (this.counter === 2) {
            if (this.posY >= window.innerHeight) {
                this.posY = this.startingY;
            }
            this.posY++;
            this.counter = 0;
        }
            
    }

}
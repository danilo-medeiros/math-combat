import Player from "../elements/player";
import Element from "../elements/element";

export default class Level1 {

	constructor(p) {
		this.setup(p);
        this.draw(p);
        this.elements = [
            new Element(p, "assets/img/elements/plane_1.png", window.innerWidth / 2, window.innerHeight - 100, 100, 100, 40)
        ]
    }
    
    setup(p) {
        p.setup = () => {
            p.createCanvas(window.innerWidth, window.innerHeight);
            p.background("#FFF");
        }
    }

    draw(p) {
        p.draw = () => {
            this.elements.forEach(e => e.display());
		}
    }
}
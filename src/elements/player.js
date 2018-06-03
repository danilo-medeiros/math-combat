import Plane from "./plane";

export default class Player extends Plane {

    constructor(type) {
        super("plane" + type, (width / 2), (height * 0.9));
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
    /* 
      if (keyIsDown(LEFT_ARROW)) {
        Elements.list[0].move(-1, 0);
      }
      if (keyIsDown(RIGHT_ARROW)) {
        Elements.list[0].move(1, 0);
      }
      if (keyIsDown(UP_ARROW)) {
        Elements.list[0].move(0, -1);
      }
      if (keyIsDown(DOWN_ARROW)) {
        Elements.list[0].move(0, 1);
      }
      if (keyIsDown(32)) {
        Elements.list[0].shot();
      } */

}
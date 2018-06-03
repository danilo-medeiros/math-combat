import Elements from "../elements/elements";
import Player from "../elements/player";
import Enemy from "../elements/enemy";

const LEVEL_DESCRIPTION = {
    level1: {
        enemies: [
            {
                type: "1",
                posX: 100,
                defaultMovement: "random",
                when: [10, 12, 14, 16]
            }
        ]
    }
}

export default class Level {

    constructor(levelNumber, hardness) {
        this.background = loadImage(`assets/img/environment/level_${levelNumber}.png`);
        this.levelNumber = levelNumber;
        this.hardness = hardness;
        this.setup();
    }

    setup() {
        let elements = [new Player("1")];
        let enemiesDescription = LEVEL_DESCRIPTION["level" + this.levelNumber].enemies;
        enemiesDescription.forEach(enemyDescription => {
            elements.push(new Enemy(enemyDescription.type, enemiesDescription.posX));
        });
        elements.forEach(e => Elements.add(e));

    }

    update() {
        Elements.update();
    }

    keyEvent(keyCode) {
        Elements.list[0].onKeyEvent(keyCode);
    }

}
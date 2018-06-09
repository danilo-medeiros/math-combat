import Player from "../elements/player";
import Enemy from "../elements/enemy";
import Element from "../elements/element";
import Shot from "../elements/shot";
import Background from "./background";

const DEFAULT_SHOT_TIME = 20;
const DEFAULT_TIME_BETWEEN_OBJECTS = 7;
const DEFAULT_TIME_BETWEEN_FUNCTIONS = 10;

export default class Level1 {

	constructor(p, scoreSpan, lifeSpan) {

        this.backgroundImage = p.loadImage("assets/img/level03.png");

        this.background1 = new Background(this.backgroundImage);
        this.background2 = new Background(this.backgroundImage, -1*window.innerHeight);

        // Pontos do jogador;
        this.score = 0;
        this.scoreSpan = scoreSpan;
        this.scoreSpan.innerHTML = this.score;
        // Contador para atualizar o cenário do jogo;
        this.counter = 0;

        this.life = 100;
        this.lifeSpan = lifeSpan;
        this.lifeSpan.innerHTML = this.life + "%";

        // Delay para que o jogador possa atirar de novo;
        this.shotTiming = DEFAULT_SHOT_TIME;

        this.player = new Player(p.loadImage("assets/img/plane01.png"));
        this.elementsToInsert = [{
            element: this.player,
            when: 0
        }];
        
        this.insertElements(p);

        

        this.elements = [];

        this.explosions = [];

        for (let i = 1; i < 7; i++) {
            this.explosions.push(p.loadImage(`assets/img/explosion0${i}.png`));
        }

		p.setup = () => {
            p.createCanvas(window.innerWidth, window.innerHeight);
        }

        p.draw = () => {
            
            this.updateBackground(p);

            this.counter++;

            if (this.elementsToInsert.length > 0) {
                let indexOfElementToInsert = this.elementsToInsert.findIndex(el => el.when === Math.floor(this.counter / 10));
                if (indexOfElementToInsert > -1) {
                    this.elements.push(this.elementsToInsert[indexOfElementToInsert].element);
                    this.elementsToInsert.splice(indexOfElementToInsert, 1);
                }
            }
            
            this.keyEvents(p);

            this.elements.forEach((e, i) => {
                
                let indexOfCollision = this.elements.findIndex((el, j) => e.hasCollision(el) && i !== j);

                if (indexOfCollision > -1) {
                    if (indexOfCollision > 0 && i > 0)
                        this.updateScore(50);
                    e.isDestroyed = true;
                    this.elements[indexOfCollision].isDestroyed = true;
                }

                e.showImage((image, x, y, sizeX, sizeY) => {
                    if (e.isDestroyed && e.explosionCounter <= this.explosions.length && !e.canRemove) {
                        p.image(this.explosions[Math.floor(e.explosionCounter)], x, y, sizeX, sizeY);
                    } else if (this.explosions.length < e.explosionCounter || e.canRemove) {
                        this.elements.splice(i, 1)
                    } else {
                        p.image(image, x, y, sizeX, sizeY);    
                    }
                    
                });
            });
            
        }
        
    }

    keyEvents(p) {

        if (this.shotTiming < DEFAULT_SHOT_TIME)
            this.shotTiming--;
        if (this.shotTiming === 0)
            this.shotTiming = DEFAULT_SHOT_TIME;

        if (p.keyIsDown(p.LEFT_ARROW)) {
            this.player.move(-1, 0);
        }
        if (p.keyIsDown(p.RIGHT_ARROW)) {
            this.player.move(1, 0);
        }
        if (p.keyIsDown(p.UP_ARROW)) {
            this.player.move(0, -1);
        }
        if (p.keyIsDown(p.DOWN_ARROW)) {
            this.player.move(0, 1);
        }
        if (p.keyIsDown(32)) {
            if (this.shotTiming === DEFAULT_SHOT_TIME) {
                this.elements.push(new Shot(0, -5, p.loadImage("assets/img/shot01.png"), this.player.x + this.player.sizeX / 2, this.player.y - 10));
                this.shotTiming--;
            }
        }   
    }

    insertElements(p) {
        let randomX = this.getRandomX();
        for (let i = 1; i < 5; i++) {
            this.elementsToInsert.push({
                element: new Enemy(p.loadImage("assets/img/enemy01.png"), randomX, "constant"),
                when: i * DEFAULT_TIME_BETWEEN_OBJECTS + 10
            })
        }
        randomX = this.getRandomX();
        let nextTime = (DEFAULT_TIME_BETWEEN_OBJECTS * 4) + DEFAULT_TIME_BETWEEN_FUNCTIONS;
        for (let i = 0; i < 5; i++) {
            this.elementsToInsert.push({
                element: new Enemy(p.loadImage("assets/img/enemy02.png"), randomX, "senoid"),
                when: nextTime + (i * DEFAULT_TIME_BETWEEN_OBJECTS) + 10
            })
        }
    }

    getRandomX() {
        return window.innerWidth / 4 + (window.innerWidth / 2) * Math.random();
    }

    updateScore(score) {
        this.score += score;
        this.scoreSpan.innerHTML = this.score;
    }

    updateBackground(p) {
        p.background("#2172c7");
        this.background1.updatePosition();
        this.background2.updatePosition();
        p.image(this.background1.image, 0, this.background1.posY, window.innerWidth);
        p.image(this.background2.image, 0, this.background2.posY, window.innerWidth);
    }
    
}
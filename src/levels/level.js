import Player from "../elements/player";
import Enemy from "../elements/enemy";
import Shot from "../elements/shot";
import Background from "./background";
import { SCENARIO } from "./scenario";


const DEFAULT_SHOT_TIME = 20;
const DEFAULT_TIME_BETWEEN_OBJECTS = 7;
const DEFAULT_TIME_BETWEEN_FUNCTIONS = 10;

// Descreve os elementos que serão inseridos na tela

export default class Level {

    constructor(p, scoreSpan, lifeSpan, selectedPlaneNumber, selectedLevelNumber = "1") {

        this.elements = [];
        this.explosions = [];
        // Pontos do jogador;
        this.score = 0;
        this.scoreSpan = scoreSpan;
        this.scoreSpan.innerHTML = this.score;
        // Contador para atualizar o cenário do jogo;
        this.counter = 0;

        this.life = 100;
        this.lifeSpan = lifeSpan;
        this.lifeSpan.innerHTML = this.life + "%";

        this.backgroundImage;
        this.background1;
        this.background2;

        this.selectedLevelNumber = selectedLevelNumber;
        
        this.howManyToInsert = 0;
        SCENARIO[selectedLevelNumber].elements.forEach(e => {
            this.howManyToInsert += e.howMany;
        })

        // Delay para que o jogador possa atirar de novo;
        this.shotTiming = DEFAULT_SHOT_TIME;

        this.player;
        this.elementsToInsert = [];

        this.playerIsDetroyed = false;
        this.gameEnded = false;
        this.exitGame = false;

        this.initializeElements(p, selectedLevelNumber);

        p.setup = () => {

            this.backgroundImage = p.loadImage(SCENARIO[selectedLevelNumber].background);

            for (let i = 1; i < 7; i++) {
                this.explosions.push(p.loadImage(`assets/img/explosion0${i}.png`));
            }

            p.loadImage(`assets/img/plane0${selectedPlaneNumber}.png`, (image) => {
                this.player = new Player(image);
                this.elementsToInsert.push({
                    element: this.player,
                    when: 0
                });
            })

            this.background1 = new Background(this.backgroundImage);
            this.background2 = new Background(this.backgroundImage, -1 * window.innerHeight);
            p.createCanvas(window.innerWidth, window.innerHeight);
        }

        p.draw = () => {
            if (this.gameEnded) {
                alert("Fim de jogo! \nSua pontuação foi: " + this.score);
                p.noLoop();
                window.location.reload();
            }
            this.counter++;
            this.updateBackground(p);
            this.checkElementsToInsert();
            this.listenToKeyEvents(p);
            this.elements.forEach((e, i) => {
                this.checkCollision(e, i);
                
                if (e.counterToShot === 0) {
                    e.counterToShot = 50;
                    this.elements.push(new Shot(0, 10, p.loadImage("assets/img/shot02.png"), e.x + e.sizeX / 2, e.y + 100, true));
                }
                   
                e.showImage((image, x, y, sizeX, sizeY) => {
                    if (e.isDestroyed && e.explosionCounter <= this.explosions.length && !e.canRemove) {
                        let explosionImage = this.explosions[Math.floor(e.explosionCounter)];
                        p.image(explosionImage, x - (explosionImage.width - sizeX) / 2, y - (explosionImage.height - sizeY) / 2, explosionImage.width, explosionImage.height);
                    } else if (this.explosions.length < e.explosionCounter || e.canRemove) {
                        this.elements.splice(i, 1);
                        if (i === 0) {
                            this.gameEnded = true;
                        }
                    } else {
                        p.image(image, x, y, sizeX, sizeY);
                    }
                });
            });
            if (this.elements.length === 1 && this.howManyToInsert <= 0) {
                this.gameEnded = true;
            }
            
        }

    }

    

    listenToKeyEvents(p) {

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
                this.elements.push(new Shot(0, -10, p.loadImage("assets/img/shot01.png"), this.player.x + this.player.sizeX / 2, this.player.y - 10));
                this.shotTiming--;
            }
        }
    }

    checkCollision(e, i) {
        if (e.canDestroyPlayer === undefined && i !== 0) return;
        let indexOfCollision = this.elements.findIndex((el, j) => e.hasCollision(el, j === 0) && i !== j);
        if (indexOfCollision > -1) {
            if (indexOfCollision > 0 && i > 0 && !this.elements[indexOfCollision].isDestroyed)
                this.updateScore(50);
            else if (!this.elements[indexOfCollision].isDestroyed) {
                this.updateLife(10 * parseInt(this.selectedLevelNumber));
                this.elements[0].shake = true;
            }
            if ((i === 0 || indexOfCollision === 0) && this.life <= 0 || (i !== 0 && indexOfCollision !== 0)) {
                e.isDestroyed = true;
                this.elements[indexOfCollision].isDestroyed = true;
            }
        }
    }

    initializeElements(p, selectedLevelNumber) {
        SCENARIO[selectedLevelNumber].elements.forEach((e, i) => {
            p.loadImage(`assets/img/enemy${e.type}.png`, (image) => {
                for (let j = 0; j < e.howMany; j++) {
                    this.elementsToInsert.push({
                        element: new Enemy(image, e.positionX, e.movement, parseInt(this.selectedLevelNumber)),
                        when: j * DEFAULT_TIME_BETWEEN_OBJECTS + e.after + i * DEFAULT_TIME_BETWEEN_FUNCTIONS
                    })
                }
            });
        })
    }

    updateScore(score) {
        this.score += score;
        this.scoreSpan.innerHTML = this.score;
    }

    updateLife(life) {
        this.life -= life;
        this.lifeSpan.innerHTML = this.life + "%";
    }

    updateBackground(p) {
        p.background("#2172c7");
        this.background1.updatePosition();
        this.background2.updatePosition();
        if (this.background1.posY === window.innerHeight)
            this.background1.posY = -1 * window.innerHeight;
        if (this.background2.posY === window.innerHeight)
            this.background2.posY = -1 * window.innerHeight;
        p.image(this.background1.image, 0, this.background1.posY, window.innerWidth);
        p.image(this.background2.image, 0, this.background2.posY, window.innerWidth);
    }

    checkElementsToInsert() {
        if (this.elementsToInsert.length > 0) {
            let indexOfElementToInsert = this.elementsToInsert.findIndex(el => el.when === Math.floor(this.counter / 10));
            if (indexOfElementToInsert > -1) {
                this.elements.push(this.elementsToInsert[indexOfElementToInsert].element);
                this.elementsToInsert.splice(indexOfElementToInsert, 1);
                this.howManyToInsert--;
            }
        }
    }

}
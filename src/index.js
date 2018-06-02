var jogador, obstaculo;

function setup() {
	createCanvas(800, 600);
	
	jogador = new Elemento(ellipse, 100, 100);
	obstaculo = new Elemento(rect, 590, 100);
}

function draw() {
	background(255, 204, 0);
	jogador.display();
	obstaculo.display();

	if (keyIsDown(LEFT_ARROW)) {
		jogador.move(-1, 0);
	}
	if (keyIsDown(RIGHT_ARROW)) {
		jogador.move(1, 0);
	}
	if (keyIsDown(UP_ARROW)) {
		jogador.move(0, -1);
	}
	if (keyIsDown(DOWN_ARROW)) {
		jogador.move(0, 1);
	}
}

function Elemento(formato, x, y) {
	this.formato = formato;
	this.x = x;
	this.y = y;
	this.size = 50;
	this.speed = 1;

	this.move = function(x, y) {
		this.x += x;
		this.y += y;
		this.display();
	};

	this.display = function() {
		formato(this.x, this.y, this.size, this.size)
	};
	
}
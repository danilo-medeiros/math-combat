let _list = [];

export default class Elements {

    // Adiciona uma lista de elementos ao canvas 
    // O jogador SEMPRE deve ser o primeiro elemento
    static add(...elements) {
        elements.forEach(e => {
            e.id += _list.length - 1;
            _list.push(e);
        });
    }

    static remove(elementId) {
        let index = _list.findIndex(e => e.id === elementId);
        if (index > 0) 
        // Isso é proposital, pois não queremos remover o jogador, apenas reiniciar o jogo
            _list.splice(index, 1);
    }

    static get list() {
        return _list;
    }

    // Verifica se há colisão entre os elementos
    static checkCollisions() {
        _list.forEach((e, i) => {
            _list.forEach((el, j) => {
                if (i !== j && e.hasCollision(el)) {
                    el.destroy();
                    e.destroy();
                }
            })
        })
    }

    // Atualiza os elementos
    static update() {
        _list.forEach(e => {
            e.display();
        });
        this.checkCollisions();
    }

}
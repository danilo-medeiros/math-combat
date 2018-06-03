let _list = [];

export default class Elements {

  static add(...elements) {
    elements.forEach(e => {
      e.id += _list.length - 1;
      _list.push(e);
    })
  }

  static remove(elementId) {
    let index = _list.findIndex(e => e.id === elementId);
    _list.splice(index, 1);
  }

  static get list() {
    return _list;
  }

  /* 
      * 
      * Verifica se há colisão entre os elementos
      * 
  */
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

}
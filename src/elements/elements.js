let _list = [];

export default class Elements {
    
    static add(element) {
        _list.push(element);
    }

    static remove(elementId) {
        let index = _list.findIndex(e => e.id === elementId);
        if (index > -1) {
            _list.splice(index, 1);
        }
    }

    static get list() {
        return _list;
    }

}
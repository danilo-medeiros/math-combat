import Elements from "../elements/elements";

export default class Collision {

    constructor() {
        
    }

    /* 
        * 
        * Verifica se há colisão entre os elementos
        * 
    */
    check(elements) {
         
        elements.forEach((e, i) => {
            elements.forEach((el, j) => {
                if (i !== j && e.hasCollision(el)) {
                    el.destroy(j);
                    e.destroy(i);
                }
            })
        })
/* 
        if (elements[0].hasCollision(elements[1])) {
            elements[0].destroy();
            elements[1].destroy();
        }
 */
    }

}
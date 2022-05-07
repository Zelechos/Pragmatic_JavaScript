'use strict';

export const Component = (function(){

    /**
     *  Constructor del Componente
     */
    const Constructor = function(options){
        this.element = options.element;
        this.data = options.data;
        this.template = options.template;
    }

    //  ------------- Metodos -------------

    /**
     *  Render UI
     */
    Constructor.prototype.render = function(){
        const $element = document.querySelector(this.element);
        if(!$element)return;
        $element.innerHTML = this.template(this.data);
    }
    /**
     *  Actualizamos el Estado de forma Reactiva
     */
    Constructor.prototype.setState = function(object){
        for (const key in object) {
            if (this.data.hasOwnProperty(key)) {
                this.data[key] = object[key] ;
            }
        }
        this.render();
    }

    /**
     *  Obtenemos una copia Inmutable del Estado
     */
    Constructor.prototype.getState = function(){
        return JSON.parse(JSON.stringify(this.data));
    }

    return Constructor;
})();

export default Component;

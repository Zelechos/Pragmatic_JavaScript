'use strict'

export default class Filters{

    // --------------- Filters ==> Filtros de busqueda en la web ---------------
    constructor(data, searcher) {
        this.d = document;
        this.data = document.querySelectorAll(data);
        this.classNameSearcher = searcher;
    }

    search(){
        this.d.addEventListener('keyup', e=>{

            if(e.target.matches(this.classNameSearcher)){

                // Validacion para el escape del input
                if(e.key === "Escape") e.target.value = "";

                this.data.forEach(coincidences => 
                    (coincidences.textContent.toLowerCase().includes(e.target.value.toLowerCase()))
                    ? coincidences.classList.remove('filter')
                    : coincidences.classList.add('filter')
                );
            }
        });
    }

}
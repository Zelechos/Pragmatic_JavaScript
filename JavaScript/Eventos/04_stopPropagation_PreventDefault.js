'use strict'

// StopPropagation: sirve para evitar que el evento no se propage a hijo o padres y asi logramos que solo se ejecute una sola vez nuestra funcion manejadora

// PreventDefault : El método preventDefault() cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.


// -------------------------- StopPropagation --------------------------
const $divs = document.querySelectorAll(".eventos-flujo div");
console.log($divs);

function flujoEvents (e){
    console.log(`Hello greets you ${this.className} the click originated it ${e.target.className}`);

    // El Metodo para eliminar la propagacion es stopPropagation();
    // SIN IMPORTAR LA FASE SE (RECOMIENDA QUE LA FASE ESTE EN BURBUJA)
    e.stopPropagation();
}

$divs.forEach(div => {
    div.addEventListener("click", flujoEvents);
});

// -------------------------- PreventDefault --------------------------
const $link = document.querySelector(".tres a");
console.log($link);

$link.addEventListener("click",(e)=>{
    alert(`Hello i am Pragmatic Coder`);

    // El Metodo para cancelar el evento por defecto que tiene el elemento es preventDefault() [HASTA ME SALIO UNA RIMA!!!]
    e.preventDefault();
    e.stopPropagation();
})

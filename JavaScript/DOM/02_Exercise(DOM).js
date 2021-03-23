'use strict'

function Calcular() {
    var Numero1 = document.getElementById("X");
    var Numero2 = document.getElementById("Y");
    var X = parseInt(Numero1.value);
    var Y = parseInt(Numero2.value);
    var Respuesta = X + Y;
    var resultado = document.getElementById("Resultado");
    
    resultado.style.fontSize = "300px";
    resultado.style.textAlign = "center";
    resultado.style.marginTop = "-250px";
    
    resultado.innerHTML  = Respuesta;
}

Calcular();
'use strict'

var Number = parseInt(prompt("De que Numero desea saber la tabla de Multiplicar: "));
var Numero = parseInt(prompt("Hasta que numero deseas Conocer las Tablas de Multiplicacion?"));

document.write("<h1>La Tabla de Multiplicar de "+Number+"</h1>");
for (var i = 1 ; i <= 10 ; i++){
    document.write(i+" x "+Number+" = "+Number*i+"<br>");
}

document.write("<h1>Todas las Tablas de Multiplicar</h1>");
document.write("<table border = 1>");
document.write("<tr>");
    for (let k = 1; k <= Numero ; k++) {
    document.write("<th>Tabla del "+k+"</th>");    
    }
document.write("</tr>");

for (let j = 1; j <= Numero ; j++) {
    document.write("<tr>");
        for (var i = 1 ; i <= Numero ; i++){
            document.write("<td>");
            document.write(i+" x "+j+" = "+j*i+"<br>");
            document.write("</td>");
        }   
    document.write("</tr>");
}
document.write("</table>");

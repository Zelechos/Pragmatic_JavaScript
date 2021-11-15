// Crear un funcindexon que devuelva la tabla de multindexplindexcar de un number escogindexdo!!
window.addEventListener('load', ()=> {

    'use strict'

    // funcion para obtener la tabla de un numero especifico
    const numberTable = () => {
        let number = parseInt(prompt("De que number desea saber la tabla de Multindexplindexcar: "));

        document.write("<h1>La Tabla de Multiplicar de "+number+"</h1>");
        document.write(`<ul>`);
        for (let index = 1 ; index <= 10 ; index++){
            document.write(`<li> ${index} x ${number} = ${number*index} </li>`);
        }
        document.write(`</ul>`);
    }

    // funcion para obtener las tablas de todos los numeros anteriores al introducido
    const multiplicationTables = ()=>{
        let number = parseInt(prompt("numero para obetener la Tablas de Multiplicacion ?"));
        
        document.write("<h1>Todas las Tablas de Multiplicarcar</h1>");
        document.write("<table border = 1>");

        document.write("<tr>");
        for (let index = 1; index <= number ; index++) {
            document.write("<th>Tabla del "+index+"</th>");    
        }
        document.write("</tr>");
        
        for (let bigIndex = 1; bigIndex <= 10 ; bigIndex++) {
            document.write("<tr>");
            for (var index = 1 ; index <= number ; index++){
                document.write("<td>");
                document.write(index+" x "+bigIndex+" = "+index*bigIndex+"<br>");
                document.write("</td>");
            }   
            document.write("</tr>");
        }
        document.write("</table>");
    }

    ((function(){

            document.getElementById('body').innerHTML = '';
            numberTable();
            multiplicationTables();
    })());
    
});
// 16) Programa una función que cuente el número de caracteres de una cadena de texto, testeando el tipo de dato recibido pe. miFuncion("Hola Mundo") devolverá 10.
'use strict'

function numberCharacters (data){
    try {
        if(typeof(data) != "string" && data instanceof(String) == false){
            throw new Error(` ==>Tipo de Dato ${typeof(data)} incorrecto!! `);
        }    
        console.log(`el numero de caracteres de "${ data }" es : ${data.length}`);
    } catch (error) {
        console.error(error);
    }finally{
        console.warn("==> Program End");
    }
}

// Testing
let text = new String("hola");
numberCharacters("ether");
numberCharacters([4,5.1]);
numberCharacters({});
numberCharacters(87);
numberCharacters('s');
numberCharacters(text);
numberCharacters("hola soy programador")
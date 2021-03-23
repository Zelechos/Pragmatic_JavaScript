'use strict'
window.addEventListener('load',()=>{

    var text = '<p>Pragmatic Coders Group</p>';
    var array = ['>' , '|' , '>', '|' ,'>' , '|' ,'>' , '|' ] ;

    const palabra = text.split("");
    var actual = "";

    for(var letra in palabra){
        var antecesor = palabra[letra];
        actual += antecesor;

            if(letra % 2 == 0){
                array.push(actual+' ');
            }else{
                array.push(actual+'|');
            }

        var i=0;
        const last = array.length-1;
        if(palabra.length-1 == letra){
            while(i<15){
                if(i % 2 == 0){
                    array.push(array[last]+'|');
                }else{
                    array.push(array[last]+' ');
                }
                i++;
            }
        }
    }

    //Introduciendo los string a las etiquetas span y las etiquetas span al array list
    var list = [];
    array.forEach(element=>{
        var letra = document.createElement('span');
        var text = document.createTextNode(element);

        letra.appendChild(text);
        letra.style.display = "none";
        list.push(letra);
    });

    //Obtenemos la Etiqueta donde insertaremos el texto dinamico
    var etiquete = document.querySelector('#Text');
    
    list.forEach(element=>{
        etiquete.appendChild(element);
    });

    //Mostrarmos dinamicamente la palabra
    var x=0
    function Rotacion(){
        
        list[x].style.display = "none";
        x = (x+1)%list.length;
        list[x].style.display = "initial";

    }
    setInterval(Rotacion, 120);




});


/*
window.addEventListener('load',()=>{
var text = document.getElementById('Text');
    var word = text.getElementsByTagName('span');
    var i=0;


    function rotator(){
        word[i].style.display = "none";
        i = ( i + 1 ) % word.length;
        word[i].style.display = "initial";
    }

    setInterval(rotator , 120);
});
*/

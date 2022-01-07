'use strict'

function Menu(Numeros, Mostrar, Ordenados, Reversa ,Longitud, Encontrar){
    let numbers = Numeros();
    Mostrar(numbers);
    let Ordenado = Ordenados(numbers);
    Reversa(Ordenado);
    Longitud(numbers);
    Encontrar(numbers);
}

// Aqui se esta usando el Arrow Function Hell no recomendable
Menu(
    ()=>{
        var Numeros = [];
        for(var i = 0 ; i < 6;i++){
            Numeros.push(parseInt(prompt((i+1)+' Introduzca un Numero:',0)));
        }
        return Numeros;
    }
    
    ,(Numeros)=>{
        document.write("<h1>Los Numeros Son:</h1>");
        console.log(Numeros);
        Numeros.forEach(elemento => {
            document.write("["+elemento+"]->");
        });
    }
    
    ,(Numeros)=>{
        var Ordenados = Numeros.sort((a,b)=>a-b);
        document.write("<h1>Los Numeros Ordenados Son:</h1>");
        Ordenados.forEach(elemento => {
            document.write("["+elemento+"]->");
        });
        return Ordenados;
    }

    ,(Ordenado)=>{
        document.write("<h1>Los Numero En Reversa Son:</h1>");
        var revers = Ordenado.reverse();
        revers.forEach(elemento =>{
            document.write("["+elemento+"]->");
        });
    }

    ,(Numeros)=>{
        document.write("<h1>La Cantidad de Elementos del Arreglo son:</h1>");
        document.write(Numeros.length);
    }

    ,(Numeros)=>{
        var Num = parseInt(prompt("Digite Un Numero para Ver si Ya existe en el Arreglo"));
        
        document.write("<h1>Verificando Si el Numero que Intrdujo Pertenece al Arreglo:</h1>");

        var Encontrado = Numeros.find(Buscar =>Buscar==Num);
        var indice = Numeros.findIndex(index =>index == Num );
            if(Encontrado==Num){
                document.write("El Numero "+Num+" Existe en el Array y su indice es : "+indice);
            }else{
                document.write("El Numero "+Num+" no Existe en el Array y su indice es : "+indice);
            }
        
        } 
    );
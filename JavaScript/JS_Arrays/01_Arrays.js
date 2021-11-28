'use strict'

//Manera 1 de crear un Array
const movies = ['Dark', 'Rango','Ether'];

//Manera 2 de Crear un Array
const lenguages = new Array('HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node Js','React Js', 'Three Js', 'Git');

console.log(movies);
console.log(lenguages);

const renderStyles = () => {

    document.write(`
        <style>

            body{
                background-color : #0d1117;
                color: #1f6feb;
            }

            h1{
                border : 3px solid #8b949E;
                border-radius : 10px;
                padding : 10px;
            }
        
        </style>
    `);
}

renderStyles();

/*--------------------------- PROGRAMA DE SELECTOR DE LENGUAJE -------------------*/

const selectLenguage = () => {

    let index = parseInt(prompt(`what programmer lenguage do you want? : `,0));
    
    if (index >= lenguages.length){
        alert(`Element does not exist enter a number less than : ${lenguages.length}`);
    }else{
        alert(lenguages[index]);    
    }
}

selectLenguage();


/*--------------------------- BUCLE FOR GENERICO IMPORTANTISIMO-------------------*/

const renderLenguagesForGeneric = () => {
    
    document.write(`
    <h1 style="background:#A371F7;">Show with loop FOR GENERIC</h1>
    <ul>`);
    for(let technology = 0 ; technology < lenguages.length; technology++ ){
        document.write(`<li>${lenguages[technology]}</li>`);
    }
    document.write(`</ul>`);
}

renderLenguagesForGeneric()

/*--------------------------- BUCLE FOR EACH IMPORTANTISIMO-------------------*/

const renderLenguagesForEach = () => {
    document.write(`
        <h1 style="background:#26a641;">Show with loop FOR EACH</h1>
            <ul>
    `);
        lenguages.forEach(//Este forEach() trabaja con un Callback
            (element , index , array)=>{
                console.log(array);
                document.write(`<li>${index} - ${element} </li>`);
            }
        );
    document.write(`</ul>`);
} 

renderLenguagesForEach();

/*--------------------------- BUCLE FOR IN IMPORTANTISIMO-------------------*/

const renderLenguagesForIn = () => {

    document.write(`
    <h1 style='background:#58a6ff;'>Show with loop FOR IN</h1>
        <ul>
    `);
    //en teoria la variable que declaramos en Leguajes en esta caso Lenguaje
    //recorre desde 0 la longitud del array que le pongamos 
    for(let lenguage in lenguages){//Donde Lenguaje es el index
        document.write(`<li>${lenguage} - ${lenguages[lenguage]}</li>`);
    }
    document.write(`</ul>`);
}

renderLenguagesForIn();
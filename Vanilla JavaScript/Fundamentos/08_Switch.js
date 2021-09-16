'use strict'

const Messages = [
    "Eres un Code Caster <>"
    ,"Eres un Conqueror <>"
    ,"Eres una Eminencia <> "
    ,"Eres un Sabio <> "
    ,"Eres un Code Master <> "
    ,"No eres Parte del Club <>"
];

let Entry = 0
let History = []
let body = document.getElementById("content");

function Active(){
    let Age = Number(prompt("Entrada "+Entry+"\n Digite su Antiguedad en el Club : "));

    let Response = `
    <fieldset>
        <legend>Su Antiguedad es de ${Age}</legend>
        <p>Entrada : ${Entry}</p>
        <p> Rango : ${ChekerAge(Age)}</p>        

        <input type="button" value="Agregar Entradas" onclick="App();">

    </fieldset>
    `;

    switch(Age){
        case 18:
            History.push(Response)
        break;
        case 25:
            History.push(Response)
        break;
        case 40:
            History.push(Response)
        break;
        case 50:
            History.push(Response)
        break;
        case 75:
            History.push(Response)
        break;
        default:
            History.push(Response)
        break;
    }

    Entry += 1;
}


function ShowHistory(Historia){
    let Iterator = Historia.length - 1;
    while(Iterator < Historia.length){
        document.write(Historia[Iterator]);
        Iterator += 1;
    }
}

function ChekerAge(age){
    if(age == 18) return Messages[0]
        else if(age == 25) return Messages[1]
            else if(age == 40) return Messages[2]
                else if(age == 50) return Messages[3]
                    else if(age == 75) return Messages[4]
                        else return Messages[5]
}

function App(){
    Active();
    ShowHistory(History);
}

App();


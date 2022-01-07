'use strict'

//Ambos Son lo Mismo
let Saludo = Nombre => console.log("Hola ,"+Nombre);
Saludo("Argus Aphocraphex");

let Despedida = Nombre => console.log(`Adios ,${Nombre}`);
Despedida("Argus Aphocraphex");


// Para Saber La Fecha Actual Ambos Hacen lo Mismo
let FechaActual = () => new Date().toLocaleDateString();
console.log(FechaActual());

let Fecha = new Date().toLocaleDateString();
console.log(Fecha);

//Objeto con Funcion Flecha IMPORTANTE
let Usuario = (Nombre , Apellido , Edad) =>({nombre:Nombre, apellido:Apellido, edad:Edad});
console.log(Usuario("Alex","Tumiri Huanca", "23"));

//Parametro REST con Flecha
let Suma = (Numero1 ,Numero2, ...Numeros) => Numero1 + Numero2 + Numeros.reduce((num1 , num2)=> num1 + num2 );
console.log(Suma(1,2,3,4));

//Ejemplos con Tiempo

/* ESTE EJEMPLO NO FUNCIONA POR EL THIS y porque no se usa funciones flecha
function Cronometro(){

    this.Time = 0;

    setInterval(function(){
        //console.log(this.Time ,this);
        this.Time++;        
    },1000);
}

let c = new Cronometro();

setInterval(()=>console.log(c.Time),1000);
*/

//EJEMPLO QUE SI FUNCIONA
function Cronometro(){
    this.Time=0;
    setInterval(()=>{
  //      console.log('tiempo interno '+this.Time);
        this.Time++
    },1000);
}
let ObjetoTemporal = new Cronometro();
//setInterval(()=>console.log('tiempo externo '+ObjetoTemporal.Time),1000);


// con Objetos y problemas conlos THIS
let PatronesDiseño = {
    Nombre: 'Factory',
    getNombreFuncionFlecha: ()=>console.log('El Patron es : '+ this.Nombre),
    getNombreFuncionSimple: function(){
        console.log('El Patron es : '+ this.Nombre);
    }
}

PatronesDiseño.getNombreFuncionFlecha();

PatronesDiseño.getNombreFuncionSimple();

//NO HACER ESTO CON LOS OBJETOS QUE TIENE UNA FUNCION sale undefined
let NombreDePatron = PatronesDiseño.getNombreFuncionSimple();
console.log(NombreDePatron);


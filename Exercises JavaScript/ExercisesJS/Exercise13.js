// 13) Crear una clase Hacker con su respectivo metodo constructor, metodos getters y setters , metodo genericos , y metodos estaticos y crear un objeto de la clase Hacker
'use strict'

class Hacker{

    constructor(name , lastname, specialty, code){
        this.name = name;
        this.lastname = lastname;
        this.specialty = specialty;
        this.code = code;
    }

    //Methods getters & setters
    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }

    get getLastname(){
        return this.lastname;
    }

    set setLastname(lastname){
        this.lastname = lastname;
    }

    get getSpecialty(){
        return this.specialty;
    }

    set setSpecialty(specialty){
        this.specialty = specialty;
    }

    get getCode(){
        return this.code;
    }

    set setCode(code){
        this.code = code;
    }

    // Methods 
    data(){
        document.write(`Mi Nombre es ${this.name} ${this.lastname} <br>`);
    }

    programming(){
        document.write(`<code>${this.code}</code>`);
    }

    genius(){
        document.write(`
        <fieldset>
            <legend>${this.specialty}</legend>
            Soy el mejor y mas grande programador que existe!!
        </fieldset>
        `);
    }

    // Methods Statics
    static ether(){
        document.write(`
        <code>
        ${this.code}
        </code>
        `);
    }

}

let name = prompt("Su Nombre : ");
let lastname = prompt("Su Apellido : ");
let specialty = prompt("Su Especialidad : ");
let code = prompt("Su Codigo : ");


const Etherias = new Hacker(name, lastname, specialty, code);

Etherias.data();
Etherias.programming();
Etherias.genius();

console.log(Etherias.getName);
console.log(Etherias.getLastname);
console.log(Etherias.getCode);
console.log(Etherias.getSpecialty);
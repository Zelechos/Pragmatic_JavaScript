'use strict'

// CLASES 
class Programador {

    // Method Constructor
    constructor(name , specialty){
        this.name = name;
        this.specialty = specialty;
    }

    // Methods
    programar (){
        document.write(`Programando soluciones como ${this.specialty} <br>`);
    }

    data () {
        document.write(`Mi Nombre es ${this.name} <br>`);
    }
}

const postulante = new Programador("Alex",  "IA Ingener");
const postulante1 = new Programador("Luis",  "Backend Developer");
const postulante2 = new Programador("Gustav",  "Frontend Developer");

console.log(postulante);
console.log(postulante1);
console.log(postulante2);


postulante.programar();
postulante.data();

postulante1.programar();
postulante1.data();

postulante2.programar();
postulante2.data();

// Heredamos Una Class
class Nivel extends Programador{

    constructor(name, specialty, level){
        super(name, specialty);//Aqui con super() se manda a llamar al metod padre
        this.level = level;
        this.degree = "engineer";
    }

    // Sobrescribiendo Metodos
    data(){
        document.write(`Mi Nombre es ${this.name} <br>
                        Mi Soft level es ${this.level}<br>
        `);
    }

    // Escribiendo una nueva Rutina
    wagelevel(){

        switch(this.level){
            case "senior":
                document.write(`Tu Salario sera 5000$ <br>`);
            break;

            case "intermediate":
                document.write(`Tu Salario sera 3500$ <br>`);
            break;

            case "junior":
                document.write(`Tu Salario sera 2000$ <br>`);
            break;
            default:
                document.write(`No especifico un nivel existente para generar su Salario <br>`);
            break
        }

    }

    // ATENCION!!! creando el primero metodo estatico en js
    static level(){
        document.write(`Soy un softeware developer en mi campo con muchas ganas de aprender y seguir ampliando mis experiencias <br> `);
    }

    // Metodos getters & setters
    get getDegree(){
        return this.degree;
    }

    set setDegree(degree){
        this.degree = degree;
    }
}

const engineer = new Programador("Alex",  "IA Engineer");
const softwareDeveloper = new Nivel("Argus",  "IA Ingener", "intermediate");

document.write(`--------------HERENCIA---------------<br>`)
engineer.data();
engineer.programar();

console.log(softwareDeveloper);
softwareDeveloper.data();
softwareDeveloper.programar();
softwareDeveloper.wagelevel();


// instanciando el Metodo estatico
Nivel.level();

//Manera de instanciar metodos getters & setters
console.log(softwareDeveloper.getDegree);
softwareDeveloper.setDegree ="hacker";
console.log(softwareDeveloper.getDegree);


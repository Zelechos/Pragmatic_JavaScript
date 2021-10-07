'use strict'

document.write(`
    <h1>Exercise 11</h1>
    <h2>Crear una Clase que tenga como Herencia otras 3 Clases</h2>

    <p>Clase Padre: Programador </p>

    <ul>
        <li>
            <p>Clase Hijo: Frontend Developer </p>
        </li>

        <li>
            <p>Clase Hijo: Backend Developer </p>
        </li>

        <li>
            <p>Clase Hijo: Data Scientist </p>
        </li>

        <li>
            <p>Clase Hijo: Mobile Developer </p>
        </li>
    </ul>
`);

// Clase Programador
// Constructor
function Programador(Nombre, Apellidos, Edad, Titulo){
    // Atributos 
    this.Nombre = Nombre;
    this.Apellidos = Apellidos;
    this.Edad = Edad;
    this.Titulo = Titulo;
}

// Metodos
Programador.prototype.datos = function(){
    console.log(`-------------------------------\n
    Nombre :  ${this.Nombre}\n
    Apellidos :  ${this.Apellidos}\n
    Edad :  ${this.Edad}`);   
}

Programador.prototype.profesion = function(){
    console.log(`-------------------------------\n
    Profesion :  ${this.Titulo}`);   
}

//######################## Testeamos al FrontendDeveloper
const Jefe = new Programador("Argus" , "Aphocraphex" , 39, "DataAnalist");
Jefe.datos();
Jefe.profesion();

// Heredamos de la clase Padre Programador 

// ------------------------ FrontendDeveloper------------------------
function FrontendDeveloper(Nombre, Apellidos, Edad, Titulo, Especialidad, TiempoDeExperiencia, Tecnologias, ...Portafolio){

    this.super = Programador;
    this.super(Nombre, Apellidos, Edad, Titulo);
    this.Especialidad = Especialidad;
    this.TiempoDeExperiencia = TiempoDeExperiencia;
    this.Tecnologias = Tecnologias;
    this.Portafolio = Portafolio;

}

FrontendDeveloper.prototype = new Programador();
FrontendDeveloper.prototype.constructor = FrontendDeveloper;

FrontendDeveloper.prototype.datos = function(){
    console.log(`-------------------------------\n
    Nombre :  ${this.Nombre}\n
    Apellidos :  ${this.Apellidos}\n
    Edad :  ${this.Edad}\n
    Mi Especialidad es ${this.Especialidad} y mi tiempo trabajando es ${this.TiempoDeExperiencia} .\n
    `);   
}

FrontendDeveloper.prototype.stack = function(){
    console.log(`Las Tecnologias que Utilizo son:\n`);
    this.Tecnologias.forEach(function(tech){
        console.log(tech);
    });
}

FrontendDeveloper.prototype.portfolio = function(){
    console.log(`Mi Portafolio es :\n`);
    this.Portafolio.forEach(function(tech){
        console.log(tech);
    });
}

//######################## Testeamos al FrontendDeveloper

const Tecnologias = ["JavaScript", "Css" ,"Html" , "React Js", "Node Js" ,"Git/Github", "NPM", "Sass", "Web Pack", "Redux", "Jest"];

const Portafolios = ["https://github.com/Zelechos","hps://github.com/Zelechos","https://github.com/Zelos","https://ghub.com/Zelechos"];

const Alex = new FrontendDeveloper("Alex" ,
"Tumiri Huanca", 25, "Ing. En Ciencias de la Computacion",
"Desarrollo de Paginas Web", "24 meses" , Tecnologias ,...Portafolios);

Alex.datos();
Alex.stack();
Alex.portfolio();
Alex.profesion();

// ------------------------ BackendDeveloper------------------------
function BackendDeveloper(Nombre, Apellidos, Edad, Titulo, Especialidad, Etica, Tecnologias, HistorialWeb="desconocido"){

    this.super = Programador;
    this.super(Nombre, Apellidos, Edad, Titulo);
    this.Especialidad = Especialidad;
    this.Etica = Etica;
    this.Tecnologias = Tecnologias;
    this.HistorialWeb = HistorialWeb;

}

BackendDeveloper.prototype = new Programador();
BackendDeveloper.prototype.constructor = BackendDeveloper;

BackendDeveloper.prototype.datos = function(){
    console.log(`-------------------------------\n
    Nombre :  ${this.Nombre}\n
    Apellidos :  ${this.Apellidos}\n
    Edad :  ${this.Edad}\n
    Mi Especialidad es ${this.Especialidad} y mi postura etica sobre el software es ${this.Etica} Mi Historial web es ${this.HistorialWeb}.\n
    `);   
}

BackendDeveloper.prototype.stack = function(){
    console.log(`Las Tecnologias que Utilizo son:\n`);
    this.Tecnologias.forEach(function(tech){
        console.log(tech);
    });
}

//######################## Testeamos al BackendDeveloper

const TecnologiasBackend = ["TypeScript", "Java", "Node Js" ,"Git/Github", "NPM", "Serveless","GraphQL", "PostgressSQL", "SQL", "Jest", "Python"];

const Argus = new BackendDeveloper("Zelechos" ,
"Aphocraphex", 27, "Ing. Tecnologias de la Informacion",
"Hacking Etico", "255 meses" , TecnologiasBackend);

Argus.datos();
Argus.stack();
Argus.profesion();


// ------------------------ Data Scientist ------------------------
function DataScientist(Nombre, Apellidos, Edad, Titulo, Especialidad, Modelos, Tecnologias, Metricas){

    this.super = Programador;
    this.super(Nombre, Apellidos, Edad, Titulo);
    this.Especialidad = Especialidad;
    this.Modelos = Modelos;
    this.Tecnologias = Tecnologias;
    this.Metricas = Metricas;

}
DataScientist.prototype = new Programador();
DataScientist.prototype.constructor = DataScientist;

DataScientist.prototype.datos = function(){
    console.log(`-------------------------------\n
    Nombre :  ${this.Nombre}\n
    Apellidos :  ${this.Apellidos}\n
    Edad :  ${this.Edad}\n
    Mi Especialidad es ${this.Especialidad} Mi Mestricas son ${this.Metricas}.\n
    `);   
}

DataScientist.prototype.stack = function(){
    console.log(`Las Tecnologias que Utilizo son:\n`);
    this.Tecnologias.forEach(function(tech){
        console.log(tech);
    });
}

DataScientist.prototype.models = function(){
    console.log(`Mis Modelos son los siguientes:\n`);
    this.Modelos.forEach(function(model){
        console.log(model);
    });
}

//######################## Testeamos al BackendDeveloper

const TecnologiasDataScientist = ["Python", "Pytorch", "Rust" ,"Git/Github", "TensorFlow", "Numpy","Anaconda", "Matplotlib", "SQL", "Keras", "spaCy"];

const Models = ["GPT-1", "GPT-2","GPT-3","Github Copilot"];

const Adam = new DataScientist("Adam" ,
"Exmachine", 29, "DataScientist",
"DataScientist & Machine Learning", Models , TecnologiasDataScientist, "Las Mejores {Code}");

Adam.datos();
Adam.stack();
Adam.models();
Adam.profesion();



// ------------------------ MobileDeveloper------------------------
function MobileDeveloper(Nombre, Apellidos, Edad, Titulo, Especialidad, Apps, Tecnologias, Portafolio){

    this.super = Programador;
    this.super(Nombre, Apellidos, Edad, Titulo);
    this.Especialidad = Especialidad;
    this.Apps = Apps;
    this.Tecnologias = Tecnologias;
    this.Portafolio = Portafolio;

}

MobileDeveloper.prototype = new Programador();
MobileDeveloper.prototype.constructor = MobileDeveloper;

MobileDeveloper.prototype.datos = function(){
    console.log(`-------------------------------\n
    Nombre :  ${this.Nombre}\n
    Apellidos :  ${this.Apellidos}\n
    Edad :  ${this.Edad}\n
    Mi Especialidad es ${this.Especialidad} `);   
}

MobileDeveloper.prototype.stack = function(){
    console.log(`Las Tecnologias que Utilizo son:\n`);
    this.Tecnologias.forEach(function(tech){
        console.log(tech);
    });
}

MobileDeveloper.prototype.apps = function(){
    console.log(`Mis Apps desarrolladas son las siguientes:\n`);
    this.Apps.forEach(function(app){
        console.log(app);
    });
}

MobileDeveloper.prototype.portfolio = function(){
    console.log(`Mi Portafolio es:\n`);
    this.Portafolio.forEach(function(proyect){
        console.log(proyect);
    });
}


//######################## Testeamos al MobileDeveloper

const TecnologiasMobile = ["Java", "Kotlin", "Swift" ,"Git/Github", "FireBase", "Flutter","Dart", "SQL", "Android", "Ios"];

const Apps = ["Whatsapp", "twitter","Dualingo","Github"];

const Ether = new MobileDeveloper("Ether" ,
"MObile", 29, "Ing. en Software",
"MobileDeveloper", Apps , TecnologiasMobile, Apps);

Ether.datos();
Ether.stack();
Ether.apps();
Ether.portfolio();
Ether.profesion();




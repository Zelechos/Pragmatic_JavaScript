'use strict'

let Mensaje = `
    <ul>
        <li>
            <h4>Usa snake_case para Archivos:</h4>
            <h1>mi_archivo_Javascript.js</h1>
        </li>
        <li>
            <h4>Usa UPPER_CASE para Constantes:
            <h1>const UNA_CONSTANTE = 'soy una constante';</h1>
        </li>
        <li>
        <h4>Usa UpperCamelCase para las Clases:</h4>
        <h1>class PersonaMayor{<br>
                constructor(Edad, Nombre, Genero){<br>
                    this.Edad = Edad;<br>
                    this.Nombre = Nombre;<br>
                    this.Genero = Genero;<br>
                }<br>
            }
        </h1>
        </li>
        <li>
            <h4>Usa lowerCamelCase para Objetos y Primitivos, Funciones, Instancias:</h4>
            
            <h1> Objeto:<br>
            const unObjeto = {<br>
                nombre : 'Aphocraphex',<br>
                email : 'ArgusAphocraphex@hotmail.com'<br>
            }<br>
            Primitivos:<br>
                let unaCadena = "Hola soy una Cadena"<br>

            Funciones:<br>
            function holaMundo(){<br>
                console.log('Hola Como estas');<br>
            }<br>

            Instancias:<br>
            const ajax = XMLHttpRequest(),<br>
            Argus = new SerHumano('argus', 'Hombre')<br>
            </h1>
        </li>
    </ul>
`;

document.write(Mensaje);

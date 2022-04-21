// 46) crear una funcion de tipo Promesa que consuma un API que encripte un mensaje y luego lo muestre el mensaje junto con el mensaje encriptado en el archivo HTML de la web usando async await!!!
'use strict';

// Funcion para Crear la Promesa y validar el tipo de dato
const encryptedWord = (word) => {
    
    if(typeof(word) !== "string")
        return Promise.reject(`a string was expected not a => ${typeof word} : ${word}`)

    return new Promise( (resolve, reject) => {
        let time = 3000;
        
        // el contador de tiempo
        let counter = 2;
        let loadMessage = setInterval(()=>{
            document.write(`<h3 class ="notice">encrypting the word wait a ${counter--} seconds . . .</h3>`);
            if(counter === 0){
                clearInterval(loadMessage);
            }
        }, 1000);

        setTimeout(()=>{

            // Encriptamos el texto
            let encrypted = CryptoJS.SHA256(word);
            let encryptedWithBase64 = encrypted.toString(CryptoJS.enc.Base64);
            let encryptedWithHex = encrypted.toString(CryptoJS.enc.Hex)

            const cryptography = {
                word,
                encryptedWithBase64,
                encryptedWithHex
            }

            resolve(cryptography);

        }, time);

    });
}

// Funcion de Testing con async await ...
const encryptorTesting = async() => {
    
    try{

        // Instanciamos los Estilos CSS & el Titulo
        renderStyles();

        // test 1
        let textTest = "Ethernet";
        let response = await encryptedWord(textTest);
        
        // Renderizamos en la pagina la respuestas & en la consola
        renderPages(response);
        renderConsoles(response);
    
        // test 2
        let response1 = await  encryptedWord("soy un hacker!!");
        renderPages(response1);
        renderConsoles(response1);


        // test 3
        let response2 = await encryptedWord("Pragmatic Coder");
        renderPages(response2);
        renderConsoles(response2);

        // test 3 ERROR!!
        let response3 = await encryptedWord(true);
        renderPages(response3);
        renderConsoles(response3);

    }catch(error){
        // Renderizamos en la pagina el error
        renderError(error);
        console.error(error);
    }finally{
        console.warn(`successful encryption . . .`);
    }

}

// Rutina para mostrar los datos en la Pagina
const renderPages = (response) => {
    let renderPage = `
        <fieldset class="successful">
            <legend>Encrypting</legend>
            <h3>message : ${response.word}</h3>
            <h3>encrypted with Base64 : ${response.encryptedWithBase64}</h3>
            <h3>encrypted with Hexadecimal : ${response.encryptedWithHex}</h3>
        </fieldset>
    `;
    document.write(renderPage);
}

// Rutina para mostrar el error en la Pagina
const renderError = (error) => {
    document.write(`
    <fieldset class="failure">
        <legend>Error</legend>
        <h2>${error}</h2>
    </fieldset>
    `);
}

// Rutina para mostrar los datos en la en la consola
const renderConsoles = (response) => {
    let renderConsole = `
        message : ${response.word}\n
        encrypted with Base64 : ${response.encryptedWithBase64}\n
        encrypted with Hexadecimal : ${response.encryptedWithHex}\n
        `;
        console.log(renderConsole);
}

// Rutina para mostrar el titulo de la Pagina
const renderTitle = () =>{
    document.write(`<h1 class="title">Pragmatic Encryptor</h1>`);
}

// Rutina para renderizar los estilos CSS de la Pagina
const renderStyles = () => {
    window.addEventListener('load', () => {
        
        let styles = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300&family=Zen+Kaku+Gothic+Antique:wght@300&display=swap');

                body{
                    background-color : #010409;
                    color : #f0f6fc;
                    font-family: 'Outfit', sans-serif;
                    font-family: 'Zen Kaku Gothic Antique', sans-serif;
                    text-align : center;
                }

                fieldset{
                    border-radius: 10px;
                    width: 80%;
                    margin-left: auto;
                    margin-right: auto;
                }

                legend{
                    background-color : #010409;
                    border : 3px solid #f0f6fc;
                    border-radius : 10px;
                    font-size : 25px;
                    padding : 5px;
                    color : #f0f6fc
                }

                .successful{
                    color : #238636;
                    border : 3px solid #238636;
                }

                .failure{
                    color : #da3633;
                    border : 3px solid #da3633;
                }
                
                .notice{
                    border : 3px solid #a371f7;
                    border-radius : 10px;
                    padding : 10px;
                    color : #a371f7;
                    width : 25%;
                    margin-left: auto;
                    margin-right: auto;
                }

                .title{
                    border : 3px solid #f0f6fc;
                    border-radius : 10px;
                    font-size : 35px;
                    width: 30%;
                    margin-left: auto;
                    margin-right: auto;
                }

            </style>
        `;

        document.write(styles);
        
        // Aqui renderizamos nuestro titulo por la carga del archivo html
        renderTitle();
    });

}

//Instanciamos la funcion principal
encryptorTesting();
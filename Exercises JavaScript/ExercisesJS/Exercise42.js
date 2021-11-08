// 42) Desarrollar una funcion que devuelva la carga de un script en la consola
/* ejemplo: function(10)
    processing script in 10 seconds . . .
    loading: ¤¤¤¤¤¤¤¤¤¤
    processing script in 9 seconds . . .
    loading: ¤¤¤¤¤¤¤¤¤
    processing script in 8 seconds . . .
    loading: ¤¤¤¤¤¤¤¤
    processing script in 7 seconds . . .
    loading: ¤¤¤¤¤¤¤
    .etc
*/

window.addEventListener('load', ()=> {

    'use strict'
    const loadingScript = seconds => {
        let loadingBar = "";
        let interval = 400;

        let processing = setInterval(() => {

            loadingBar += "█";
            console.warn(`processing script in ${seconds} seconds \nloading: ${loadingBar}`);

            document.write(`<ul>`);
            document.write(`<li> processing script in ${seconds} seconds <br>loading: ${loadingBar} </li>`);
            document.write(`</ul>`);

            seconds--;

            if(seconds === 0){
                clearInterval(processing);
                document.write(`<p>loading complete 100% :  ${loadingBar} </p>`);

                console.log(`SCRIPTS READY !!!\n
                    const factorial = Numero => (Numero== 0 || Numero ==1)? 1 : Numero * factorial(Numero-1);
                    const Par_Impar = Number => (Number % 2 == 0)? console.log(Number,' es Par') : console.log(Number,' es Impar');
                    let numeroAleatorio = Math.round(Math.random() * 1000);//0 al 1000
                    console.log("Hello World");
                    window.addEventListener('load', ()=> {});
                `);
                document.write(`
                    <fieldset>
                        <legend>SCRIPTS READY !!!</legend>
                        <code>
                            const factorial = Numero => (Numero== 0 || Numero ==1)? 1 : Numero * factorial(Numero-1);<br>
                            const Par_Impar = Number => (Number % 2 == 0)? console.log(Number,' es Par') : console.log(Number,' es Impar');<br>
                            let numeroAleatorio = Math.round(Math.random() * 1000);//0 al 1000<br>
                            console.log("Hello World");<br>
                            window.addEventListener('load', ()=> {});<br>
                        </code>
                    </fieldset>
                `);
            }

        }, interval);

    }

    loadingScript(5);
});

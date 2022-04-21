// 7) Desarrolle una aplicacion en JS que muestra una lista de enlaces y redireccionar a un archivo .html con el nomber del lenguaje de programacion la web con puro JS

window.addEventListener('load',()=>{
    const programmingLanguages = [" Java "," Python "," JavaScript "," Go "," Php "," Scala "," C " ," C++ "," C# "," SQL "," R "," Julia ", " TypeScript", "Rust"];

    ((function (programmingLanguages){

        document.write(`
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@200&display=swap');
        body{
            background-color: #0d1117;
        }
        a{
            text-decoration:none;
            color: white;
        }
                    .list{
                        padding:0;
                        display : block;
                        list-style:none;
                        text-align : center;
                        width: 50%;
                        margin-left:auto;
                        margin-right:auto;
                        font-family: 'Noto Sans Mono', monospace;
                    }

                    .list:hover{
                        box-shadow: 0px 0px 100px 20px #161b22;
                    }
        </style>
        <ul class = list>`);

        programmingLanguages.forEach((values, index)=>{
            let routes = values.trim().concat(".html");
            if(index % 2 == 0){
                document.write(`
                <style>
                    .element-list-p{
                        font-size: 25px;
                        background-color: darkblue;
                        padding : 10px 30px;
                        border-radius: 7px;
                    }

                    .element-list-p:hover{
                        padding : 25px;
                        font-size: 40px;
                        background-color : #1f6feb;
                        box-shadow: 0px 0px 50px 20px #1f6feb;
                        transform: translate(0px,-15px);
                    }

                </style>
                <a href= ${routes} target="_blank">
                <li id = ${index} class="element-list-p">${values}</li>
                </a>
                `);
            }else{
                document.write(`
                <style>
                .element-list:hover{
                    padding : 25px;
                    font-size: 40px;
                    box-shadow: 0px 0px 50px 20px #2ea043;
                    background-color : #2ea043;
                    transform: translate(0px,-15px);
                }
                    .element-list{
                        border-radius: 7px;
                        padding : 10px 30px;
                        font-size: 25px;
                        background-color : darkgreen;
                    }
                </style>
                <a href= ${routes} target="_blank">
                <li id = ${index} class="element-list">${values}</li>
                </a>
                `);
            }
        });
        document.write(`</ul>`);

    })(programmingLanguages));
});

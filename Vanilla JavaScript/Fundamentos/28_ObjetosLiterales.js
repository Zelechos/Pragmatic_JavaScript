'use strict'

let Name = "Alex Tumiri Huanca" , NickName = "Argus Aphocraphex";

const Data = {
    Name : Name,
    NickName : NickName,
    Hack : ()=>{
        document.write(`<h1>Bienvenido <=[ ${ NickName } ]=> </h1>`);        
    },
    Gist : ()=>{
        document.write(`
        <script src="https://gist.github.com/Zelechos/6268be5b6d2b63641ab184b529b6f923.js"></script>
        `);
    }
}

Data.Hack();
Data.Gist();


// Objeto Literal
// Con esto evitamos la redundancia del nuestro objeto al nombrar sus atributos
const DataUser = {
    Name,
    NickName,
    Gist(){
        document.write(`
        <script src="https://gist.github.com/Zelechos/6268be5b6d2b63641ab184b529b6f923.js"></script>
        `);
    }
}
console.log(DataUser);
DataUser.Gist();
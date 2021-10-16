
// Crear un Programa que calcule la funciones trigonometricas basicas

let funTrigonometric = parseInt(prompt("Elija una funcion trigonometrica : \n 1. Sen() \n 2. Cos() \n 3. Tan() \n 4. Sec() \n 5. Cosec \n 6. Cotan"));

((function (option){
    let number = parseInt(prompt("Digite un Numero : "));
    do{
        switch(option){
            case 1:
                console.log(sinFunction(number));
            break;

            case 2:
                cosFunction();
            break;

            case 3:
                tanFunction();
            break;

            case 4:
                sinFunction();
            break;

            case 5:
                sinFunction();
            break;

            case 6:
                sinFunction();
            break;

            case 7:
                console.warn("Program End . . .");
            break;

            default:
                console.log("The Option not Exist!!!");
            break;
        }
    }while(option != 7);

})(funTrigonometric));



function sinFunction(number){
    return Math.sin(number);
}

function cosFunction(number){
    return Math.cos(number);
}

function tagFunction(number){
    return Math.tan(number);
}

function secFunction(number){
    return Math.s(number);
}





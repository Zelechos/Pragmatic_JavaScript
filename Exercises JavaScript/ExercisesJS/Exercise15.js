
// Crear un Programa que calcule la funciones trigonometricas basicas
function AppWebTrigonometric(){

    let funTrigonometric, number;
    do{
        funTrigonometric = inputOption();
        
        if(funTrigonometric != 7){
            number = parseInt(prompt("Enter a number : "));
        }

        switch(funTrigonometric){
            // esto no es necesario pero recuerda estamos aprendiendo
            case 1:
                ((function (number){
                    console.log(Math.sin(number));
                })(number));
            break;

            case 2:
                ((function (number){
                    console.log(Math.cos(number));
                })(number));
            break;

            case 3:
                ((function (number){
                    console.log(Math.tan(number));
                })(number));
            break;

            case 4:
                ((function (number){
                    console.log(1/Math.cos(number));
                })(number));
            break;

            case 5:
                ((function (number){
                    console.log(1/Math.sen(number));
                })(number));
            break;

            case 6:
                ((function (number){
                    console.log(1/Math.tan(number));
                })(number));
            break;

            case 7:
                !function(text){
                    console.warn(text);
                }("Program End . . .");
            break;

            default:
                !function(message){
                    console.log(message);
                }("The Option not Exist!!!");
            break;

        }
        
    }while(funTrigonometric != 7);

}

function inputOption(){
    let funTrigonometric = parseInt(prompt("Select a trigonometric function : \n 1. Sen() \n 2. Cos() \n 3. Tan() \n 4. Sec() \n 5. Csc() \n 6. Cot() \n 7.Leave"));
    return funTrigonometric;
}

AppWebTrigonometric();
// 43) desarrollar una funcion que dado que pida un numero si el numero es impar el programa finalize si el numero es par mostrar los numeros en pantalla ejemplo function(5) programa finalizo

let number = Number(prompt("enter a number : ",0));
const pairToContinue = number =>{
    
    if(number % 2 ===0){
        setInterval(() => {
            number = Number(prompt("enter a number : ",0));
            pairToContinue(number);
        }, interval);
    }else{

    }
    

}

const record = number =>{
    let recorderPairs
}



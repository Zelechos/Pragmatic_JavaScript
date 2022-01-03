'use strict'

const calculateSum = ()=> {
    const number1 = document.getElementById("X");
    const number2 = document.getElementById("Y");
    let x = parseInt(number1.value);
    let y = parseInt(number2.value);
    
    return x + y;
}

const renderResponse = ()=>{
    const labelResult = document.getElementById("Resultado");
    
    labelResult.style.fontSize = "300px";
    labelResult.style.textAlign = "center";
    labelResult.style.marginTop = "-250px";
    
    labelResult.innerHTML  = calculateSum();
}

renderResponse();
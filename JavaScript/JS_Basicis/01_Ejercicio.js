// 1) Crear una funcion que obtenga los divisores del numero introducido por teclado function(1) devuelve 1
((function(){
    let number = parseInt(prompt("enter a number : "));
    for(let divider = 1; divider <= number; divider++) {
        if (number % divider == 0) {
            console.log(`the divider of ${number} is : ${divider}`);
        }
    }
})());

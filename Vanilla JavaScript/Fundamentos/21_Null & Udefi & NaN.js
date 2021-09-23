
/*
No le asignamos un valor como no se le asigna un valor 
y si lo mostramos en consola pues nos da Undefined 
*/
console.log("DEFINICION (undefined) -> No le asignamos un valor como no se le asigna un valor y si lo mostramos en consola pues nos da Undefined ");
let Indefinida;
console.log("El Valor de la Variable Indefinida es : ",Indefinida);

/*
Le asignamos a nuestra variable Nulo el valor null
entonces la diferencia entre null y Undefined
es que Js le asigna el valor Undefined a nuestras variables 
no nosotros sin embargo el valor null si lo asignamos nosotros
*/
console.warn("__________________________");
console.log("DEFINICION (null) -> la diferencia entre null y Undefined es que Js le asigna el valor Undefined a nuestras variables no nosotros sin embargo el valor null si lo asignamos nosotros");
let Nulo = null;
console.log("El Valor de la Variable Nulo es : ",Nulo);

//NaN = Not a Number
console.warn("__________________________");
console.log("DEFINICION (Nan not a number) -> hace referencia a que la variable definida no es un Numero");
let noEsUnNumero = "Ether" * 9.67 ; 
console.log("El Valor de la Variable no es un Numero es : ",noEsUnNumero);


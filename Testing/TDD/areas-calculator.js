/*
Debemos crear una calculadora de areas que pueda calcular  el area de un cuadrado, rectangulo , triangulo

Casos: 
Calcular el area de un cuadrado de 5 x 5 debe dar como resultado 25
Calcular el area de un cuadrado de 2 x 2 debe dar como resultado 4
Calcular el area de un rectangulo de 2 x 4 debe dar como resultado 8
Calcular el area de un triangulo de altura 12 y base 20 debe dar como resultado 120
*/

class Area {

    calculatedAreaSquare(side){
        if(side < 1){
            return "Error el lado debe ser mayor a 0!!!";
        }
        return side * side;
    }

    calculatedAreaRectangle(side1 , side2){
        return side1 * side2;
    }

    calculatedAreaTriangle(height , base){
        return (height * base) / 2;
    }
}

module.exports = Area;
// 44) crear una funcion que contenga una funcion callback para que dado dos valores obtenga la distanacia entre 2 puntos
'use strict';

const distanceBetweenPoints = (point1, point2, callback) => {
    console.log(`the points are : \nthe first point is ${point1} \nthe second point is ${point2}`);
    callback(point1, point2);
}

let point1 = [10,6];
let point2 = [5,8];


distanceBetweenPoints(point1, point2, (point1, point2) => {//function de callback
    let x1 = point1[0] , x2 = point2[0];
    let y1 = point1[1] , y2 = point2[1];  

    let distance = Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2) );
    console.log(`the distance between Points is : ${distance}`);
});


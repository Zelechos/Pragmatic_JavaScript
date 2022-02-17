'use strict';

// Se Declaran la variables de coordenadas afuera de la clase por el reinicio de variables 
let coodinateX = 0;
let coodinateY = 0;

export default class Ball{
    
    // --------------- Ball ==> Mover un Bola ---------------

    constructor(stage, ball){
        this.d = document;
        this.stage = document.querySelector(stage);
        this.ball = document.querySelector(ball);
    }

    moveBall(event){

        // Creando la variables para definir los limites con el metodo getBoundingClientRect()
        const $limitsBall = this.ball.getBoundingClientRect();
        const $limitsStage = this.stage.getBoundingClientRect();

        switch(event.keyCode){
            case 37 : 
                // Left
                if($limitsBall.left > $limitsStage.left){
                    event.preventDefault();
                    coodinateX--;
                }
                break;
            case 38 : 
                // Top
                if($limitsBall.top > $limitsStage.top){
                    event.preventDefault();
                    coodinateY--;
                }
                break;
            case 39 : 
                // Right
                if($limitsBall.right < $limitsStage.right){
                    event.preventDefault();
                    coodinateX++;
                }
                break;
            case 40 : 
                // Down
                if($limitsBall.bottom < $limitsStage.bottom){
                    event.preventDefault();
                    coodinateY++;
                }
                break;
            default:
                console.warn("esperando direccion de movimiento para la bola");
                break;
        }
                
        this.ball.style.transform = `translate(${coodinateX * 10}px, ${coodinateY * 10}px)`

    }

}
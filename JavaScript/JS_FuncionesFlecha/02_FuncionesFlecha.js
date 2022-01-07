'use strict'

let Operacion = (Menu, Raiz, Factorial, Fibonacci, FuncionesTrigononmetricas, Binario)=>{
    switch(Menu()){
        case 0:
            Raiz();
        break;
        case 1:
            Factorial();
        break; 
        case 2:
            Fibonacci();
        break;  
        case 3:
            FuncionesTrigononmetricas();
        break;   
        case 4:
            Binario();
        break;
        case 5:
            document.write('ADIOS');
        break;       
        default:
            alert("La Opcion que Introdujo no Existe");
        break;
    }
}

Operacion(
    () =>{
        let Opcion = parseInt(prompt("-----------MENU------------\n"+
        "0. Raiz Cuadrada\n"+
        "1. Factorial\n"+
        "2. Fibonacci\n"+
        "3. Funcion Trigonometrica\n"+
        "4. Binario\n"+
        "5. Salir"));
        return Opcion;
    }

    ,()=>{
        let Numero = parseInt(prompt("Digite un Numero : "));
        document.write("La Raiz cuadrada de "+Numero+" es:"+ Math.sqrt(Numero));
    }

    ,()=>{
        let Numero = parseInt(prompt("Digite un Numero : "));
        function Factorial(Numero){
            if(Numero < 1){
                return 1;
            }
            return Factorial(Numero-1)* Numero;
        }
        document.write("El Factorial de "+Numero+" es : "+Factorial(Numero));
    }

    ,()=>{
        let Numero = parseInt(prompt("Digite un Numero : "));
        let Antecesor = 0 , Actual=0 , Fib = 1;

        while(Numero > 0 ){
            document.write("["+Fib+"] - "); 
            
            Actual = Fib;           
            Fib = Antecesor + Actual;    
            Antecesor = Actual;          

            Numero--;
        }
    }

    ,()=>{
        
        let FuncionTrigonometrica = (SubMenu, Numero)=>{
            let Numero = Numero();
            switch(SubMenu()){
                case 1:
                    document.write("El Sen("+Numero+") es:"+Math.sin(Numero));
                break;
                case 2:
                    document.write("El Cos("+Numero+") es:"+Math.cos(Numero));
                break; 
                case 3:
                    document.write("La Tan("+Numero+") es:"+Math.tan(Numero));
                break;            
                case 4:
                    document.write("El Sec("+Numero+") es:"+(1/(Math.cos(Numero))));
                break;            
                case 5:
                    document.write("La Csc("+Numero+") es:"+(1/(Math.sen(Numero))));
                break;            
                case 6:
                    document.write("La Cot("+Numero+") es:"+(1/(Math.tan(Numero))));
                break;            
                default:
                    alert("La Opcion que Introdujo no Existe");
                break;
            }
        }

        FuncionTrigonometrica(
        ()=>{
                    let Opcion = parseInt(prompt("---------MENU---------\n"+
                    "1 . Sen(x)\n"+
                    "2 . Cos(x)\n"+
                    "3 . Tan(x)\n"+
                    "4 . Sec(x)\n"+
                    "5 . Csc(x)\n"+
                    "6 . Cot(x)\n"+
                    "7 . Salir\n"+
                    "Elige una Opcion :"));
            return Opcion;
        }
        ,
        ()=>{
            let Numero = parseInt(prompt("Digite un Numero : "));
            return Numero;
        }
        );
    }

    ,()=>{
        let Numero = parseInt(prompt("Digite un Numero : "));
        let Longitud = (''+Numero).length;
        console.log(Longitud);
        
        let NumeroBinario = [];
        
        while(Numero > 0){
            console.log(Numero/2);
            //Numero=Numero/2;
            if (Numero % 2 == 0){
                NumeroBinario.push('0');
            }else{
                NumeroBinario.push('1');
            }

        }
        console.log(NumeroBinario);

        


    }
);





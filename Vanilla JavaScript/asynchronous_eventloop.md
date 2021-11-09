# Asynchronous & Event Loop 
<img align="center" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="javascript" width="1000"/>

<img align="center" src="https://1.bp.blogspot.com/-E3ksTbDBmj4/WXzBb5G1wJI/AAAAAAAAB5I/Cl5if7O9xLQ8SZuYnfmvZtytecWGTP63QCLcBGAs/s1600/EventLoop.png" alt="javascript" width="1000"/>

<img align="center" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="javascript" width="1000"/>

## Debes Aprender estos conceptos para entender el modelo de JavaScript
<img align="center" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="javascript" width="1000"/>
    
   - Procesamiento Single thread y Multi thread
   - Operaciones de CPU y Operaciones de I/O
   - Operaciones concurrentes y paralelas
   - Operaciones Bloqueantes y No Bloqueantes
   - Opeaciones Sincronas y Asincronas.
 

### JavaScript usa un modelo asincrono y no bloqueante con un loop de eventos implementado en un solo hilo(single thread) para operaciones de entrada y salida(Input/Ouput).    
<img align="center" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="javascript" width="1000"/>

### A continuacion veremos un ejemplo de codigo Asicrono y sincrono utilizando Funciones Anonimas Autoejecutables
```javascript
    //-------- Codigo Sincrono Bloqueante ----------
    
    ((()=>{
        console.log(`Synchronous Code!!!`);

        console.warn(`___Beginning___`);

        function two(){
            console.log(`two`);
        }

        function one(){
            console.log(`one`);
            two();
            console.log(`three`);
        }

        one();

        console.warn(`___End___`);

    })()); 
```

<img align="center" src="https://user-images.githubusercontent.com/73097560/115834477-dbab4500-a447-11eb-908a-139a6edaec5c.gif" alt="javascript" width="1000"/>

```javascript
    // Codigo Asincrono No Bloqueante
    ((()=>{
        console.log(`Asynchronous Code!!!`);

        console.warn(`___Beginning___`);
        function two(){
            let timeout = 1000;
            setTimeout(()=>{
                console.log(`Two`);
            },timeout);
        }

        function one(){
            let timeout = 0;
            setTimeout(()=>{
                console.log(`One`);
            },timeout);
            two();
            console.log(`Three`);
        }

        one();
        console.warn(`___End___`);

    })()); 
```

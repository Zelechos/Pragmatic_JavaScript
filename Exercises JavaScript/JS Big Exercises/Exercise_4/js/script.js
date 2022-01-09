'use strict';

window.addEventListener('load',()=>{
    
    copyStyle();
    generatorDataset();
    
});


const generatorDataset = ()=>{
    const styleArea = document.querySelector('#code');

    // Aqui le pasamos la etiqueta queramos
    styleArea.innerHTML= cardStyle(15);
}

// Subrutina para generar los colores CSS
const generatorColors = () =>{
    const digitColors = "01234565789ABCDEF";
    let color = "#";
    for (let index = 0; index < 6; index++) {
        color += digitColors.charAt(Math.floor(Math.random() * (15-0)+0));
    }
    console.log(color);
    return color
}

//Subrutina para Copiar el estilo CSS
const copyStyle = () => {
    const button = document.querySelector('#btnCopy');
    const alert = document.querySelector("#aviso");
    const input = document.querySelector('#code');
    
    button.addEventListener('click',()=>{
        input.focus();
        document.execCommand('selectAll');
        document.execCommand('copy');
        alert.innerHTML = "Codigo Copiado";
        setTimeout(()=> alert.innerHTML = "" , 4000);
    });
}

// --------------------------------------------------------------------------
//                          ETIQUETAS   
// --------------------------------------------------------------------------

// etiqueta body
const body = labels =>{
    let bodyLabel = ``;
    for (let index = 0; index < labels; index++) {
        let randomFont = Math.floor(Math.random() * (300-250)+250)
        let randomFontSize = Math.floor(Math.random() * (25-15)+15)
        bodyLabel += `
        { 
        "style" : "body { font-family: 'IBM Plex Sans', sans-serif ; font-weight:${randomFont} ; background-color:${generatorColors()} ; font-size:${randomFontSize}px ; }",
        "selector" : "body"
      } ,`;
    }

    return bodyLabel;
}


// etiqueta body
const btnShadow = labels =>{
    let btnShadowLabel = ``;
    for (let index = 0; index < labels; index++) {
        let randomFont = Math.floor(Math.random() * (300-250)+250)
        let randomFontSize = Math.floor(Math.random() * (25-15)+15)
        btnShadowLabel += `

        { 
        "style" : ".btn { display:inline-block ; text-align:center ; vertical-align:middle ; padding:16px 24px ; border:1px solid ${generatorColors()} ; border-radius:8px ; background:${generatorColors()} ; background:-webkit-gradient(linear,left top,left bottom,from(${generatorColors()}),to(${generatorColors()})) ; background:-moz-linear-gradient(top,${generatorColors()},${generatorColors()}) ; background:linear-gradient(to bottom,${generatorColors()},${generatorColors()}) ; -webkit-box-shadow:${generatorColors()} 0 0 0 0 ; -moz-box-shadow:${generatorColors()} 0 0 0 0 ; box-shadow:${generatorColors()} 0 0 0 0 ; text-shadow:${generatorColors()} 1px 1px 1px ; font:normal normal bold 22px verdana ; color:#fff ; text-decoration:none } ",
        "selector" : ".btn"
      } ,`;
    }

    return btnShadowLabel;
}


// etiqueta div checkboard style
const checkerboard = labels =>{
    let checkerboardLabel = ``;
    for (let index = 0; index < labels; index++) {
        let randomFont = Math.floor(Math.random() * (300-200)+200)
        let randomFontSize = Math.floor(Math.random() * (60-50)+50)
        checkerboardLabel += `
        { 
        "style" : ".checkerboard { width:${randomFont}px ; height:${randomFont}px ; background-color:${generatorColors()} ; background-image:linear-gradient(45deg,${generatorColors()} 25%,transparent 25%,transparent 75%,${generatorColors()} 75%,${generatorColors()}),linear-gradient(-45deg,${generatorColors()} 25%,transparent 25%,transparent 75%,${generatorColors()} 75%,${generatorColors()}) ; background-size:${randomFontSize}px ${randomFontSize}px ; background-repeat:repeat ; } ",
        "selector" : ".checkerboard"
      } ,`;
    }

    return checkerboardLabel;
}


//=========================== Para generar estilos de una barra de navegacion===========================
// etiqueta header
const header = labels =>{
    let headerLabel = ``;
    for (let index = 0; index < labels; index++) {
        let heightHeader = Math.floor(Math.random() * (100-80)+80)
        headerLabel += `
        { 
        "style" : "header { background-color:${generatorColors()} ; position:fixed ; top:0 ; left:0 ; right:0 ; height:${heightHeader}px ; display:flex ; align-items:center ; box-shadow: 0 0 25px 0 black ; } ",
        "selector" : "header"
      } ,`;
    }

    return headerLabel;
}


// etiqueta header *
const headerGlobal = labels =>{
    let headerLabel = ``;
    for (let index = 0; index < labels; index++) {
        let heightHeader = Math.floor(Math.random() * (100-80)+80)
        headerLabel += `
        { 
        "style" : "header * { display:inline ; } ",
        "selector" : "header *"
      } ,`;
    }
}

// etiqueta header li
const headerList = labels =>{
    let headerLabel = ``;
    for (let index = 0; index < labels; index++) {
        let heightHeader = Math.floor(Math.random() * (25-20)+20)
        headerLabel += `
        { 
        "style" : "header li { margin:${heightHeader}px ; }",
        "selector" : "header li"
      } ,`;
    }

    return headerLabel;
}

// etiqueta header li a
const headerListLinks = labels =>{
    let headerLabel = ``;
    for (let index = 0; index < labels; index++) {
        let heightHeader = Math.floor(Math.random() * (25-20)+20)
        headerLabel += `
        { 
        "style" : "header li a { color:${generatorColors()} ; text-decoration:none ; }",
        "selector" : "header li a"
      } ,`;
    }

    return headerLabel;
}

//============================Se terminaron los estilos necesario para la barra de navegacion ===========================


// etiqueta div para crear una tarjeta
const cardStyle = labels =>{
    let cardLabel = ``;
    for (let index = 0; index < labels; index++) {
        let randomFont = Math.floor(Math.random() * (300-200)+200)
        let randomFontSize = Math.floor(Math.random() * (60-50)+50)
        cardLabel += `
        { 
        "style" : ".card { position:relative ; float:left ; margin-right:10px ; width:150px ; height:220px ; border-radius:10px ; background:${generatorColors()} ; -webkit-box-shadow:3px3px7pxrgba(0,0,0,.3) ; box-shadow:3px3px7pxrgba(0,0,0,.3) ; }",
        "selector" : ".card"
      } ,`;
    }

    return cardLabel;
}
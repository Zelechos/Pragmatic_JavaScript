'use strict';

window.addEventListener('load',()=>{
    
    copyStyle();
    generatorDataset();
    
});

// AQUI ES DONE PONEMOS LAS SUBRUTINAS DE ESTILOS
const generatorDataset = ()=>{
    const styleArea = document.querySelector('#code');

    // Aqui le pasamos la etiqueta queramos
    styleArea.innerHTML= centerDiv(40);
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
        input.classList.toggle('animation');
        input.focus();
        document.execCommand('selectAll');
        document.execCommand('copy');
        alert.innerHTML = "Codigo Copiado";
        setTimeout(()=> alert.innerHTML = "" , 4000);
    });
    input.classList.toggle('animation');

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

// etiqueta header completa
const headerComplete = labels =>{
    let headerLabel = ``;
    for (let index = 0; index < labels; index++) {
        let heightHeader = Math.floor(Math.random() * (100-80)+80)
        headerLabel += `
        { 
        "style" : "header { background-color:${generatorColors()} ; position:fixed ; top:0 ; left:0 ; right:0 ; height:${heightHeader}px ; display:flex ; align-items:center ; box-shadow: 0 0 25px 0 black ; } header * { display:inline ; } header li { margin:${heightHeader}px ; } header li a { color:${generatorColors()} ; text-decoration:none ; }",
        "selector" : "header"
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

//============================Boton Hamburguesa ========================
/* 
    Etiquetas de Boton Hamburguesa
    <div class="hamburger-menu">
        <div class="bar top"></div>
        <div class="bar middle"></div>
        <div class="bar bottom"></div>
    </div> 
*/
const hamburgerButton = labels =>{
    let buttonLabel = ``;
    for (let index = 0; index < labels; index++) {
        let randomFont = Math.floor(Math.random() * (300-200)+200)
        let randomSize = Math.floor(Math.random() * (5-1)+1)
        buttonLabel += `
        { 
        "style" : ".hamburger-menu { display:flex ; flex-flow:column wrap ; justify-content:space-between ; height:2.5rem ; width:2.5rem ; cursor:pointer } .hamburger-menu .bar { height:5px ; background:${generatorColors()} ; border-radius:5px ; margin:3px 0 ; transform-origin:left ; transition:all 0.5s } .hamburger-menu:hover .top { transform:rotate(45deg) } .hamburger-menu:hover .middle { opacity:0 } .hamburger-menu:hover .bottom { transform:rotate(-45deg) }",
        "selector" : ".hamburger-menu"
      } ,`;
    }

    return buttonLabel;
}


const hamburgerBtn = labels =>{
    let buttonLabel = ``;
    for (let index = 0; index < labels; index++) {
        let randomFont = Math.floor(Math.random() * (300-200)+200)
        let randomSize = Math.floor(Math.random() * (5-1)+1)
        buttonLabel += `
        { 
        "style" : ".btn-menu { display:flex ; flex-flow:column wrap ; justify-content:space-between ; height:2.5rem ; width:2.5rem ; cursor:pointer } .btn-menu .bar { height:5px ; background:${generatorColors()} ; border-radius:5px ; margin:3px 0 ; transform-origin:left ; transition:all 0.5s } .btn-menu:hover .top { transform:rotate(45deg) } .btn-menu:hover .middle { opacity:0 } .btn-menu:hover .bottom { transform:rotate(-45deg) }",
        "selector" : ".btn-menu"
      } ,`;
    }

    return buttonLabel;
}

const btnHamburger = labels =>{
    let buttonLabel = ``;
    for (let index = 0; index < labels; index++) {
        let randomFont = Math.floor(Math.random() * (300-200)+200)
        let randomSize = Math.floor(Math.random() * (5-1)+1)
        buttonLabel += `
        { 
        "style" : ".btn-hamburger { display:flex ; flex-flow:column wrap ; justify-content:space-between ; height:2.5rem ; width:2.5rem ; cursor:pointer } .btn-hamburger .bar { height:5px ; background:${generatorColors()} ; border-radius:5px ; margin:3px 0 ; transform-origin:left ; transition:all 0.5s } .btn-hamburger:hover .top { transform:rotate(45deg) } .btn-hamburger:hover .middle { opacity:0 } .btn-hamburger:hover .bottom { transform:rotate(-45deg) }",
        "selector" : ".btn-hamburger"
      } ,`;
    }

    return buttonLabel;
}


//============================Boton Switch ========================

/*
    Switch Button
<input type="checkbox" id="toggle" class="offscreen" />
<label for="toggle" class="switch"></label> 
*/
const btnSwitch = labels =>{
    let buttonLabel = ``;
    for (let index = 0; index < labels; index++) {
        let randomWidth = Math.floor(Math.random() * (50-40)+40)
        let randomHeight = Math.floor(Math.random() * (25-20)+20)
        buttonLabel += `
        { 
        "style" : ".switch { position:relative ; display:inline-block ; width:${randomWidth}px ; height:${randomHeight}px ; background-color:${generatorColors()} ; border-radius:20px ; transition:all 0.3s } .switch:after { content:'' ; position:absolute ; width:${randomHeight-2}px ; height:${randomHeight-2}px ; border-radius:20px ; background-color:${generatorColors()} ; top:1px ; left:1px ; transition:all 0.3s } input[type='checkbox']:checked+.switch:after { transform:translateX(${randomWidth/2}px) } input[type='checkbox']:checked+.switch{ background-color:${generatorColors()} } .offscreen { position:absolute ; left:-9999px }",
        "selector" : ".switch"
      } ,`;
    }

    return buttonLabel;
}

//============================isometrica Tarjeta ========================

/* 
    Isometric Card
    <div class="isometric-card"></div>
*/

const isometricCard = labels =>{
    let isometric = ``;
    for (let index = 0; index < labels; index++) {
        let randomWidth = Math.floor(Math.random() * (300-240)+240)
        let randomHeight = Math.floor(Math.random() * (425-320)+320)
        isometric += `
        { 
        "style" : ".isometric-card { margin:auto ; transform:rotateX(51deg) rotateZ(43deg) ; transform-style:preserve-3d ; background-color:${generatorColors()} ; will-change:transform ; width:${randomWidth}px ; height:${randomHeight}px ; border-radius:2rem ; box-shadow:1px 1px 0 1px ${generatorColors()},-1px 0 28px 0 ${generatorColors()},28px 28px 28px 0 rgba(34,33,81,.25) ; transition:0.4s ease-in-out transform,0.3s ease-in-out box-shadow } .isometric-card:hover { transform:translate3d(0,-16px,0) rotateX(51deg) rotateZ(43deg) ; box-shadow:1px 1px 0 1px ${generatorColors()},-1px 0 28px 0 ${generatorColors()},54px 54px 28px -10px rgba(34,33,81,.15) } ",
        "selector" : ".isometric-card"
      } ,`;
    }

    return isometric;
}

//============================Tarjeta giratoria========================

/*
    Tarjeta giratoria
    <div class="rotating-card">
        <div class="rotating-card-side front">
            <div>Front Side</div>
        </div>
        <div class="rotating-card-side back">
            <div>Back Side</div>
        </div>
    </div>
*/

const rotatingCard = labels =>{
    let rotating = ``;
    for (let index = 0; index < labels; index++) {
        let randomWidth = Math.floor(Math.random() * (500-350)+350)
        let randomHeight = Math.floor(Math.random() * (50-30)+30)
        rotating += `
        { 
        "style" : ".rotating-card { perspective:150rem ; position:relative ; height:${randomHeight}rem ; max-width:${randomWidth}px ; margin:2rem ; box-shadow:none ; background:none } .rotating-card-side { height:35rem ; border-radius:15px ; transition:all 0.8s ease ; backface-visibility:hidden ; position:absolute ; top:0 ; left:0 ; width:80% ; padding:2rem ; color:#fff } .rotating-card-side.back { transform:rotateY(-180deg) ; background-color:${generatorColors()} ; background-image:linear-gradient(43deg,${generatorColors()} 0%,${generatorColors()} 46%,${generatorColors()} 100%) } .rotating-card-side.front { background-color:${generatorColors()} ; background-image:linear-gradient(160deg,${generatorColors()} 0%,${generatorColors()} 100%) } .rotating-card:hover .rotating-card-side.front { transform:rotateY(180deg) } .rotating-card:hover .rotating-card-side.back { transform:rotateY(0deg) } ",
        "selector" : ".rotating-card"
      } ,`;
    }

    return rotating;
}


//============================Dos Grillas========================
/*
dos grillas
<div class="grid-aside">
    <main>
        This element is 1fr large.
    </main>
    <aside>
        Min: 150px / Max: 20%
    </aside>
</div>
*/

const twoGrid = labels =>{
    let twogrid = ``;
    for (let index = 0; index < labels; index++) {
        let randomWidth = Math.floor(Math.random() * (500-150)+150)
        let randomHeight = Math.floor(Math.random() * (150-100)+100)
        let porcentual = Math.floor(Math.random() * (70-20)+20)

        twogrid += `
        { 
        "style" : ".grid-aside { display:grid ; grid-template-columns:1fr minmax(${randomWidth}px,${porcentual}%) ; height:${randomHeight}px } main,aside { padding:12px ; text-align:center } main { background:${generatorColors()} ; } aside { background:${generatorColors()} ; } ",
        "selector" : ".grid-aside"
      } ,`;
    }

    return twogrid;
}


// <button class="button-transparent">Submit</button>
const btnTransparent = labels =>{
    let btn = ``;
    for (let index = 0; index < labels; index++) {
        let padding = Math.floor(Math.random() * (20-16)+16)
        let randomHeight = Math.floor(Math.random() * (150-100)+100)
        let border = Math.floor(Math.random() * (6-4)+4)
        
        btn += `
        { 
        "style" : ".button-transparent { color:${generatorColors()} ; border:1px solid ${generatorColors()} ; background-color:transparent ; border-radius:${border}px ; padding:0 ${padding}px ; cursor:pointer ; transition:all 0.3s ease-in-out ; } .button-transparent:hover { transform:scale(.8) } ",
        "selector" : ".button-transparent"
      } ,`;
    }

    return btn;
}


// barra de navegacion vertical

/* <nav class="sidebar-navigation">
	<ul>
		<li class="active">
			<i class="fa fa-share-alt"></i>
			<span class="tooltip">Connections</span>
		</li>
		<li>
			<i class="fa fa-hdd-o"></i>
			<span class="tooltip">Devices</span>
		</li>
		<li>
			<i class="fa fa-newspaper-o"></i>
			<span class="tooltip">Contacts</span>
		</li>
		<li>
			<i class="fa fa-print"></i>
			<span class="tooltip">Fax</span>
		</li>
		<li>
			<i class="fa fa-sliders"></i>
			<span class="tooltip">Settings</span>
		</li>
	</ul>
</nav> */
const navBarVertical = labels =>{
    let navBar = ``;
    for (let index = 0; index < labels; index++) {
        navBar += `
        { 
        "style" : "",
        "selector" : ""
      } ,`;
    }

    return navBar;
}


//Centrar un div
/* 
<div class="parent">
    <div class="child">Centered content</div>
</div>
*/

const centerDiv = labels =>{
    let div = ``;
    for (let index = 0; index < labels; index++) {

        div += `
        { 
        "style" : ".parent { border:1px solid ${generatorColors()} ; height:250px ; position:relative ; width:250px ; } .child { left:50% ; position:absolute ; top:50% ; transform:translate(-50%,-50%) ; text-align:center ; } ",
        "selector" : ".parent"
      } ,`;
    }

    return div;
}

// Realizar estilos de h1, h2 , h3 , h4
'use strict';

window.addEventListener('load',()=>{
    
    copyStyle();
    generatorDataset();
    
});

// AQUI ES DONE PONEMOS LAS SUBRUTINAS DE ESTILOS
const generatorDataset = ()=>{
    const styleArea = document.querySelector('#code');

    // Aqui le pasamos la etiqueta queramos
    styleArea.innerHTML= tableOfPromos(50);
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
        "style" : ".card-content { position:relative ; float:left ; margin-right:10px ; width:150px ; height:220px ; border-radius:10px ; background:${generatorColors()} ; -webkit-box-shadow:3px3px7pxrgba(0,0,0,.3) ; box-shadow:3px3px7pxrgba(0,0,0,.3) ; }",
        "selector" : ".card-content"
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

// mosaico de imagenes
/*
<div class="image-mosaic">
        <div
          class="card card-tall card-wide"
          style="background-image: url('https://picsum.photos/id/564/1200/800')"
        ></div>
        <div
          class="card card-tall"
          style="background-image: url('https://picsum.photos/id/566/800/530')"
        ></div>
        <div
          class="card"
          style="background-image: url('https://picsum.photos/id/575/800/530')"
        ></div>
        <div
          class="card"
          style="background-image: url('https://picsum.photos/id/626/800/530')"
        ></div>
        <div
          class="card"
          style="background-image: url('https://picsum.photos/id/667/800/530')"
        ></div>
        <div
          class="card"
          style="background-image: url('https://picsum.photos/id/678/800/530')"
        ></div>
        <div
          class="card card-wide"
          style="background-image: url('https://picsum.photos/id/695/800/530')"
        ></div>
        <div
          class="card"
          style="background-image: url('https://picsum.photos/id/683/800/530')"
        ></div>
        <div
          class="card"
          style="background-image: url('https://picsum.photos/id/693/800/530')"
        ></div>
        <div
          class="card"
          style="background-image: url('https://picsum.photos/id/715/800/530')"
        ></div>
        <div
          class="card"
          style="background-image: url('https://picsum.photos/id/610/800/530')"
        ></div>
        <div
          class="card"
          style="background-image: url('https://picsum.photos/id/599/800/530')"
        ></div>
      </div>
*/

const imagesMosaic = labels =>{
    let mosaic = ``;
    for (let index = 0; index < labels; index++) {
        mosaic += `
        { 
        "style" : ".image-mosaic { display:grid ; gap:1rem ; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)) ; grid-auto-rows:240px ; } .card-content { display:flex ; flex-direction:column ; justify-content:center ; align-items:center ; background:${generatorColors()} ; font-size:3rem ; color:${generatorColors()} ; box-shadow:rgba(3,8,20,.1) 0 .15rem .5rem,rgba(2,8,20,.1) 0 .075rem .175rem ; height:100% ; width:100% ; border-radius:4px ; transition:all 500ms ; overflow:hidden ; background-size:cover ; background-position:center ; background-repeat:no-repeat ; padding:0 ; margin:0 } @media screen and (min-width:600px) { .card-content-tall { grid-row:span 2/auto ; } .card-content-wide { grid-column:span 2/auto ; } } ",
        "selector" : ".image-mosaic"
      } ,`;
    }

    return mosaic;
}


// efecto de giro en una imagen
/*
<figure class="hover-rotate">
    <img src="https://picsum.photos/id/669/600/800.jpg"/>
</figure>
*/

const imagesRotate = labels =>{
    let rotate = ``;
    for (let index = 0; index < labels; index++) {
        rotate += `
        { 
        "style" : ".hover-rotate { overflow:hidden ; margin:8px ; min-width:240px ; max-width:320px ; width:100% ; } .hover-rotate img { transition:all 0.3s ; box-sizing:border-box ; max-width:100% ; } .hover-rotate:hover img { transform:scale(1.3) rotate(5deg) ; } ",
        "selector" : ".hover-rotate"
      } ,`;
    }

    return rotate;
}

// efecto de giro en una imagen con un diferente selector
/*
<figure class="image-rotate">
    <img src="https://picsum.photos/id/669/600/800.jpg"/>
</figure>
*/

const imagesHoverRotate = labels =>{
    let rotate = ``;
    for (let index = 0; index < labels; index++) {
        rotate += `
        { 
        "style" : ".image-rotate { overflow:hidden ; margin:8px ; min-width:240px ; max-width:320px ; width:100% ; } .image-rotate img { transition:all 0.3s ; box-sizing:border-box ; max-width:100% ; } .image-rotate:hover img { transform:scale(1.3) rotate(5deg) ; } ",
        "selector" : ".image-rotate"
      } ,`;
    }

    return rotate;
}


// Image-overlay-hover
/*
<figure class="hover-img">
  <img src="https://picsum.photos/id/200/440/320.jpg"/>
  <figcaption>
    <h3>Lorem <br/>Ipsum</h3>
  </figcaption>
</figure>
*/

const imagesWithText = labels =>{
  let img = ``;
  for (let index = 0; index < labels; index++) {
      img += `
      { 
      "style" : ".hover-img { background-color:${generatorColors()} ; color:${generatorColors()} ; display:inline-block ; margin:8px ; max-width:320px ; min-width:240px ; overflow:hidden ; position:relative ; text-align:center ; width:100% ; } .hover-img * { box-sizing:border-box ; transition:all 0.45s ease ; } .hover-img:before,.hover-img:after { background-color:rgba(0,0,0,.5) ; border-top:32px solid rgba(0,0,0,.5) ; border-bottom:32px solid rgba(0,0,0,.5) ; position:absolute ; top:0 ; bottom:0 ; left:0 ; right:0 ; content:'' ; transition:all 0.3s ease ; z-index:1 ; opacity:0 ; transform:scaleY(2) ; } .hover-img img { vertical-align:top ; max-width:100% ; backface-visibility:hidden ; } .hover-img figcaption { position:absolute ; top:0 ; bottom:0 ; left:0 ; right:0 ; align-items:center ; z-index:1 ; display:flex ; flex-direction:column ; justify-content:center ; line-height:1.1em;opacity:0 ; z-index:2 ; transition-delay:0.1s ; font-size:24px ; font-family:sans-serif ; font-weight:400 ; letter-spacing:1px ; text-transform:uppercase ; } .hover-img:hover:before,.hover-img:hover:after { transform:scale(1) ; opacity:1 ; } .hover-img:hover>img { opacity:.7 ; } .hover-img:hover figcaption { opacity:1 ; }",
      "selector" : ".hover-img"
    } ,`;
  }

  return img;
}

// Barra de navegacion con animacion en las opciones del menu
/*
<nav class="hover-nav">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
*/
const navigationWithAnimation = labels =>{
  let nav = ``;
  for (let index = 0; index < labels; index++) {
    nav += `
      { 
      "style" : ".hover-nav ul { list-style:none ; margin:0 ; padding:0 ; overflow:hidden ; } .hover-nav li { float:left ; } .hover-nav li a { position:relative ; display:block ; color:#fff ; text-align:center ; padding:8px 12px ; text-decoration:none ; z-index:0 ; } li a:before { position:absolute ; content:'' ; width:100% ; height:100% ; bottom:0 ; left:0 ; background-color:${generatorColors()} ; z-index:-1 ; transform:scale(0) ; transition:transform 0.5s ease-in-out ; } li a:hover:before,li a:focus:before { transform:scale(1) ; }",
      "selector" : ".hover-nav"
    } ,`;
  }

  return nav;
}

/*
<nav class="navbar">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
*/
const navbarAnimationHover = labels =>{
  let nav = ``;
  for (let index = 0; index < labels; index++) {
    nav += `
      { 
      "style" : ".navbar ul { list-style:none ; margin:0 ; padding:0 ; overflow:hidden ; } .navbar li { float:left ; } .navbar li a { position:relative ; display:block ; color:#fff ; text-align:center ; padding:8px 12px ; text-decoration:none ; z-index:0 ; } li a:before { position:absolute ; content:'' ; width:100% ; height:100% ; bottom:0 ; left:0 ; background-color:${generatorColors()} ; border-radius:10px ; z-index:-1 ; transform:scale(0) ; transition:transform 0.5s ease-in-out ; } li a:hover:before,li a:focus:before { transform:scale(1) ; }",
      "selector" : ".navbar ul"
    } ,`;
  }

  return nav;
}

// registro de usuario & password
/*
<form>
        <label for="username">Username:</label>
        <input id="username" type="text" />
        <br />
        <label for="password">Password:</label>
        <input id="password" type="text" />
</form>
*/

const formForUser = labels =>{
  let form = ``;
  for (let index = 0; index < labels; index++) {
    form += `
      { 
      "style" : "form { border:2px solid ${generatorColors()} ; border-radius:10px ; padding:8px ; border-radius:2px ; } form:focus-within { background:${generatorColors()} ; } label { display:inline-block ; width:72px ; } input { margin:4px 12px ; }",
      "selector" : "form"
    } ,`;
  }

  return form;
}


// tarjeta con contenido y imagen
/*
<div class="card-content">
        <img src="https://picsum.photos/id/404/367/267"/>
        <h3>Lorem ipsum</h3>
        <div class="focus-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> <a href="#">Link to source</a>
          </p>
        </div>
    </div>
*/
const cardWithContent = labels =>{
  let card = ``;
  for (let index = 0; index < labels; index++) {
    card += `
      { 
      "style" : ".card-content { width:300px ; height:280px ; padding:0 ; box-shadow:0 2px 4px 0 rgba(0,0,0,.1);border-radius:8px ; box-sizing:border-box ; overflow:hidden ; } .card-content * { transition:0.3s ease all ; } .card-content img { margin:0 ; width:300px ; height:224px ; object-fit:cover ; display:block ; } .card-content h3 { margin:0 ; padding:12px 12px 48px ; line-height:32px ; font-weight:500 ; font-size:20px ; } .card-content .focus-content { display:block ; padding:8px 12px ; } .card-content p { margin:0 ; line-height:1.5 ; } .card-content:hover img,.card-content:focus-within img { margin-top:-80px ; } .card-content:hover h3,.card-content:focus-within h3 { padding:8px 12px 0 ; }",
      "selector" : ".card-content"
    } ,`;
  }

  return card;
}


// Tabla de Promociones para ventas de productos
/*
    <div class="promos">  
        <div class="promo">
          <div class="deal">
            <span>Premium</span>
            <span>This is really a good deal!</span>
          </div>
          <span class="price">$79</span>
          <ul class="features">
            <li>Some great feature</li>
            <li>Another super feature</li>
            <li>And more...</li>   
          </ul>
          <button>Sign up</button>
        </div>
        <div class="promo scale">
          <div class="deal">
            <span>Plus</span>
            <span>This is really a good deal!</span>
          </div>
          <span class="price">$89</span>
          <ul class="features">
            <li>Some great feature</li>
            <li>Another super feature</li>
            <li>And more...</li>   
          </ul>
          <button>Sign up</button>
        </div>
        <div class="promo">
          <div class="deal">
            <span>Basic</span>
            <span>Basic membership</span>
          </div>
          <span class="price">$69</span>
          <ul class="features">
            <li>Choose the one on the left</li>
            <li>We need moneyy</li>
            <li>And more...</li>   
          </ul>
          <button>Sign up</button>
        </div>
        </div>
*/

const tableOfPromos = labels =>{
  let table = ``;
  for (let index = 0; index < labels; index++) {
    table += `
      { 
      "style" : ".promos { width:800px ; margin:0 auto ; margin-top:50px ; } .promo { width:250px ; background:${generatorColors()} ; color:#f9f9f9 ; float:left ; } .deal{ padding:10px 0 0 0 ; } .deal span { display:block ; text-align:center ; } .deal span:first-of-type { font-size:23px ; } .deal span:last-of-type { font-size:13px ; } .promo .price { display:block ; width:250px ; background:#292b2e ; margin:15px 0 10px 0 ; text-align:center ; font-size:23px ; padding:17px 0 17px 0 ; } ul { display:block ; margin:20px 0 10px 0 ; padding:0 ; list-style-type:none ; text-align:center ; color:#999; } li { display:block ; margin:10px 0 0 0 ; } button { border:none ; border-radius:40px ; background:#292b2e ; color:#f9f9f9 ; padding:10px 37px ; margin:10px 0 20px 10px ; } .scale { transform:scale(1.2) ; box-shadow:0 0 4px 1px rgba(20,20,20,.8) ; } .scale button { background:${generatorColors()} ; } .scale .price { color:${generatorColors()} ; } ",
      "selector" : ".promos"
    } ,`;
  }

  return table;
}


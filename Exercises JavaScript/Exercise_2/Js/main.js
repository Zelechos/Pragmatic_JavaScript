$(document).ready(()=>{

    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1250,
            responsive: true,
        });
    }
    
    if(window.location.href.indexOf('index') > -1){

    //Posts
    var Posts = [
        {
            title : "Aprende Linux",
            date : 'Publicado el Dia ' + moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY")  ,
            content : 'Linux es un sistema operativo que permite realizar un sin número de actividades y día a día aumenta la demanda entre lo empleos de tecnología. Linux cada vez se posiciona mas como el sistema operativo por excelencia en el sector de los servidores y cada ves mas empresa optan por Linux como plataforma de operación ya que presenta grandes ventajas. Entre las características mas importantes está la estabilidad, pues un sistema Linux correctamente instalado puede mantenerse operando por años sin necesidad de ser reiniciado. Otros aspectos que lo hacen atractivo para las empresas son los costos de licenciamiento ya que puede seleccionarse desde las distribuciones Linux Gratuitas o las de pueden prestar soporte de nivel empresarial 24×7 una diferencia importante es que en otras plataformas se necesitan comprar licencias por en número de usuarios que acceden o utilizan el servidor y Linux no tiene estos onerosos costos, ningún costo se genera por cuantos usuarios se conectan a los servidores y se pueden instalar en cuantos servidores o computadoras sea necesario.'
        },
        {
            title : "Aprende Python",
            date : 'Publicado el Dia ' + moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY")  ,
            content : 'Python es un lenguaje de interpretado, cuya filosofía hace hincapié en una sintaxis muy limpia y un código legible. Aquí les presento una lista de razones para aprender Python. Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en una sintaxis muy limpia y un código legible. Aquí les presento una lista sobre las razones de aprender python. Es una buena alternativa para optar por este lenguaje en el mundo de la programación, puesto que es un lenguaje muy sencillo y fácil. Su sintaxis es fácil de entender puesto que es cercana al lenguaje natural, y los programas hechos en Python parecen pseudocódigos, lo cual brinda una gran ayuda en su mantenimiento. Su código es más organizado evitando el uso del signo de punto y coma al final de cada sentencia y también evita el uso de llaves para especificar que dicho bloque de código pertenece a una sentencia. Para esto Python hace uso de la indentación, la cual esta representada por un bloque de 4 espacios, teniendo así un código legible.'
        },
        {
            title : "Aprende React JS",
            date : 'Publicado el Dia ' + moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY")  ,
            content : '¿Por qué React? React tiene claras ventajas frente a la forma clásica de realizar una web, sus facilidades para el desarrollo unido al rendimiento, la flexibilidad y organización del código la convierten en una de las mejores opciones. Una de las principales razones para que esto sea posible es el uso del DOM virtual,  React es capaz de generar el DOM de forma dinámica, hace los cambios en una copia en memoria y después la compara con la versión actual del DOM, de esta forma evita renderizar toda la página cada vez que haya cambios, simplemente se aplica dicho cambio al componente que haya sido actualizado, simple y rápido. Esto propicia una mejor experiencia de usuario, además de un rendimiento y una fluidez impresionante. En todo proyecto web es importante tener en cuenta el posicionamiento, y precisamente este es uno de los principales problemas de este tipo de frameworks, esto es debido al desacoplamiento entre la parte del cliente y del servidor, el contenido HTML se obtiene mediante peticiones a la API y posteriormente se genera, esto provoca que cuando el robot de Google rastrea la web el contenido aun no exista. Con React no tendremos este problema ya que permite isomorfismo, esto significa que es capaz de renderizar este HTML tanto en el cliente como en el servidor, de forma que cuando llegue el robot de Google podremos entregarle el contenido ya renderizado y esto nos permitirá posicionar igual de bien que el típico wordpress de toda la vida. React Native merece otro post para el solo, pero por el momento cabe comentar que es otra herramienta que compilando el mismo código Javascript facilita la generación de aplicaciones nativas para Android, iOS, etc'
        },
    
        {
            title : "Aprende Iteligencia Artificial",
            date : 'Publicado el Dia ' + moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY")  ,
            content : 'La Inteligencia Artificial (IA) es la combinación de algoritmos planteados con el propósito de crear máquinas que presenten las mismas capacidades que el ser humano. Una tecnología que todavía nos resulta lejana y misteriosa, pero que desde hace unos años está presente en nuestro día a día a todas horas. TIPOS DE INTELIGENCIA ARTIFICIAL Los expertos en ciencias de la computación Stuart Russell y Peter Norvig diferencian varios tipos de inteligencia artificial: Sistemas que piensan como humanos: automatizan actividades como la toma de decisiones, la resolución de problemas y el aprendizaje. Un ejemplo son las redes neuronales artificiales. Sistemas que actúan como humanos: se trata de computadoras que realizan tareas de forma similar a como lo hacen las personas. Es el caso de los robots. Sistemas que piensan racionalmente: intentan emular el pensamiento lógico racional de los humanos, es decir, se investiga cómo lograr que las máquinas puedan percibir, razonar y actuar en consecuencia. Los sistemas expertos se engloban en este grupo. Sistemas que actúan racionalmente: idealmente, son aquellos que tratan de imitar de manera racional el comportamiento humano, como los agentes inteligentes.'
        },

        {
            title : "Aprende JavaScript",
            date : 'Publicado el Dia ' + moment().date()+ " de " + moment().format("MMMM") + " del "+ moment().format("YYYY")  ,
            content : 'JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales (HTML y CSS) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.'
        },

    ]

    Posts.forEach(element =>{
        var post = `<article class="post">
        <h2>${element.title}</h2>
        <span class="date">${element.date}</span>
        <p>${element.content}</p>
            <a href="#" class="read-more">Leer mas</a>
        </article>`;
        $('#posts').append(post);
    });
    }
    console.log(Posts);

    //Dise;o Dinamico
    let Longitud = $('#container').height();
    let size = Longitud+250;
    $('#particles-js').css("height" , size+"px");
    $('.footer').css("margin-top" , size-50+"px");

    if(window.location.href.indexOf('aboutme')> -1){
        let Longitud = $('#container').height();
        let size = Longitud-150;
        $('#particles-js').css("height" , size+"px");
        $('.footer').css("margin-top" , size-50+"px");
    }

    if(window.location.href.indexOf('reloj')> -1){
        let Longitud = $('#container').height();
        let size = Longitud+200;
        $('#particles-js').css("height" , size+"px");
        $('.footer').css("margin-top" , size-50+"px");
    }

    


    //Selector de Tema

    var style = $('#theme');
    var particulas = $('#particles');

    $('#to-Violet').click(()=>{
        particulas.attr("src","Js/app_violet.js");
        style.attr("href","./Css/violet.css");
    });

    $('#to-Red').click(()=>{
        particulas.attr("src","Js/app_red.js");
        style.attr("href","./Css/red.css");
    });

    $('#to-Blue').click(()=>{
        particulas.attr("src","Js/app_blue.js");
        style.attr("href","./Css/blue.css");
    });

    $('#to-Green').click(()=>{
        particulas.attr("src","Js/app_green.js");
        style.attr("href","./Css/green.css");
    });


    //Boton subir

    $('#init').click(event=>{
        event.preventDefault();//para que el enlace no nos redireccione a otro sitio

        $('html , body').animate({
            scrollTop : 0,
        },600);

        return false;
    });

    //Login

    $('#login form').submit(()=>{
        var nickname = $('#name').val();
        localStorage.setItem("NickName" , nickname); 
    });

    var etiqueta = document.querySelector('#about');

    var parrafo = document.createElement('h1');
    parrafo.setAttribute("id","text");
    parrafo.style.textAlign = "center";
    parrafo.style.fontSize = 30+"px";
    parrafo.style.boxShadow = "0px 0px 30px #04FF00";
    parrafo.style.borderRadius="10px";
    parrafo.style.textDecoration = "none";

    etiqueta.append(parrafo);
    console.log(etiqueta);

    var nickname = localStorage.getItem("NickName");
    if(nickname != null && nickname != "undefined" && nickname.length != 0){
        var texto = $('#text');
        texto.html("Bienvenido, "+ nickname);
        texto.append("<br><a href='#' id='logout'>Cerrar Sesion</a>")
        $('#login').hide();
    
        $('#logout').click(()=>{
            localStorage.clear();
            location.reload();
        });
    } 
    //Acordion

    if(window.location.href.indexOf('aboutme') > -1){
        $('#acordeon').accordion();
    }

    //Reloj

    if(window.location.href.indexOf('reloj') > -1){

        setInterval(()=>{
            let reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
    }

    //Validacion
    if(window.location.href.indexOf('contact') > -1){
        
        $("form input[name='date']").datepicker(
            {
                dateFormat :'dd-mm-yy'
            }
        );

        $.validate({
            lang: 'es',
            errorMessagePosition : 'top',
            scrollToTopOnError : true
        });
    }
    

});


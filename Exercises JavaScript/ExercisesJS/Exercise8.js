// Relizar un Portafolio de mi mismo rapido con puro objetos

const Me = {
    Name : "Alex",
    LastName : "Tumiri Huanca",
    Age : 24,
    Nationality : "Argentina",
    Home : "Internet",
    MaritalStatus: "Single",
    Profession: "Programmer",
    Stack : ["Java","Python","JavaScript","Html","Css","Git"],

    SocialNetworks : {
        Facebook : ["https://www.facebook.com/PragmaticCodersGroup/","Facebook"],
        Twitter : ["https://twitter.com/CoderPragmatic","Twitter"],
        LinkedIn : ["https://www.linkedin.com/in/alex-tumiri-huanca-6462851b0/","LinkdIn"],
        Instagram : ["https://www.instagram.com/zelechos/","Instagram"],
        Youtube : ["https://www.youtube.com/channel/UCQ1D3FO4ICg6SVivOTwIe4w","Youtube"],
        Github : ["https://github.com/Zelechos","Github"]
    },
    Contacts : {
        Email : "zelechos@hotmail.com",
        WebSite : "https://zelechos.github.io/PragmaticCoder/",
        Cel : 78662983
    },
    
    Portfolio : {
        TiendaYoli : {
            NameSite : "Tienda Yoli",
            Link : "https://zelechos.github.io/Web_Tienda/index.html",
            Description : "Es una web de venta de ropa para Sucre bolivia",
        },

        PosgradosESAM: {
            NameSite : "PosgradosESAM",
            Link : "https://zelechos.github.io/PosgradosESAM/",
            Description : "Es una web para la venta y promocion de posgrados en Sucre Bolivia",
        },
        
        AlanTuring : {
            NameSite : "AlanTuring",
            Link : "https://alanturingweb.000webhostapp.com/Index.html",
            Description : "Es una web en homenaje a Alan Turing",
        },
    },

    // Functions
    
    ShowMe : function(){
        document.write(`
            <div class="box">
                <h1>Bienvenidos este es mi Stack</h1>
                <h2>Hola Mi Nombre es <span>${this.Name} ${this.LastName}</span></h2>

                <h3>Mas Sobre mi</h3>
                <p>
                    Soy un ${this.Profession} que ama Programar y le gusta la IA(Inteligencia Artificial) soy de ${this.Nationality} tengo ${this.Age} quieres trabajar conmigo? ponte en contacto hablemos mediante ${this.Home} presento mis poryecto con puntualidad buenas practias en el desarrollo web.
                </p>
            </div>
        `);

        // Stack
        document.write(`<h3>Mis Conocimientos</h3>`);
        document.write(`<ul>`);
            this.Stack.forEach((tecnologies)=>{
                document.write(`<li class="lenguages">${tecnologies}</li>`);
            })
        document.write(`</ul>`);

        // Social Networks
        document.write(`
            <div class="networks">
                <h2>Estas son mis Redes Sociales</h2>
                <ul>
                    <a href="${this.SocialNetworks.Facebook[0]}" target="_blank">
                        <li>${this.SocialNetworks.Facebook[1]}</li>
                    </a>

                    <a href="${this.SocialNetworks.Twitter[0]}" target="_blank">
                        <li>${this.SocialNetworks.Twitter[1]}</li>
                    </a>

                    <a href="${this.SocialNetworks.Instagram[0]}" target="_blank">
                        <li>${this.SocialNetworks.Instagram[1]}</li>
                    </a>

                    <a href="${this.SocialNetworks.LinkedIn[0]}" target="_blank">
                        <li>${this.SocialNetworks.LinkedIn[1]}</li>
                    </a>

                    <a href="${this.SocialNetworks.Youtube[0]}" target="_blank">
                        <li>${this.SocialNetworks.Youtube[1]}</li>
                    </a>

                    <a href="${this.SocialNetworks.Github[0]}" target="_blank">
                        <li>${this.SocialNetworks.Github[1]}</li>
                    </a>
                </ul>
            <div>
        `);

        // Contacts
        document.write(`
            <div class="contacts">
                <h2>Contactame</h2>
                <p> 
                Puedes visitar
                <a href="${this.Contacts.WebSite}" target="_blank">
                    Mi Web
                </a>
                y ponerte al tanto de en que proyecto estoy trabajando en tiempo real y si estoy libre tambien para hacerme cualquier tipo de consulta sobre el producto que desea desarrollar <br>
                mi numero de telefono es : ${this.Contacts.Cel}<br>
                mi email es : ${this.Contacts.Email}
                </p>         
            </div>
        `);
    },

    Portafolio : function(){
        document.write(`
        <div class="portafolio">    
            <h2>Estas son algunas webs que desarrolle</h2>

            <div class = "webs">
                <div class = "web">
                    <p>
                        Nombre : ${this.Portfolio.TiendaYoli.NameSite}<br><br>
                        Descripcion : ${this.Portfolio.TiendaYoli.Description}<br><br>
                        <a class="button" href="${this.Portfolio.TiendaYoli.Link}" target="_blank">Link</a> <br><br>
                    </p>
                </div>

                <div class = "web">
                    <p>
                        Nombre : ${this.Portfolio.AlanTuring.NameSite}<br><br>
                        Descripcion : ${this.Portfolio.AlanTuring.Description}<br><br>
                        <a class="button" href="${this.Portfolio.AlanTuring.Link}" target="_blank">Link</a> <br><br>
                    </p>
                </div>

                <div class = "web">
                    <p>
                        Nombre : ${this.Portfolio.PosgradosESAM.NameSite}<br><br>
                        Descripcion : ${this.Portfolio.PosgradosESAM.Description}<br><br>
                        <a class="button" href="${this.Portfolio.PosgradosESAM.Link}" target="_blank">Link</a> <br><br>
                    </p>    
                </div>
            </div>
        </div>    
        `);
    },

    Style : function(){
        document.write(`
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

                body{
                    background-color: #0d1117;
                    color: #8b949e;
                    font-family: 'Montserrat', sans-serif;
                }

                ul{
                    list-style: none;
                }

                a{
                    color: #1f6feb;
                    text-decoration: none;
                }

                .box{
                    padding: 20px;
                    border: 3px solid #1f6;
                    border-radius: 5px;
                }

                
                .box h1,
                .box h3,
                h3{
                    color: #1f6feb;
                }

                .lenguages{
                    font-size: 25px;
                }

                .networks h2,
                .box span{
                    color: #1f6;
                }

                .networks{
                    padding: 20px;
                    border: 3px solid #1f6;
                    border-radius: 5px;
                }
                .networks ul {
                    display: block;
                    width: 30%;
                    margin-left: auto;
                    margin-right: auto;
                }
                .networks ul a{
                    font-size: 25px;
                }   

                .networks ul a li{
                    text-align: center;
                    padding: 10px;                    
                    margin-bottom: 5px;
                }

                .networks ul a li:hover{
                    color:#0d1117;
                    background-color:#1f6feb;
                    border: 1px solid #1f6feb;
                    border-radius: 5px;
                    box-shadow: 10px 10px 40px 10px #1f6feb;
                }

                .contacts{
                    padding: 20px;
                    border: 3px solid #1f6feb;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }

                .portafolio{
                    padding: 20px;
                    border: 3px solid #1f6feb;
                    border-radius: 5px;
                }

                .contacts h2,
                .portafolio h2{
                    color: #1f6feb;
                }

                .contacts a{
                    color: #1f6;
                }

                .web{
                    padding: 10px;
                    border: 3px solid #1f6;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }

                .box:hover,
                .networks:hover,
                .web:hover{
                    box-shadow: 10px 10px 50px 10px #1f6;
                }

                .portafolio:hover,
                .contacts:hover{
                    box-shadow: 10px 10px 50px 10px #1f6feb;
                }

                .portafolio .button{
                    text-align: center;
                    display: block;
                    color: #fff;
                    width: 100px;
                    padding: 5px 5px;
                    background-color: #238636;
                    border-radius: 5px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .portafolio .button:hover{
                    color: #000;
                    background-color: #1f6;
                    box-shadow: 10px 10px 40px 10px #1f6;
                }
            </style>
        `);
    }
}

Me.ShowMe();
Me.Portafolio();
Me.Style();
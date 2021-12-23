// 48) Crear un objeto con propiedades dinamicas generar links en la web con todas tus redes sociales

// Creamos el objeto
const links = {}

// Creamos unos datos 
const dataLinks = [
    ["https://www.facebook.com/PragmaticCodersGroup","facebook"],
    ["https://twitter.com/CoderPragmatic","twitter"],
    ["https://www.instagram.com/pragmatic_coder/","instagram"],
    ["https://www.linkedin.com/in/alex-tumiri-huanca-6234b3195/","linkedin"]
]


const addLinks = () => {
    dataLinks.forEach( link =>{
        links[`${link[1]}`] = link[0];
    });
    return links;
}

const renderLinks = () => {
    const object = addLinks();
    let content = `
        <style>
            a{
                background-color: green;
                border: 1px solid white;
                border-radius: 10px;
                padding: 5px 10px;
                text-decoration: none;
                color: black;
                font-size: 50px;
            }
            li{
                padding: 10px;
            }
        </style>

        <ul>
    `;
    for (const key in object) {
        let list = `<li>
                        <a href= "${object[key]}" target="blank">${key}</a>
                    </li>`;
        content += list
    }
    content += `</ul>`
    console.log(content);

    // Introducimos nuestro template a el body
    document.getElementById("bod").innerHTML = content;

}

renderLinks();

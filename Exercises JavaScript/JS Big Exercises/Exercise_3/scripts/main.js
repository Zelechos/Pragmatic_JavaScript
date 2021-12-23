import Postgraduates from "./postgraduates.js";
window.addEventListener('load', ()=> {
    'use strict'
    
    const main = ()=>{
        let file = filename();
        let data = Postgraduates.links(file);

        if(file === "index.html"){
            let links = Postgraduates.viewLinks();
            let labelMain = document.getElementById('content-main');
            let data = labelData(links);
            labelMain.innerHTML = data;
            
        }else if(file === data[0][1]){//Verificamos que la url sea la del postgrado correcto
            let mainLabel = document.getElementById('content-main');
            mainLabel.innerHTML = data[0][0];
        }
    }

    const labelData = (links)=>{
        let text = `<ul>` ;
        for (let index = 0; index < links.length; index++) {
                text += `<li>${links[index]} </li>`;
        }
        text += `</ul>`;
        return text;
    }

    // Metodo para saber que archivo .html hace la llamada a este script
    const filename = ()=> {
		let rutaAbsoluta = self.location.href;   
		let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
		let rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length);
		return rutaRelativa;  
	}

    main();
});
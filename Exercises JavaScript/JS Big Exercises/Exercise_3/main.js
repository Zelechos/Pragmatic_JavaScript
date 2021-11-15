import Postgraduates from "./postgraduates.js";
window.addEventListener('load', ()=> {
    'use strict'
    
    const main = ()=>{
        let links = Postgraduates.viewLinks();
        
        let labelMain = document.getElementById('content-main');
        
        let cloudLabel = document.getElementById('content-cloud');
        let webLabel = document.getElementById('content-web');
        let dataLabel = document.getElementById('content-data');
        let mobileLabel = document.getElementById('content-mobile');
        console.warn(cloudLabel);
        
        let data = labelData(links);
        labelMain.innerHTML = data;
        
        labelTitles();
    }

    const labelData = (links)=>{
        let text = `<ul>` ;
        for (let index = 0; index < links.length; index++) {
                text += `<li>${links[index]} </li>`;
            }
            text += `</ul>`;
            console.log(text);
        return text;
    }

    const labelTitles = ()=>{
            let labelsContent = Postgraduates.viewContentPostgraduates();
            
            for (let index = 0; index < labelsContent.length; index++) {
                let title = labelsContent[index];
                console.log(title);

                // label.innerHTML = title;
            }
    }


    main();
});
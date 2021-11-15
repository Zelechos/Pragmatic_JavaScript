import postgraduates from "./data.js"
'use strict'

export default class Postgraduates {
    // Methods
    static viewLinks(){
        let links = [];

        for (const key in postgraduates.masters) {
            let labelLink = `<a href="./routes/${postgraduates.masters[key].url}" target="_blank">${postgraduates.masters[key].name}</a> `;
            links.push(labelLink);
        }

        return links;
    }

    static viewContentPostgraduates(){
        let content = [];

        for (const key in postgraduates.masters) {
            let labelTitle = `<h1>${postgraduates.masters[key].name}</h1> `;
            let labelDate = `<h3>${postgraduates.masters[key].fecha}</h3> `;
            content.push([labelTitle, labelDate]);
        }

        return content;
    }

    static links(file){
        let content = [];

        for (const key in postgraduates.masters) {

            if(postgraduates.masters[key].url === file){
                let labelsContent = `<h1>${postgraduates.masters[key].name}</h1> 
                <h3>${postgraduates.masters[key].fecha}</h3> 
                `;
                let link = postgraduates.masters[key].url;
                content.push([labelsContent, link]);
                return content;
            }
        }
    }

}
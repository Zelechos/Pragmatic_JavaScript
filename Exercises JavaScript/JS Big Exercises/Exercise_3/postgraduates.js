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
        let titles = [];

        for (const key in postgraduates.masters) {
            let labelTitle = `<h1>${postgraduates.masters[key].name}</h1> `;
            titles.push(labelTitle);
        }
        console.log(titles);
        return titles;
    }

}
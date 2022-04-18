import API from './helpers/wordprees_api.js';


export function App(){
    document.getElementById('root').innerHTML = `<h1>Hello SPA!! <br> ${API.NAME}</h1>`;
}
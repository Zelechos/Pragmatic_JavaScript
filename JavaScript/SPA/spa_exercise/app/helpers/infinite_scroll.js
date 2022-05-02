'use strict';
import { PostCart } from '../components/PostCart.js';
import { SearchCard } from '../components/SeachCard.js';
import { ajax } from './ajax.js';
import API from './wordprees_api.js';

export async function InfiniteScroll(){
    const d = document;
    const w = window;
    let query = localStorage.getItem('wpSearch');
    let apiURL;
    let Component; // HOC => High Order Component

    w.addEventListener('scroll', async e=>{
        let { scrollTop, clientHeight, scrollHeight} = d.documentElement;
        let {hash} = w.location;

        // console.log(scrollTop);
        // console.log(clientHeight);
        // console.log(scrollHeight);
        // console.log(hash);

        if(scrollTop + clientHeight >= scrollHeight){
            API.page++;

            if(!hash || hash === "#/") {
                apiURL = `${API.POSTS}&page=${API.page}`;
                Component =  PostCart;
            } else if(hash.includes("#/search")) {
                apiURL = `${API.SEARCH}${query}&page=${API.page}`;
                Component = SearchCard;
            } else {
                return false;
            }

            d.querySelector('.loader').style.display = "block";
        
            await ajax({
                url : apiURL,
                success : (data)=>{
                    let codeHtml = "";
                    data.forEach(dataPost => codeHtml += Component(dataPost));
                    d.getElementById("main").insertAdjacentHTML("beforeend", codeHtml);
                    d.querySelector('.loader').style.display = "none";
                }
            });
        }
    });
}

'use strict'

let text = document.querySelector("#Texto");
let size = 10;

const sizeText = ()=> {
    text.style.fontSize = size+"px";
    text.style.textAlign = "center";
    text.style.cursor = "pointer";
    text.style.margin = "auto";
    text.setAttribute("onclick","sizeText();");
    size++;
}

sizeText();
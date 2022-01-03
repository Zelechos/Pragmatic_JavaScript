'use strict'

const $labelSubtitles = document.querySelectorAll('h4');

const showColor = label => {
    label.forEach(element =>{
        let color = element.style;
        (element.getAttribute("class") === "celeste")
            ? color.background = "#7792af"
            : color.background = "#ede3e7";
    });
} 

showColor($labelSubtitles);
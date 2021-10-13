'use strict'

window.addEventListener('load', ()=>{

function main(){
    let answer = confirm("Eres un Hacker?");
    
    if(answer){
        const nickname = prompt("Cual es su NickName : ");
        greet(nickname);
        
        const darkWeb = prompt("Que has hecho en la Dark Web");
        answerdark(darkWeb);
    }else{
        document.write(`<p id="text-loser">&lt;you are useless!!! loser&gt;</p>` );

        const text = document.querySelector("#text-loser");
        text.style.cursor="pointer";
        text.style.fontSize = "50px";
        
        let pixels = 100;
        text.addEventListener("click",()=>{
            text.style.fontSize = pixels+"px";
            pixels+=10;
        });
    }
}

function greet (nickname){
    nickname = nickname || "nobody";
    document.write(`
    <fieldset>
        <legend>Hack</legend>
        <p>Hello ${nickname}</p>
    </fieldset>
    `);
}

function answerdark(content){
    content = content || "you are nobody you don't have hacker skills you don't have power";
    document.write(`
    <fieldset>
        <legend>Hack</legend>
        <p>${content}</p>
    </fieldset>
    `);
}

main();

});
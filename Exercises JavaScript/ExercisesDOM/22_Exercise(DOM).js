'use strict'

export default class Draw{
    

    constructor(button, selector){
        this.d = document;
        this.btn = button;
        this.players = document.querySelectorAll(selector);
    }

    winner(){
        let winner = document.createElement('h1');
        this.d.addEventListener('click', e=> {
            if(e.target.matches(this.btn)){
                winner.textContent = this.getWinner(this.players);;
                this.d.getElementById('section11').appendChild(winner);
            }
        });
    }

    getWinner(players){ 
        return `The best programming language is : ${players[Math.floor(Math.random() * players.length)].textContent}`;
    }


    winnerComments(){
        let winner = document.createElement('h1');
        this.d.addEventListener('click', e=> {
            if(e.target.matches(this.btn)){
                winner.textContent = this.getWinnerComments(this.players);;
                this.d.getElementById('section11').appendChild(winner);
            }
        });
    }

    getWinnerComments(players){ 
        return `The winner comment is : ${players[Math.floor(Math.random() * players.length)].textContent}`;
    }

    // ------------- Desarrollar una Aplicacion para realizar sorteos en Diferentes redes sociales
    
    // Para realizar el sorteo mediante comentarios de YOUTUBE aplicando scrapping hacer un programa de esto para diferentes redes sociales
    commentariosDraw(players){ 
        const $listComments = document.querySelectorAll(players);   
        let ran = Math.floor(Math.random() * $listComments.length);
        let x = $listComments[ran];
        return `The winner comment from youtube is : ${x.textContent}`;
    }

    // Manera de ejecutarlo para conseguir los nombres de los usuarios que comentaron
    // commentariosDraw('ytd-comment-thread-renderer #author-text span');
}


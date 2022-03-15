'use strict';

export default class StoryTeller{

    constructor(){
        this.d = document;
        this.spSelect  = this.d.getElementById("speech-select");
        this.spTextArea  = this.d.getElementById("speech-text");
        this.spBtn  = this.d.getElementById("speech-btn");
        this.speechMessage = new SpeechSynthesisUtterance();
    }

    speechReader(){

        let voices = [];

        this.d.addEventListener('DOMContentLoaded', e=>{
            // Evento de speechSynthesis para traer las voces (sin esto no se puede traer la voces!!!)
            window.speechSynthesis.addEventListener("voiceschanged", e=>{
                voices = window.speechSynthesis.getVoices();
                // console.log(voices);

                voices.forEach(voice =>{
                    const $option = document.createElement("option");
                    $option.value = voice.name;
                    $option.textContent = `${voice.name} - ${voice.lang}`;

                    this.spSelect.appendChild($option);
                })
            })
        })

        // Evento para el cambio del selector de las voces
        this.d.addEventListener('change', e=>{
            if(e.target === this.spSelect){
                this.speechMessage.voice = voices.find(voice => voice.name === e.target.value);
            }
            // console.log(this.speechMessage);
        });

        // Evento para activar las voces
        this.d.addEventListener('click', e=>{
            if(e.target === this.spBtn){
                this.speechMessage.text = this.spTextArea.value;
                window.speechSynthesis.speak(this.speechMessage);
            }
        });

    }
}

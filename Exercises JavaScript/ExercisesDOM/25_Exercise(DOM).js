'use strict';

export default class SmartVideo{

    constructor(){
        this.videos = document.querySelectorAll('video[data-smart-video]')
    }

    play(){
        const observer = new IntersectionObserver(this.callback ,{threshold: 0.5});
        this.videos.forEach(video => observer.observe(video));
    }
    
    callback(entries){

        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            window.addEventListener("visibilitychange", e=> 
                (document.visibilityState === "visible") 
                    ?entry.target.play() 
                    :entry.target.pause()
            );
        })
        
    }

}


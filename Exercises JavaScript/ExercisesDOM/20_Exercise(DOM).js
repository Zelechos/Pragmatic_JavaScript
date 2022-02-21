'use strict'

export default class GeolocationNow{

    constructor(id){
        this.d = document;
        this.n = navigator;
        this.geo = document.getElementById(id);
    }

    location(){
        console.log(this.geo);
    }


}
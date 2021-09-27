'use strict'

let Year = 2030;

while(Year <= 2100){
  console.log("we are in the Year : "+Year);
  if(Year == 2050){
    break;
  }
  Year++;
}

// DO WHILE
let years = 25;
do{
  let year = (years < 35)
  ?"Tu edad es "+years+" tienes tiempo para ser un buen programador" 
  :"ya no sirves para aprender programacion no hiciste nada todo este tiempo tienes "+years+" de edad";
  console.log(year);
  
  years++;

}while(years <= 35);

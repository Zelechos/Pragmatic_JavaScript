'use strict'


// FOR generico
let Limite = 10;
for(let i = 0;i<Limite;i++){
      console.log("el numero es : " + (i+1));
}

// FOR IN que sirve para iterar un objeto
// Objeto de ejemplo
const Me = {
      Name : "Alex",
      LastName : "Tumiri Huanca",
      Age : 24,
      Nationality : "Argentina",
      Home : "Internet",
      MaritalStatus: "Single",
      Profession: "Programmer",
      Stack : ["Java","Python","JavaScript","Html","Css","Git"],
      SocialNetworks : {
            Facebook : ["https://www.facebook.com/PragmaticCodersGroup/","Facebook"],
            Twitter : ["https://twitter.com/CoderPragmatic","Twitter"],
            LinkedIn : ["https://www.linkedin.com/in/alex-tumiri-huanca-6462851b0/","LinkdIn"],
            Instagram : ["https://www.instagram.com/zelechos/","Instagram"],
            Youtube : ["https://www.youtube.com/channel/UCQ1D3FO4ICg6SVivOTwIe4w","Youtube"],
            Github : ["https://github.com/Zelechos","Github"]
      },
}

// console.log(Me["Name"]);
for(const key in Me.SocialNetworks) {
      console.log(Me.SocialNetworks[key][1]);      
      console.log(Me.SocialNetworks[key][0]);      
}

// FOR OF que sirve para iterar arrays y no solamente para arreglos...
let numbers = [10,20,30,40,50,60,70,80,90,100];
for (const iterator of numbers) {
      console.log(iterator);
}

let Text = "<Find the Argus Aphocraphex>"
for (const iterator of Text) {
      console.log(iterator);
}

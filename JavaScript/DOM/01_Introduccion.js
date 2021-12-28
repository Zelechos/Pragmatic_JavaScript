'use strict'

console.log(window);

// ingresamos al document que es un atributo del objeto window
console.log(document);

// accedemos a la etiqueta head del documento
console.warn(`accediendo a la etiqueta head del documento html`);
console.log(document.head);

// accedemos a la etiqueta body del documento
console.warn(`accediendo a la etiqueta body del documento html`);
// nos da null por que el documento html no se cargo y se ejecuto antes nuestro script de html para solucionar esto se usa window.Addeventlistener
console.log(document.body);
console.error(`nos da null por que el documento html no se cargo y se ejecuto antes nuestro script de javascript para solucionar esto se usa window.addEventListener('load',()=>{}`);

window.addEventListener('load',()=>{
    console.log(document.body);
});

// accedemos a al etiqueta html del documento
console.warn(`accediendo a la etiqueta html del documento html`);
console.log(document.documentElement);

// tambien podemos acceder a la etiqueta doctype para saber el tipo de archivo
console.warn(`accediendo a la etiqueta doctype del documento html`);
console.log(document.doctype);

// tambien podemos acceder al utf del documento
console.warn(`accediendo al utf del documento html`);
console.log(document.charset);

// tambien podemos acceder a la etiqueta title del documento
console.warn(`accediendo a la etiqueta title del documento html`);
console.log(document.title);

// tambien podemos acceder a la lista de enlaces que serian las cantidad de etiquetas <a> del documento
console.warn(`accediendo a las etiquetas de enlaces del documento html`);
console.log(document.links);

// tambien podemos acceder a la lista de etiquetas <img> del documento
console.warn(`accediendo a las etiquetas img del documento html`);
console.log(document.images);

// tambien podemos acceder a la lista de etiquetas <img> del documento
console.warn(`accediendo a las etiquetas img del documento html`);
console.log(document.images);

// tambien podemos acceder a la lista de formularios <forms> del documento
console.warn(`accediendo a las etiquetas tipo formulario del documento html`);
console.log(document.forms);

// tambien podemos acceder a las hojas de estilo(archivos CSS) del documento
console.warn(`accediendo a las hoja de estilos del documento html`);
console.log(document.styleSheets);


// tambien podemos acceder a los scripts del documento
console.warn(`accediendo a los scripts del documento html`);
console.log(document.scripts);

// para poder obtener el texto que seleccionemos en la web
console.warn(`para poder obtener el texto que seleccionemos del documento html`);
setTimeout(()=>{
    console.log(document.getSelection().toString());
},3000);

document.write(`<h1>Hello DOM</h1>`)



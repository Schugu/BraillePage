import {signosBraille} from 'http://127.0.0.1:5500/signosBraille.js'

function ponerBotones () {
    const botones = document.querySelectorAll(".botonClickeable");
    const parrafo = document.querySelector('.parrafo');
    const botonBorrar = document.querySelector('.botonBorrar')
    const botonBorrarTodo = document.querySelector('.botonBorrarTodo');

    botones.forEach(function(boton){
        boton.addEventListener("click", function(){
            parrafo.appendChild(document.createTextNode(boton.id))
        });
    });
    
        botonBorrar.addEventListener('click', function(){
            if (parrafo.lastChild) {
                parrafo.removeChild(parrafo.lastChild);
            }
        });
        botonBorrarTodo.addEventListener('click', function(){
            while (parrafo.lastChild) {
                parrafo.removeChild(parrafo.lastChild);
            }
        });
};






function crearSignos () {
    const contenedorBotones = document.querySelectorAll(`.alfabeto__signos`);
    const contenedorLetras = document.querySelectorAll(`.alfabeto__letras`);

    for (let i = 0; i < 10; i++) {
        const signosBrailleLetra = Object.keys(signosBraille)[i];

        const divBoton = document.createElement(`div`);
        divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()));
        contenedorBotones[0].appendChild(divBoton);
        divBoton.id = `signoAlfabetoF1${signosBrailleLetra}`;

        const divLetra = document.createElement(`div`);
        divLetra.classList.add(`alfabeto__letra`);
        contenedorLetras[0].appendChild(divLetra);
        const spanLetra = document.createElement(`span`);
        divLetra.appendChild(spanLetra);
        spanLetra.textContent = signosBrailleLetra;   
    }
    for (let i = 0; i < 10; i++) {
        const signosBrailleLetra = Object.keys(signosBraille)[i + 10];

        const divBoton = document.createElement(`div`);
        divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()));
        contenedorBotones[1].appendChild(divBoton);
        divBoton.id = `signoAlfabetoF2${signosBrailleLetra}`;

        const divLetra = document.createElement(`div`);
        divLetra.classList.add(`alfabeto__letra`);
        contenedorLetras[1].appendChild(divLetra);
        const spanLetra = document.createElement(`span`);
        divLetra.appendChild(spanLetra);
        spanLetra.textContent = signosBrailleLetra;   
    }
    for (let i = 20; i < 25; i++) {
        const signosBrailleLetra = Object.keys(signosBraille)[i];

        const divBoton = document.createElement(`div`);
        divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()));
        contenedorBotones[2].appendChild(divBoton);
        divBoton.id = `signoAlfabetoF2${signosBrailleLetra}`;

        const divLetra = document.createElement(`div`);
        divLetra.classList.add(`alfabeto__letra`);
        contenedorLetras[2].appendChild(divLetra);
        const spanLetra = document.createElement(`span`);
        divLetra.appendChild(spanLetra);
        spanLetra.textContent = signosBrailleLetra;   
    }

    for (let i = 25; i < 27; i++) {
        const signosBrailleLetra = Object.keys(signosBraille)[i];

        const divBoton = document.createElement(`div`);
        divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()));
        contenedorBotones[3].appendChild(divBoton);
        divBoton.id = `signoAlfabetoF2${signosBrailleLetra}`;

        const divLetra = document.createElement(`div`);
        divLetra.classList.add(`alfabeto__letra`);
        contenedorLetras[3].appendChild(divLetra);
        const spanLetra = document.createElement(`span`);
        divLetra.appendChild(spanLetra);
        spanLetra.textContent = signosBrailleLetra;   
    }          
        



    const botones = document.querySelectorAll(".boton");
    botones.forEach(function(boton){
        for (let i = 0; i < 6; i++) {
            const spanSigno = document.createElement("span");
            spanSigno.classList.add("punto");
            boton.appendChild(spanSigno);
            spanSigno.id = `punto${i+1}`
        }
    });
    
}





document.addEventListener("DOMContentLoaded", function() {
    ponerBotones();
    crearSignos();


});

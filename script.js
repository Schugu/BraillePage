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
    const contenedorBotones = document.getElementById(`alfabeto__signosF1`);
    const contenedorLetras = document.getElementById(`alfabeto__letrasF1`)

    for (let i = 0; i < 10; i++) {
        const signosBrailleLetra = Object.keys(signosBraille)[i];

        const divBoton = document.createElement(`div`);
        divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()));
        contenedorBotones.appendChild(divBoton);
        divBoton.id = `signoAlfabetoF1${signosBrailleLetra}`;

        const divLetra = document.createElement(`div`);
        divLetra.classList.add(`alfabeto__letra`);
        contenedorLetras.appendChild(divLetra);
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

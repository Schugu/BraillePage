import {signosBraille} from 'http://127.0.0.1:5500/signosBraille.js'

const contenedorBotones = document.querySelectorAll(`.alfabeto__signos`);
const contenedorLetras = document.querySelectorAll(`.alfabeto__letras`);
const listaDeLetras = Object.keys(signosBraille);    
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

function crearFilasDeBotones (fila, inicio, final) { 
    for (let i = inicio; i < final; i++) {
        const signosBrailleLetra = listaDeLetras[i];

        const divBoton = document.createElement(`div`);
        divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()));
        contenedorBotones[fila].appendChild(divBoton);
        divBoton.id = `signoAlfabetoF${fila + 1}-${signosBrailleLetra}`;

        for (let j = 0; j < 6; j++) {
            const spanSigno = document.createElement("span");
            spanSigno.classList.add("punto");
            divBoton.appendChild(spanSigno);
            spanSigno.id = `punto${j+1}`
        }

        const divLetra = document.createElement(`div`);
        divLetra.classList.add(`alfabeto__letra`);
        contenedorLetras[fila].appendChild(divLetra);
        const spanLetra = document.createElement(`span`);
        divLetra.appendChild(spanLetra);
        spanLetra.textContent = signosBrailleLetra;  
    }
} 

function creaAlfabeto () {
    const botones = document.querySelector(`.botonesInteractivos`);
    

    for (let i = 0; i < 27; i++) {
        const signosBrailleLetra = listaDeLetras[i];
        const divBoton = document.createElement(`div`);
        divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()));
        botones.appendChild(divBoton);
        divBoton.id = `signo`+ signosBrailleLetra;

        for (let j = 0; j < 6; j++) {
            const spanSigno = document.createElement("span");
            spanSigno.classList.add("punto");
            divBoton.appendChild(spanSigno);
            spanSigno.id = `punto${j+1}`        
        }  
    }
                              
}

function crearSignos () {
    crearFilasDeBotones(0, 0, 10);
    crearFilasDeBotones(1, 10, 20);
    crearFilasDeBotones(2, 20, 25);
    crearFilasDeBotones(3, 25, 27);
    creaAlfabeto();
}

document.addEventListener("DOMContentLoaded", function() {
    ponerBotones();
    crearSignos();
});
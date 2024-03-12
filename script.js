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

function crearPuntos (divBoton, formato) {
    for (let i = 0; i < 6; i++) {
        const spanSigno = document.createElement("span");
        spanSigno.classList.add("punto");

        switch (formato) {
            case 'grande':
                spanSigno.classList.add(`pGrande`);
                break;
            case 'mediano':
                spanSigno.classList.add(`pMediano`);
                break;
            case 'chico':
                spanSigno.classList.add(`pChico`);
                break;
        }  
        divBoton.appendChild(spanSigno);
        spanSigno.id = `punto${i+1}`
    }
};

function crearFilasDeBotonesAlfabeto (fila, inicio, final, formato) { 
    for (let i = inicio; i < final; i++) {
        const signosBrailleLetra = listaDeLetras[i];

        const divBoton = document.createElement(`div`);
        divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()));
        contenedorBotones[fila].appendChild(divBoton);
        divBoton.id = `signoAlfabetoF${fila + 1}-${signosBrailleLetra}`;
        crearPuntos(divBoton, formato);
        
        const divLetra = document.createElement(`div`);
        divLetra.classList.add(`alfabeto__letra`);
        contenedorLetras[fila].appendChild(divLetra);
        const spanLetra = document.createElement(`span`);
        divLetra.appendChild(spanLetra);
        spanLetra.textContent = signosBrailleLetra;  
        
        switch (formato) {
            case 'grande':
                divBoton.classList.add(`bGrande`);
                divLetra.classList.add(`bGrande`);
                break;
            case 'mediano':
                divBoton.classList.add(`bMediano`);
                divLetra.classList.add(`bMediano`);
                break;
            case 'chico':
                divBoton.classList.add(`bChico`);
                divLetra.classList.add(`bChico`);
                break;
        }  
    }
};

function creaAlfabeto (formato) {
    const botones = document.querySelector(`.botonesInteractivos`);
    for (let i = 0; i < 27; i++) {
        const signosBrailleLetra = listaDeLetras[i];
        const divBoton = document.createElement(`div`);
        divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()), `botonClickeable`);
        botones.appendChild(divBoton);
        divBoton.id = signosBrailleLetra;
        crearPuntos(divBoton, formato);

        switch (formato) {
            case 'grande':
                divBoton.classList.add(`bGrande`);
                break;
            case 'mediano':
                divBoton.classList.add(`bMediano`);
                break;
            case 'chico':
                divBoton.classList.add(`bChico`);
                break;
        }  
    }                          
};

function crearSignosConPalabras (palabraParaCodificar, lugarDondeCrear, formato){
    let palabra = palabraParaCodificar;
    let palabraEnBraille = [];
    const formarPalabras = document.getElementById(`${lugarDondeCrear}`);
    
    for (let i = 0; i < palabra.length; i++) {
        const letra = palabra[i].toLowerCase();
        if (letra in signosBraille) {
            // Crear un objeto que represente la letra en braille con sus valores
            const letraEnBraille = {
                letra: letra,
                braille: signosBraille[letra]
            };
            // Añadir el objeto al array palabraEnBraille
            palabraEnBraille.push(letraEnBraille);
            
            const divBoton = document.createElement(`div`);
            formarPalabras.appendChild(divBoton);

            switch (letraEnBraille.letra[0]) {
                case '¥':
                    divBoton.classList.add(`boton`, `signoCmplt`);
                    break;
                case ' ':
                    divBoton.classList.add(`boton`, `signoVacio`);
                    break;
                case '.':
                    divBoton.classList.add(`boton`, `signoPunto`);
                    break
                case ',':
                    divBoton.classList.add(`boton`, `signoComa`);
                    break
                case ';':
                    divBoton.classList.add(`boton`, `signoPunto-y-coma`);
                    break
                case ':':
                    divBoton.classList.add(`boton`, `signoDosPuntos`);
                    break
                case '-':
                    divBoton.classList.add(`boton`, `signoGuion`);
                    break
                case 'á':
                    divBoton.classList.add(`boton`, `signoÁ`);
                    break
                case 'é':
                    divBoton.classList.add(`boton`, `signoÉ`);
                    break
                case 'í':
                    divBoton.classList.add(`boton`, `signoÍ`);
                    break
                case 'ó':
                    divBoton.classList.add(`boton`, `signoÓ`);
                    break
                case 'ú':
                    divBoton.classList.add(`boton`, `signoÚ`);
                    break
                default:
                    divBoton.classList.add(`boton`, `signo${letraEnBraille.letra.toUpperCase()[0]}`);
            }

            switch (formato) {
                case 'grande':
                    divBoton.classList.add(`bGrande`);
                    break;
                case 'mediano':
                    divBoton.classList.add(`bMediano`);
                    break;
                case 'chico':
                    divBoton.classList.add(`bChico`);
                    break;
            }

            crearPuntos(divBoton, formato);
        }
    }
};

function crearSignoConNumeros (){
    const divBoton = document.querySelector('.botonConNumeros .boton');
    const spansSigno = divBoton.querySelectorAll('.punto');
    
    spansSigno.forEach((spanSigno, i) => {
        spanSigno.classList.add('punto', 'signoGeneradorNumeros');
        spanSigno.id = `punto${i+1}`;
        spanSigno.textContent = `${i+1}`;
    });
}

function crearSignos () {
    crearFilasDeBotonesAlfabeto(0, 0, 10, 'chico');
    crearFilasDeBotonesAlfabeto(1, 10, 20, 'chico');
    crearFilasDeBotonesAlfabeto(2, 20, 25, 'chico');
    crearFilasDeBotonesAlfabeto(3, 25, 27, 'chico');
    creaAlfabeto('chico');

    crearSignosConPalabras ('¥', 'info-div1__botones', 'mediano');
    crearSignosConPalabras ('felíz', 'info-div2__botones', 'mediano');
    crearSignosConPalabras ('¥', 'info-div3__botones', 'mediano');
    crearSignosConPalabras ('One piece', 'formarPalabras', 'chico');
    crearSignoConNumeros();
    
    
};

// MAIN
document.addEventListener("DOMContentLoaded", function() {
    crearSignos();
    ponerBotones();

});
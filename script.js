import {signosBraille} from 'http://127.0.0.1:5500/signosBraille.js'

const listaDeLetras = Object.keys(signosBraille); 

function crearFilasDeBotonesAlfabeto (fila, inicio, final, formato) { 
    const contenedorBotones = document.querySelectorAll(`.alfabeto__signos`);
    const contenedorLetras = document.querySelectorAll(`.alfabeto__letras`);

    for (let i = inicio; i < final; i++) {
        const signosBrailleLetra = listaDeLetras[i];

        const divBoton = document.createElement(`div`);
        // divBoton.classList.add(`boton`, ('signo' + signosBrailleLetra.toUpperCase()));
        contenedorBotones[fila].appendChild(divBoton);
        crearPuntos(divBoton, formato);

        switch (signosBrailleLetra) {
            case '¥':
                divBoton.classList.add(`boton`, `signoCmplt`);
                divBoton.id = ("¥");
                break;
            case ' ':
                divBoton.classList.add(`boton`, `signoVacio`);
                divBoton.id = ("signoVacio");
                break;
            case '.':
                divBoton.classList.add(`boton`, `signoPunto`);
                divBoton.id = (".");
                break
            case ',':
                divBoton.classList.add(`boton`, `signoComa`);
                divBoton.id = (",");
                break
            case ';':
                divBoton.classList.add(`boton`, `signoPunto-y-coma`);
                divBoton.id = (";");
                break
            case ':':
                divBoton.classList.add(`boton`, `signoDosPuntos`);
                divBoton.id = (":");
                break
            case '-':
                divBoton.classList.add(`boton`, `signoGuion`);
                divBoton.id = ("-");
                break
            case 'á':
                divBoton.classList.add(`boton`, `signoÁ`);
                divBoton.id = signosBrailleLetra.toUpperCase();
                break
            case 'é':
                divBoton.classList.add(`boton`, `signoÉ`);
                divBoton.id = signosBrailleLetra.toUpperCase();
                break
            case 'í':
                divBoton.classList.add(`boton`, `signoÍ`);
                divBoton.id = signosBrailleLetra.toUpperCase();
                break
            case 'ó':
                divBoton.classList.add(`boton`, `signoÓ`);
                divBoton.id = signosBrailleLetra.toUpperCase();
                break
            case 'ú':
                divBoton.classList.add(`boton`, `signoÚ`);
                divBoton.id = signosBrailleLetra.toUpperCase();
                break
            default:
                divBoton.classList.add(`boton`, `signo${signosBrailleLetra.toUpperCase()}`);
                divBoton.id = signosBrailleLetra.toUpperCase();
        }



        
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
                    divBoton.id = ("¥");
                    break;
                case ' ':
                    divBoton.classList.add(`boton`, `signoVacio`);
                    divBoton.id = ("signoVacio");
                    break;
                case '.':
                    divBoton.classList.add(`boton`, `signoPunto`);
                    divBoton.id = (".");
                    break
                case ',':
                    divBoton.classList.add(`boton`, `signoComa`);
                    divBoton.id = (",");
                    break
                case ';':
                    divBoton.classList.add(`boton`, `signoPunto-y-coma`);
                    divBoton.id = (";");
                    break
                case ':':
                    divBoton.classList.add(`boton`, `signoDosPuntos`);
                    divBoton.id = (":");
                    break
                case '-':
                    divBoton.classList.add(`boton`, `signoGuion`);
                    divBoton.id = ("-");
                    break
                case 'á':
                    divBoton.classList.add(`boton`, `signoÁ`);
                    divBoton.id = letraEnBraille.letra[0];
                    break
                case 'é':
                    divBoton.classList.add(`boton`, `signoÉ`);
                    divBoton.id = letraEnBraille.letra[0];
                    break
                case 'í':
                    divBoton.classList.add(`boton`, `signoÍ`);
                    divBoton.id = letraEnBraille.letra[0];
                    break
                case 'ó':
                    divBoton.classList.add(`boton`, `signoÓ`);
                    divBoton.id = letraEnBraille.letra[0];
                    break
                case 'ú':
                    divBoton.classList.add(`boton`, `signoÚ`);
                    divBoton.id = letraEnBraille.letra[0];
                    break
                default:
                    divBoton.classList.add(`boton`, `signo${letraEnBraille.letra.toUpperCase()[0]}`);
                    divBoton.id = letraEnBraille.letra[0];
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

function ponerBotones () {
    const botones = document.querySelectorAll(".botonesInteractivos .boton");
    const parrafo = document.querySelector('.parrafo');
    const botonBorrar = document.querySelector('.botonBorrar')
    const botonBorrarTodo = document.querySelector('.botonBorrarTodo');

    botones.forEach(function(boton){
        boton.addEventListener("click", function(){
            if (boton.id == "signoVacio") {
                parrafo.appendChild(document.createTextNode(" "))
            } else {
                parrafo.appendChild(document.createTextNode(boton.id))
            }
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

function crearSignos () {
    crearFilasDeBotonesAlfabeto(0, 0, 10, 'chico');
    crearFilasDeBotonesAlfabeto(1, 10, 20, 'chico');
    crearFilasDeBotonesAlfabeto(2, 20, 25, 'chico');
    crearFilasDeBotonesAlfabeto(3, 25, 27, 'chico');
    crearFilasDeBotonesAlfabeto(4, 27, 32, 'chico');
    crearFilasDeBotonesAlfabeto(5, 32, 38, 'chico');

    crearSignosConPalabras ('¥', 'info-div1__botones', 'mediano');
    crearSignosConPalabras ('felíz', 'info-div2__botones', 'mediano');
    crearSignosConPalabras ('¥', 'info-div3__botones', 'mediano');

    crearSignosConPalabras ("abcdefghijklmnopqrstuvxyzñwáéíóú ", "botonesInteractivos", "mediano");

    crearSignosConPalabras ('One piece', 'formarPalabras', 'chico');
    crearSignoConNumeros();
    
};

// MAIN
document.addEventListener("DOMContentLoaded", function() {
    crearSignos();
    ponerBotones();

});
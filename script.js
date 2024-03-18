import {signosBraille} from 'http://127.0.0.1:5500/signosBraille.js'
const arraySignosBraille = signosBraille; 
const listaDeLetras = Object.keys(signosBraille); 

// Función para darle formato a los puntos y a los signos. 
function formatoSignosYPuntos (divBoton, spanSigno, formato) {
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

// Función para crear botones (simbolos).
function crearBotones (palabraParaCodificar, lugarDondeCrear, formato) {
    let palabra = palabraParaCodificar;
    const formarPalabras = document.getElementById(`${lugarDondeCrear}`);
    // constante que tiene como contendio el lugar donde elijamos crear una palabra.

    // Itera sobre cada letra de la palabra ingresada.
    for (let i = 0; i < palabra.length; i++) {
        // Crea una nueva constante, que tendra como contenido la letra en minuscula.
        const letra = palabra[i].toLowerCase();

        // Si la letra está en el array, realizar esto:
        if (letra in arraySignosBraille) {
            const divBoton = document.createElement(`div`); // Crear un div
            formarPalabras.appendChild(divBoton); // Ubicarlo en el lugar elegido.
            divBoton.classList.add('boton'); // Agragarle la clase 'boton'.
            divBoton.id = letra; // Agregarle como id la letra que se esta manejando.
            
            for (let i = 0; i < 6; i++) { // itera 6 veces, osea la cantidad de puntos que tiene un signo.
                const spanSigno = document.createElement("span"); // Crea un span
                spanSigno.classList.add("punto"); // Le agrega la clase 'punto'.
                
                formatoSignosYPuntos(divBoton, spanSigno, formato); // Llama a la funcion y le envio argumentos.

                // Esto significa que si la letra tiene como contendio de su array un 1 se agrega una clase.
                if (arraySignosBraille[letra][i] === 1) { 
                    spanSigno.classList.add("puntoPresente");
                } 
                divBoton.appendChild(spanSigno); // Se agrega el span al div.
                spanSigno.id = `punto${i+1}`; //se le da una id al span, la iteración más 1. 
            }
        }

    }
}

// Función para crear el alfabeto por filas. 
function crearFilasDeBotonesAlfabeto (fila, inicio, final, formato) { 
    const contenedorBotones = document.querySelectorAll(`.alfabeto__signos`);
    const contenedorLetras = document.querySelectorAll(`.alfabeto__letras`);

    for (let j = inicio; j < final; j++) {
        const signosBrailleLetra = listaDeLetras[j];
        const valorSignosBraille = signosBraille[signosBrailleLetra];

        // Crear boton para el signo        
        const divBoton = document.createElement(`div`);
        divBoton.classList.add('boton');
        divBoton.id = signosBrailleLetra;
        contenedorBotones[fila].appendChild(divBoton);
  
        
        for (let i = 0; i < 6; i++) { // itera 6 veces, osea la cantidad de puntos que tiene un signo.
            const spanSigno = document.createElement("span"); // Crea un span
            spanSigno.classList.add("punto"); // Le agrega la clase 'punto'.
            
            formatoSignosYPuntos(divBoton, spanSigno, formato); // Llama a la funcion y le envio argumentos.

            // Esto significa que si la letra tiene como contendio de su array un 1 se agrega una clase.
            if (valorSignosBraille[i] === 1) { 
                spanSigno.classList.add("puntoPresente"); 
            } 
            divBoton.appendChild(spanSigno); // Se agrega el span al div.
            spanSigno.id = `punto${i+1}`; //se le da una id al span, la iteración más 1. 
        }   

        // LETRAS
        const divLetra = document.createElement(`div`);
        divLetra.classList.add(`alfabeto__letra`, 'boton');
        contenedorLetras[fila].appendChild(divLetra);
        const spanLetra = document.createElement(`span`);
        divLetra.appendChild(spanLetra);
        spanLetra.textContent = signosBrailleLetra;  
        formatoSignosYPuntos (divLetra, spanLetra, formato);    
    }
}

// Función que crea los signos, no lo puse en el main para no llenarlo.
function crearSignos () {
    crearFilasDeBotonesAlfabeto(0, 0, 10, 'mediano');
    crearFilasDeBotonesAlfabeto(1, 10, 20, 'mediano');
    crearFilasDeBotonesAlfabeto(2, 20, 25, 'mediano');
    crearFilasDeBotonesAlfabeto(3, 25, 27, 'mediano');
    crearFilasDeBotonesAlfabeto(4, 27, 32, 'mediano');
    crearFilasDeBotonesAlfabeto(5, 32, 38, 'mediano');


    crearBotones('¥', 'info-div1__botones', 'mediano');
    crearBotones('felíz', 'info-div2__botones', 'mediano');
    crearBotones('¥', 'info-div3__botones', 'mediano');
 
    crearBotones ("abcdefghijklmnopqrstuvxyzñwáéíóú.,:;- ", "botonesInteractivos", "mediano");

    crearBotones ('°', 'formarPalabras', 'chico');


    // crearSignosConNumeros("111111111111111111", "formarNumeros", "grande");

    crearBotones('Hola, como estas', 'formarPalabraNuevo', 'grande');
};

// Función para ponerle numeros al signo generador del incio.
function ponerNumerosAUnSignoGenerador () {
    let div = document.getElementById('info-div3__botones');
    let boton = div.querySelector(".boton");
    let spans = boton.querySelectorAll("span");
    spans.forEach((span, i) => {
        span.textContent = i + 1; 
        span.id = 'signoGeneradorNumeros';
    });
}

// Función para hacer interactivos los botones del minijuego.
function ponerBotonesFuncionales () {
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


// MAIN
document.addEventListener("DOMContentLoaded", function() {
    crearSignos();
    ponerNumerosAUnSignoGenerador();
    ponerBotonesFuncionales();



});
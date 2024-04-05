"use strict";

const arraySignosBraille = signosBraille; 
const listaDeLetras = Object.keys(signosBraille); 
const listaNumeroBraille = numeroBraille;

// Función para darle formato a los puntos y a los signos. 
function formatoSignosYPuntos (divBoton, spanSigno, formato) {
    switch (formato) {
        case 'grande':
            spanSigno.classList.add(`pGrande`);
            divBoton.classList.add(`bGrande`);
            break;
        case 'mediano':
            spanSigno.classList.add(`pMediano`);
            divBoton.classList.add(`bMediano`);
            break;    
        case 'chico':
            spanSigno.classList.add(`pChico`);
            divBoton.classList.add(`bChico`);
            break;                
    } 
}

function codificador (cadenaParaCodificar, array, contenedorBotones, formato) {
    // Itera sobre cada letra de la palabra ingresada.
    for (let i = 0; i < cadenaParaCodificar.length; i++) {
        // Crea una nueva constante, que tendra como contenido la letra en minuscula.
        const caracter = cadenaParaCodificar[i].toLowerCase();

        // Si la letra está en el array, realizar esto:
        if (caracter in array) {
            const divBoton = document.createElement(`div`); // Crear un div
            contenedorBotones.appendChild(divBoton); // Ubicarlo en el lugar elegido.
            divBoton.classList.add('boton'); // Agragarle la clase 'boton'.
            divBoton.id = caracter; // Agregarle como id la letra que se esta manejando.
            
            for (let i = 0; i < 6; i++) { // itera 6 veces, osea la cantidad de puntos que tiene un signo.
                const spanSigno = document.createElement("span"); // Crea un span
                spanSigno.classList.add("punto"); // Le agrega la clase 'punto'.
                
                formatoSignosYPuntos(divBoton, spanSigno, formato); // Llama a la funcion y le envio argumentos.

                // Esto significa que si la letra tiene como contendio de su array un 1 se agrega una clase.
                if (array[caracter][i] === 1) { 
                    spanSigno.classList.add("puntoPresente");
                } 
                divBoton.appendChild(spanSigno); // Se agrega el span al div.
                spanSigno.id = `punto${i+1}`; //se le da una id al span, la iteración más 1. 
            }
        }
    }

}

// Función para crear botones (simbolos).
function crearBotones (palabraParaCodificar, lugarDondeCrear, formato) {
    // Asignar lugar de creación
    const lugarDeCreacion = document.getElementById(`${lugarDondeCrear}`);

    // Crear fragmento
    const fragmento = document.createDocumentFragment();

    // Crear un div, almacenarlo en el fragmento y converirtlo en una constante
    const contenedorBotones = fragmento.appendChild(document.createElement('div'));
    contenedorBotones.classList.add('contenedorBotones');

    // Agregar el fragmento al DOM    
    lugarDeCreacion.appendChild(fragmento);
    
    codificador (palabraParaCodificar, arraySignosBraille, contenedorBotones, formato);
}

// Funciòn para crear nùmeros
function crearNumeros (numeroParaCodificar, lugarDondeCrear, formato) {
    let numero = parseFloat(numeroParaCodificar);
    numero = numero.toLocaleString("es-AR");

    // Para elegir donde queremos crear en base a id de nuestro HTML.
    const lugarDeCreacion = document.getElementById(`${lugarDondeCrear}`);

    // Para crear un fragmento, añadirle un div, y luego ponerle una clase.s
    const fragmento = document.createDocumentFragment();
    const contenedorBotones = fragmento.appendChild(document.createElement('div'));
    contenedorBotones.classList.add('contenedorBotones');

    // Para agregar el fragmento al DOM.
    lugarDeCreacion.appendChild(fragmento);

    // Crear signo de numero 
    const divBoton = document.createElement(`div`); // Crear un div
    contenedorBotones.appendChild(divBoton); // Ubicarlo en el lugar elegido.
    divBoton.classList.add('boton'); // Agragarle la clase 'boton'.
    divBoton.id = "Nº";
    for (let i = 0; i < 6; i++) { // itera 6 veces, osea la cantidad de puntos que tiene un signo.
        const spanSigno = document.createElement("span"); // Crea un span
        spanSigno.classList.add("punto"); // Le agrega la clase 'punto'.
        
        formatoSignosYPuntos(divBoton, spanSigno, formato); // Llama a la funcion y le envio argumentos.

        // Esto significa que si la letra tiene como contendio de su array un 1 se agrega una clase.
        if (listaNumeroBraille["º"][i] === 1){ 
            spanSigno.classList.add("puntoPresente");
        } 
        divBoton.appendChild(spanSigno); // Se agrega el span al div.
        spanSigno.id = `punto${i+1}`; //se le da una id al span, la iteración más 1. 
    }


    codificador (numero, listaNumeroBraille, contenedorBotones, formato);
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

function crearFilaDeBotonesNumero (formato) {
    const filaN = document.getElementById("filaNumerosN");
    const filaS = document.getElementById("filaNumerosS");
    const filaL = document.getElementById("filaNumerosL");

    for (let j = 0; j < 10; j++) {
        const signosBrailleLetra = listaDeLetras[j];
        const valorSignosBraille = signosBraille[signosBrailleLetra];

        // Crear boton para el signo        
        const divBoton = document.createElement(`div`);
        divBoton.classList.add('boton');
        divBoton.id = signosBrailleLetra;
        filaS.appendChild(divBoton);
  
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
        divLetra.classList.add(`contendorLetraNumero`);
        filaL.appendChild(divLetra);
        const spanLetra = document.createElement(`span`);
        divLetra.appendChild(spanLetra);
        spanLetra.textContent = signosBrailleLetra;  
        formatoSignosYPuntos (divLetra, spanLetra, formato); 

        // NÚMEROS
        const divNum = document.createElement(`div`);
        divNum.classList.add(`contendorLetraNumero`);
        filaN.appendChild(divNum);
        const spanNum = document.createElement(`span`);
        divNum.appendChild(spanNum);
        let numerosParaFila = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        spanNum.textContent = numerosParaFila[j];  
        formatoSignosYPuntos (divNum, spanNum, formato); 
    }
}

// Función que crea los signos, no lo puse en el main para no llenarlo.
function crearSignos () {
    // PARTE DE EXPLICAICONES NO BORRAR POR NADA DEL MUNDO.
    crearFilasDeBotonesAlfabeto(0, 0, 10, 'mediano');
    crearFilasDeBotonesAlfabeto(1, 10, 20, 'mediano');
    crearFilasDeBotonesAlfabeto(2, 20, 25, 'mediano');
    crearFilasDeBotonesAlfabeto(3, 25, 27, 'mediano');
    crearFilasDeBotonesAlfabeto(4, 27, 32, 'mediano');
    crearFilasDeBotonesAlfabeto(5, 32, 38, 'mediano');
    crearFilaDeBotonesNumero ("mediano");
    crearBotones('¥', 'info-div1', 'mediano');
    crearBotones('felíz', 'info-div2', 'mediano');
    crearBotones('¥', 'info-div3', 'mediano');
    crearBotones ("abcdefghijklmnopqrstuvxyzñwáéíóú.,:;- ", "botonesInteractivos", "mediano");
    crearBotones ('º', 'explicacionNumeros1', 'chico');
    crearNumeros("26", "explicacionNumeros2__div", "chico")
    crearNumeros("4053317", "explicacionNumeros2__div2", "chico")
}

// Función para ponerle numeros al signo generador del incio.
function ponerNumerosAUnSignoGenerador () {
    let div = document.getElementById('info-div3');
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
}

function AgregarPalabraConInput () {
    const boton = document.getElementById('enviarPalabra')

    function realizarFuncion () {
        const palabra = document.getElementById('textPalabra').value;
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s.,;:-]+$/;

        if (!regex.test(palabra)) {
            document.getElementById('textPalabra').value = ''; // Si el valor no coincide con la expresión regular, se borra
        } else if (palabra.trim() !== '') { 
            const contenedorBotones = document.getElementById('formarPalabras');
            const hijoContenedorBotones = contenedorBotones.querySelector('.contenedorBotones');

            if (hijoContenedorBotones) {
                contenedorBotones.removeChild(hijoContenedorBotones);
            } 

            crearBotones (palabra, 'formarPalabras', 'mediano');
        }
        
        document.getElementById('textPalabra').value = '';
    }

    // Agregar event listener para el click
    boton.addEventListener("click", realizarFuncion);

    // Agregar event listener para la tecla "Enter"
    document.getElementById('textPalabra').addEventListener("keypress", function(event) {
        // Verificar si la tecla presionada es "Enter" (cuyo código es 13)
        if (event.key === "Enter") {
            realizarFuncion(); // Llamar a la función handleClick si se presiona "Enter"
        }
    });
}

function AgregarNumeroConInput () {
    const boton = document.getElementById('enviarNumero')

    function realizarFuncion () {
        const numero = document.getElementById('textNumero').value;
        const regex = /^\d+$/;

        if (!regex.test(numero)) {
            document.getElementById('textNumero').value = ''; // Si el valor no coincide con la expresión regular, se borra
        } else if (numero.trim() !== '') { 
            const contenedorBotones = document.getElementById('formarNumeros');
            const hijoContenedorBotones = contenedorBotones.querySelector('.contenedorBotones');

            if (hijoContenedorBotones) {
                contenedorBotones.removeChild(hijoContenedorBotones);
            } 

            crearNumeros (numero, 'formarNumeros', 'mediano');
        }
        
        document.getElementById('textNumero').value = '';
    }

    // Agregar event listener para el click
    boton.addEventListener("click", realizarFuncion);

    // Agregar event listener para la tecla "Enter"
    document.getElementById('textNumero').addEventListener("keypress", function(event) {
        // Verificar si la tecla presionada es "Enter" (cuyo código es 13)
        if (event.key === "Enter") {
            realizarFuncion(); // Llamar a la función handleClick si se presiona "Enter"
        }
    });
}

// MAIN
crearSignos();
ponerNumerosAUnSignoGenerador();
ponerBotonesFuncionales();
AgregarPalabraConInput();
AgregarNumeroConInput();


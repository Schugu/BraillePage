




const botones = document.querySelectorAll(".botonClickeable");
const parrafo = document.querySelector('.parrafo');
const botonBorrar = document.querySelector('.botonBorrar')
const botonBorrarTodo = document.querySelector('.botonBorrarTodo');

function ponerBotones () {
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






function crearElementoPrueba () {
    const pruebaArticle = document.querySelector(".pruebaArticle");
    const botonPrueba = document.createElement("div");

    for (i = 0; i < 6; i++) {
        const spanPrueba = document.createElement("span");
        botonPrueba.appendChild(spanPrueba);
        spanPrueba.classList.add("punto", "puntoPresente");
    }
    
    pruebaArticle.appendChild(botonPrueba);
    botonPrueba.classList.add("boton");
}





document.addEventListener("DOMContentLoaded", function() {
    ponerBotones();
    // crearElementoPrueba();


});

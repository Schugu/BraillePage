




const botones = document.querySelectorAll(".boton");
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





document.addEventListener("DOMContentLoaded", function() {
    ponerBotones();


});

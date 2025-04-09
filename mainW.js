let nombreRecu = localStorage.getItem("nombre");
let mensajeWelcome = document.getElementById("mensajeWelcome");

let btnEliminar = document.getElementById("btnEliminar");

if(nombreRecu){
    mensajeWelcome.textContent = `Hola!, ${nombreRecu} bienvenido/a de nuevo`;
} else{
    mensajeWelcome.innerHTML = `Por favor ve al index a ingresar tu nombre`;
}

btnEliminar.addEventListener("click", function(){
    localStorage.removeItem("nombre");
    console.log("Nombre eliminado");
    
})
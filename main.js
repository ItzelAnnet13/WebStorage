let txtNombre = document.getElementById("txtNombre");
let btnGuardar = document.getElementById("btnGuardar");



btnGuardar.addEventListener("click", function(){
    
    let nombre = txtNombre.value.trim();
    localStorage.setItem("nombre", nombre)
    console.log("Nombre guardado");
    
    
});

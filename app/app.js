// constante de formulario con .getElementById(), este método revisa el DOM y encuentra el primer elemento HTML que coincida con el parámetro entregado
// const, pues no cambia o no se espera que cambie.
const formulario = document.getElementById("formulario");

// añadido evento al formulario, previene la recarga de la página automáticamente
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    // constantes de cada campo perteneciente al formulario con .getElementById, se obtiene el valor del campo con .value y se hace un "strip" del contenido quitando espacios al inicio y al final del string con .trim()
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const cargo = document.getElementById("cargo").value.trim();
    const correo = document.getElementById("correo").value.trim();

     if (!validarCampoVacio(nombre)) {
        mostrarError("nombre", "El nombre es obligatorio.");
        formularioValido = false;
    }
    
})

function validarCampoVacio(valor) {
    return valor !== "";
}

function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@empresa\.cl$/;
    return regex.test(correo);
}
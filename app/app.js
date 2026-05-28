// constante de formulario con .getElementById(), este método revisa el DOM y encuentra el primer elemento HTML que coincida con el parámetro entregado
// const, pues no cambia o no se espera que cambie.
const formulario = document.getElementById("formulario");

// añadido evento al formulario, previene la recarga de la página automáticamente
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    limpiarErrores();
    // constantes de cada campo perteneciente al formulario con .getElementById, se obtiene el valor del campo con .value y se hace un "strip" del contenido quitando espacios al inicio y al final del string con .trim()
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const cargo = document.getElementById("cargo").value.trim();
    const correo = document.getElementById("correo").value.trim();

    let formularioValido = true;

    // se valida que cada campo no esté vacío
    if (!validarCampoVacio(nombre)) {
        mostrarError("nombre", "El nombre es obligatorio.");
        formularioValido = false;
    }

    if (!validarCampoVacio(apellido)) {
        mostrarError("apellido", "El apellido es obligatorio.");
        formularioValido = false;
    }

    if (!validarCampoVacio(cargo)) {
        mostrarError("cargo", "El cargo es obligatorio.");
        formularioValido = false;
    }

    if (!validarCampoVacio(correo)) {
        mostrarError("correo", "El correo es obligatorio.");
        formularioValido = false;
    } else if (!validarCorreo(correo)) {  // si el correo no está vacío, se valida el formato y dominio
        mostrarError(
            "correo",
            "Debes ingresar un correo válido con dominio @empresa.cl"
        );
        formularioValido = false;
    }
    // si todas las validaciones fueron se muestra el mensaje
    if (formularioValido) {
        alert("Formulario enviado correctamente.");
        formulario.reset();
    }
});


function validarCampoVacio(valor) {
    return valor !== "";
}

//expresión regular para verificar que el correo tenga un string + dominio obligatorio @empresa.cl
function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@empresa\.cl$/;
    return regex.test(correo);
}

// función para mostrar un error en el BLOCK añadido en css
function mostrarError(campo, mensaje) {
    const elementoError = document.getElementById(`error-${campo}`);
    elementoError.textContent = mensaje;
}

function limpiarErrores() {
    const errores = document.querySelectorAll(".error");

    errores.forEach(error => {
        error.textContent = "";
    });
}
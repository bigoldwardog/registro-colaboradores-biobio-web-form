// constante de formulario con .getElementById(), este método revisa el DOM y encuentra el primer elemento HTML que coincida con el parámetro entregado
// const, pues no cambia o no se espera que cambie.
const formulario = document.getElementById("formulario");

// añadido evento al formulario, previene la recarga de la página automáticamente
formulario.addEventListener("submit", function (event) {
    event.preventDefault();
})
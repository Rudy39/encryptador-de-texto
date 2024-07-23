document.addEventListener("DOMContentLoaded", function() {
    let boton__limpiar = document.querySelector(".boton__limpiar");
    let text__entrada = document.querySelector(".text__entrada");
    let text__salida = document.querySelector(".text__salida");

    boton__limpiar.addEventListener("click", function(event) {
        event.preventDefault();

        if (text__entrada) {
            text__entrada.value = "";
        }

        if (text__salida) {
            text__salida.value = "";
        }
    });
});

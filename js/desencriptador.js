document.addEventListener("DOMContentLoaded", function() {
    let boton__desencriptar = document.querySelector(".boton__desencriptar");
    let text__salida = document.querySelector(".text__salida");

    boton__desencriptar.addEventListener("click", function(event) {
        event.preventDefault();

        let entrada = document.querySelector(".text__entrada");
        if (!entrada) {
            console.error("No se encontró el elemento .text__entrada");
            return;
        }

        let texto__raw = entrada.value;
        let texto = texto__raw.toLowerCase();

        let letras = ["a", "e", "i", "o", "u"];
        let cifrado = ["ai", "enter", "imes", "ober", "ufat"];

        let texto__procesado = texto;

        for (let i = 0; i < cifrado.length; i++) {
            texto__procesado = texto__procesado.replaceAll(cifrado[i], letras[i]);
        }

        if (!text__salida) {
            console.error("No se encontró el elemento .text__salida");
            return;
        }

        text__salida.value = texto__procesado;
        console.log("Texto desencriptado: " + texto__procesado);
    });
});

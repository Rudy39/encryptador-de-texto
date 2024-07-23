document.addEventListener("DOMContentLoaded", function() {
    let text__salida = document.querySelector(".text__salida");
    let boton__copiar = document.querySelector(".boton__copiar");

    if (!text__salida) {
        console.error("No se encontró el elemento .text__salida");
        return;
    }
    if (!boton__copiar) {
        console.error("No se encontró el elemento .boton__copiar");
        return;
    }

    boton__copiar.addEventListener("click", function(event) {
        event.preventDefault();

        let texto__capturado = text__salida.value;
        
        if (texto__capturado === "") {
            alert("No hay texto para copiar");
            return;
        }

        navigator.clipboard.writeText(texto__capturado).then(function() {
            alert("Texto copiado en el portapapeles: " + texto__capturado);
            
            let text__entrada = document.querySelector(".text__entrada");
            if (text__entrada) {
                text__entrada.value = "";
            }
            text__salida.value = "";
        }).catch(function(err) {
            console.error("Error al copiar el texto: ", err);
            alert("Hubo un error al intentar copiar el texto.");
        });
    });
});

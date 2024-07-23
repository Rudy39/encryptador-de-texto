let boton__encriptar = document.querySelector(".boton__encriptar");

let text__salida = document.querySelector(".text__salida");

let resultadoEncriptar = boton__encriptar.addEventListener("click", function(event){
    event.preventDefault();

    let entrada = document.querySelector(".text__entrada");

    let texto__raw = entrada.value;
    let texto = texto__raw.toLowerCase();

    let texto__procesado ="";
    let letras = ["a","e","i","o","u"];
    let cifrado =["ai", "enter", "imes", "ober", "ufat"];

    for(let i=0; i< texto.length; i++){
        if (letras.includes(texto[i])){
            for(let pos = 0; pos < cifrado.length; pos++){
                if (texto[i] == letras[pos]){
                    texto__procesado = texto__procesado + cifrado[pos];
                }
            }
        }
        else{
            texto__procesado = texto__procesado + texto[i];
        }
    }

    text__salida.value = texto__procesado;
});
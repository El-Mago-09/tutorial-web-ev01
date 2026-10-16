// JavaScript del tutorial - GA6-220501096-AA4-EV01

document.addEventListener("DOMContentLoaded", function () {
    // Ejemplo interactivo del tema 3
    const boton = document.getElementById("boton-probar");
    const mensaje = document.getElementById("mensaje-js");

    if (boton && mensaje) {
        boton.addEventListener("click", function () {
            mensaje.textContent = "¡JavaScript está funcionando correctamente!";
            mensaje.classList.add("exito");
        });
    }

    // Año automático en el pie de página
    document.querySelectorAll(".anio").forEach(function (elemento) {
        elemento.textContent = new Date().getFullYear();
    });

    // Botón volver arriba
    const volverArriba = document.querySelector(".volver-arriba");

    if (volverArriba) {
        window.addEventListener("scroll", function () {
            volverArriba.classList.toggle("visible", window.scrollY > 300);
        });

        volverArriba.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});

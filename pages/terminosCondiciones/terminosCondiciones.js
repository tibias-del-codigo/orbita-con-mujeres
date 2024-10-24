// Ajustar estilos según el ancho de la pantalla
function ajustarResponsivo() {
    const titulo = document.querySelector("#titulo h1");
    const subtitulo = document.querySelector("#titulo h2");
    const boxContacto = document.querySelector("#box-contacto");
    const imagenMujeres = document.querySelector("#imagenMujeres img");

    const anchoPantalla = window.innerWidth;

    if (anchoPantalla < 576) { // Pantallas pequeñas (celulares)
        titulo.style.fontSize = "3em";
        subtitulo.style.fontSize = "2.5em";
        boxContacto.style.marginTop = "1em";
        imagenMujeres.style.width = "80%";
    } else if (anchoPantalla < 768) { // Tablets
        titulo.style.fontSize = "5em";
        subtitulo.style.fontSize = "4em";
        boxContacto.style.marginTop = "5em";
        imagenMujeres.style.width = "60%";
    } else { // Escritorio
        titulo.style.fontSize = "7em";
        subtitulo.style.fontSize = "6em";
        boxContacto.style.marginTop = "-17em";
        imagenMujeres.style.width = "50%";
    }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la pantalla
window.addEventListener("load", ajustarResponsivo);
window.addEventListener("resize", ajustarResponsivo);

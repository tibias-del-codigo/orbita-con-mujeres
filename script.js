//=====   AJUSTE DE TAMAÑO RESPONSIVE DE LA BARRA LATERAL  ============

function adjustOffcanvasWidth() {
    const offcanvas = document.querySelector(".offcanvas");

    if (window.innerWidth <= 768) {
        offcanvas.style.width = "50%";
    } else if (window.innerWidth >= 1000) {
        offcanvas.style.width = "30%";
    }
}

window.addEventListener("load", adjustOffcanvasWidth);
window.addEventListener("resize", adjustOffcanvasWidth);
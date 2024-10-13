//============ANIMACION PARA AGRANDAR BOTON =============

function applyHoverEffect(elements) {
    elements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transform = 'scale(1.1)';
        });

        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
        });
    });
}

const navItems = document.querySelectorAll('.nav-item');
const linkedinButtons = document.querySelectorAll('.btn-primary');

applyHoverEffect(navItems);
applyHoverEffect(linkedinButtons);


//=====   AJUSTE DE TAMAÑO RESPONSIVE DE LA BARRA LATERAL  ============

function adjustOffcanvasWidth() {
    const offcanvas = document.querySelector(".offcanvas");

    if (window.innerWidth <= 768) {
        offcanvas.style.width = "65%";
    } else if (window.innerWidth >= 1000) {
        offcanvas.style.width = "30%";
    }
}

window.addEventListener("load", adjustOffcanvasWidth);
window.addEventListener("resize", adjustOffcanvasWidth);

window.onload = function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.querySelector('header').style.marginTop = `${navbarHeight}px`;
};

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

//======   AJUSTE DE TAMAÑO RESPONSIVE DEL HEADER   ============

window.addEventListener("resize", ajusteDeTamanioDeHeader);

function ajusteDeTamanioDeHeader() {
    const title = document.querySelector(".title");
    const image = document.querySelector(".header-flowers img");

    const anchoDePantalla = window.innerWidth;

    if (anchoDePantalla <= 750) {
        title.style.fontSize = "4em";
        image.style.width = "5em";
        image.style.height = "5em";
    } else if (anchoDePantalla > 750 && anchoDePantalla <= 1024) {
        title.style.fontSize = "5em";
        image.style.width = "6em";
        image.style.height = "6em";
    } else {
        title.style.fontSize = "11em";
        image.style.width = "16em";
        image.style.height = "16em";
    }
}
ajusteDeTamanioDeHeader();

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


//======== AJUSTE DE ESPACIO ENTRE HEADER Y DESCRIPCION =============
function adjustSpacing() {
    const header = document.querySelector('.custom-container');
    const cardsSection = document.querySelector('.container-lg');
    const descriptionSection = document.querySelector('section .container-lg');

    if (window.innerWidth <= 768) {
        header.style.marginBottom = '20px';
        descriptionSection.style.marginTop = '10px';
        cardsSection.style.marginTop = '10px';
    } else if (window.innerWidth >= 1000) {
        header.style.marginBottom = '20px';
        descriptionSection.style.marginTop = '20px';
        cardsSection.style.marginTop = '20px';
    }
}

window.addEventListener('load', adjustSpacing);
window.addEventListener('resize', adjustSpacing);







window.onload = function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.querySelector('header').style.marginTop = `${navbarHeight}px`;
};
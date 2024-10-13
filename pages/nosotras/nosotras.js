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


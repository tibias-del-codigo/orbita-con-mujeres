
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
        image.style.marginLeft = "3em"
    } else {
        title.style.fontSize = "11em";
        image.style.width = "16em";
        image.style.height = "16em";
    }
}
ajusteDeTamanioDeHeader();



/* RESPONSIVE DE FOTO DE PERFIL Y NOMBRE DE USUARIO */

document.addEventListener('DOMContentLoaded', function () {
    function ajustarFotoPerfil() {
        const container = document.querySelector('.foto-perfil-container');
        const fotoPerfil = document.querySelector('.foto-perfil img');
        const nombreUsuario = document.querySelector('.nombre-usuario');

        if (window.innerWidth <= 768) {
            // Ajustar estilos para pantallas móviles
            container.style.display = 'flex';
            container.style.flexDirection = 'column'; // Alinea los elementos verticalmente
            container.style.alignItems = 'center'; // Centra los elementos horizontalmente
            container.style.marginTop = '-60px';
            
            fotoPerfil.style.margin = '-50'; // Centra la imagen dentro del contenedor

            nombreUsuario.style.display = 'block'; // Para que el nombre esté debajo de la foto
            nombreUsuario.style.marginLeft = '0';
            nombreUsuario.style.marginTop = '10px';
            nombreUsuario.style.textAlign = 'center'; // Centra el texto del nombre
        } else {
            // Ajustar estilos para pantallas grandes
            container.style.display = 'flex';
            container.style.flexDirection = 'row'; // Alinea los elementos horizontalmente
            container.style.justifyContent = 'flex-start';
            container.style.alignItems = 'center';
            container.style.marginTop = '-60px';
            
            fotoPerfil.style.margin = '-30'; // Quita el centrado automático en pantallas grandes

            nombreUsuario.style.display = 'inline-block'; // Para que el nombre esté al lado de la foto
            nombreUsuario.style.marginLeft = '15px';
            nombreUsuario.style.marginTop = '40px';
            nombreUsuario.style.textAlign = 'left'; // Alinea el texto a la izquierda
        }
    }

    // Llamar a la función en el evento de carga y en el redimensionamiento
    ajustarFotoPerfil();
    window.addEventListener('resize', ajustarFotoPerfil);
});

//============BOTONES DE EDITAR ==================
document.getElementById('edit-header').addEventListener('click', function () {
    document.getElementById('header-file').click();
});

document.getElementById('header-file').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('header-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('edit-profile').addEventListener('click', function () {
    document.getElementById('profile-file').click();
});

document.getElementById('profile-file').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-image').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});


/* FUNCIONALIDAD CAMBIAR PAGINA */
// Función para cargar la imagen desde el local storage
function loadImages() {
    const headerImageSrc = localStorage.getItem('headerImage');
    const profileImageSrc = localStorage.getItem('profileImage');

    if (headerImageSrc) {
        document.getElementById('header-image').src = headerImageSrc;
    }

    if (profileImageSrc) {
        document.getElementById('profile-image').src = profileImageSrc;
    }
}

// Cargar imágenes al cargar la página
window.onload = loadImages;

// Editar imagen del header
document.getElementById('edit-header').addEventListener('click', function () {
    document.getElementById('header-file').click();
});

document.getElementById('header-file').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('header-image').src = e.target.result;
            localStorage.setItem('headerImage', e.target.result); // Guardar en local storage
        };
        reader.readAsDataURL(file);
    }
});

// Editar imagen de perfil
document.getElementById('edit-profile').addEventListener('click', function () {
    document.getElementById('profile-file').click();
});

document.getElementById('profile-file').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-image').src = e.target.result;
            localStorage.setItem('profileImage', e.target.result); // Guardar en local storage
        };
        reader.readAsDataURL(file);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    function ajustarFotoPerfil() {
        const container = document.querySelector('.foto-perfil-container');
        const fotoPerfil = document.querySelector('.foto-perfil img');
        const nombreUsuario = document.querySelector('.nombre-usuario');
        const anchoDePantalla = window.innerWidth;

        if (anchoDePantalla <= 768) {
            // Ajustar estilos para pantallas móviles
            container.style.flexDirection = 'column'; // Alinea los elementos verticalmente
            container.style.alignItems = 'center'; // Centra los elementos horizontalmente
            container.style.marginTop = '-90px';

            fotoPerfil.style.margin = '0'; // Centra la imagen
            nombreUsuario.style.textAlign = 'center'; // Centra el texto del nombre
            container.style.justifyContent = 'center'; // Alinea el contenedor al centro
            fotoPerfil.style.marginTop = "-3em";
        } else {
            // Ajustar estilos para pantallas grandes
            container.style.flexDirection = 'row'; // Alinea los elementos horizontalmente
            container.style.justifyContent = 'flex-start'; // Justifica a la izquierda
            container.style.alignItems = 'center'; // Alinear verticalmente
            container.style.marginTop = '-60px';
            fotoPerfil.style.marginTop = "-3em";

            nombreUsuario.style.textAlign = 'left'; // Alinea el texto a la izquierda
        }
    }

    // Llamar a la función en el evento de carga y en el redimensionamiento
    ajustarFotoPerfil();
    window.addEventListener('resize', ajustarFotoPerfil);
});


// Array para almacenar las publicaciones favoritas
let favoritePosts = [];

// Ejemplo de publicaciones disponibles en la red social
const allPosts = [
  { id: 1, content: "¡Primera publicación! 😊" },
  { id: 2, content: "¡Me encanta esta red social! 🚀" },
  { id: 3, content: "¿Quién más está aprendiendo JavaScript? 🤔" },
];

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

/* FUNCIONALIDAD */



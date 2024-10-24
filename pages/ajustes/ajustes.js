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
            fotoPerfil.style.marginLeft = "8em";

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

/* Editar contraseña y corroboración PENDIENTE */

document.querySelector('.guardar-cambios.boton-formulario').addEventListener('click', function(event) {
    const contraseña = document.getElementById('contraseña').value;
    const confirmarContraseña = document.getElementById('confirmar-contraseña').value;

    // Verificar si las contraseñas coinciden
    if (contraseña && confirmarContraseña && contraseña !== confirmarContraseña) {
        // Mostrar mensaje de error si no coinciden
        event.preventDefault(); // Evita que el formulario se envíe
        document.getElementById('mensaje-error').style.display = 'block'; 
    } else {
        // Ocultar mensaje de error si las contraseñas coinciden o no han sido cambiadas
        document.getElementById('mensaje-error').style.display = 'none';
    }
});

/* ADAPTARSE AL TAMAÑO DEL TEXTO*/
// Seleccionar el textarea
const textarea = document.getElementById('acercaDeMi');

// Función que ajusta la altura del textarea
function autoResize() {
    textarea.style.height = 'auto'; // Reinicia la altura para recalcular
    textarea.style.height = textarea.scrollHeight + 'px'; // Ajusta según el contenido
}

// Escuchar el evento 'input' para ajustar en tiempo real
textarea.addEventListener('input', autoResize);

// Ajustar altura al cargar la página
window.addEventListener('load', autoResize);

//Ajustar tamanio de acerca de mi 
function ajustarAnchoContenedor() {
    var columnaIzquierda = document.getElementById("columna-izquierda");
    if (window.innerWidth < 768) {
        columnaIzquierda.style.width = "100%";
    } else {
        columnaIzquierda.style.width = "30%";
        columnaIzquierda.style.marginRight = "0";
    }
}

// Ejecutar la función cuando se carga la página y cuando se cambia el tamaño de la ventana
window.onload = ajustarAnchoContenedor;
window.onresize = ajustarAnchoContenedor;



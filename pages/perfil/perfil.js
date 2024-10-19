
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
// Array para almacenar las publicaciones favoritas
let favoritePosts = [];

// Ejemplo de publicaciones disponibles en la red social
const allPosts = [
  { id: 1, content: "¡Primera publicación! 😊" },
  { id: 2, content: "¡Me encanta esta red social! 🚀" },
  { id: 3, content: "¿Quién más está aprendiendo JavaScript? 🤔" },
];

// Función para renderizar las publicaciones favoritas en el perfil
function renderFavoritePosts() {
  const container = document.getElementById("favorite-posts-container");
  container.innerHTML = ""; // Limpiar el contenedor

  favoritePosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `<p>${post.content}</p>`;
    container.appendChild(postElement);
  });
}

// Función para añadir una publicación a favoritos
function addFavoritePost(postId) {
  const post = allPosts.find((p) => p.id === postId);
  if (post && !favoritePosts.includes(post)) {
    favoritePosts.push(post);
    renderFavoritePosts();
  }
}

// Simulando que el usuario añade una publicación a favoritos
addFavoritePost(1); // Añade la primera publicación
addFavoritePost(3); // Añade la tercera publicación
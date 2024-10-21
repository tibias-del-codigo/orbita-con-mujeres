document.addEventListener('DOMContentLoaded', function () {
  function ajustarFotoPerfil() {
      const container = document.querySelector('.foto-perfil-container');
      const fotoPerfil = document.querySelector('.foto-perfil img');
      const nombreUsuario = document.querySelector('.nombre-usuario');
      const anchoDePantalla = window.innerWidth;

      if (anchoDePantalla <= 768) {
          // Ajustar estilos para pantallas móviles
          container.style.flexDirection = 'column'; 
          container.style.alignItems = 'center'; 
          container.style.marginTop = '-90px';

          fotoPerfil.style.margin = '0';
          nombreUsuario.style.textAlign = 'center'; 
          container.style.justifyContent = 'center'; 
          fotoPerfil.style.marginTop = "-3em";
      
      } else {
          // Ajustar estilos para pantallas grandes
          container.style.flexDirection = 'row'; 
          container.style.justifyContent = 'flex-start'; 
          container.style.alignItems = 'center';
          container.style.marginTop = '-60px';
          fotoPerfil.style.marginTop = "-3em";
          fotoPerfil.style.marginLeft = "10em";

          nombreUsuario.style.textAlign = 'left';
      }
  }

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

/* FUNCIONALIDAD */
window.addEventListener('DOMContentLoaded', function () {
  // Obtener los datos del localStorage
  const nombreUsuario = localStorage.getItem('nombreUsuario') || '@TibioElGuapo';  // Valor por defecto
  const acercaDeMi = localStorage.getItem('acercaDeMi') || '¡Hola! Soy Tibio. Mi mamá es una de las fantásticas desarrolladoras web...';  // Texto por defecto

  // Asignar los valores a los elementos en la página de perfil
  document.querySelector('.nombre-usuario').textContent = nombreUsuario;
  document.querySelector('.acerca-de-mi .card-text').textContent = acercaDeMi;
});
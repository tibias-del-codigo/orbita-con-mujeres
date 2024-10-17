let posts = [];

function publishPost() {
    const postTextInput = document.getElementById('postText');
    const postText = postTextInput.value; // Captura el texto del post
    const postImageInput = document.getElementById('postImage');
    let postImage = '';

    if (postImageInput.files && postImageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            postImage = e.target.result;
            addPost(postText, postImage);
            // Limpiar los campos después de publicar
            clearInputs(postTextInput, postImageInput);
        };
        reader.readAsDataURL(postImageInput.files[0]);
    } else {
        addPost(postText, postImage);
        // Limpiar los campos después de publicar
        clearInputs(postTextInput, postImageInput);
    }
}

function addPost(text, image) {
    const post = {
        usuario: "@TibioElGuapo", // Puedes cambiar esto para que sea dinámico
        texto: text,
        imagen: image
    };

    posts.push(post);
    displayPost(post);
    savePostsToJSON();
}

function displayPost(post) {
    const postsSection = document.querySelector('.row');
    const postHTML = `
        <div class="col-sm-6 col-lg-4 mb-4">
            <div class="card">
                ${post.imagen ? `<img src="${post.imagen}" alt="Post image">` : ''}
                <div class="d-flex text-body-secondary pt-3 p-2">
                    <img class="profile-pic-post" style="width: 50px; margin-right: 10px;" src="../../assets/fotos/TIBIO.jpeg" alt="Perfil">
                    <div class="mb-0 small d-flex align-items-center border-bottom w-100">
                        <strong class="user text-gray-dark">${post.usuario}</strong>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">${post.texto}</p>
                </div>
            </div>
        </div>
    `;
    postsSection.insertAdjacentHTML('beforeend', postHTML);
}

function savePostsToJSON() {
    const jsonPosts = JSON.stringify(posts, null, 2);
    console.log('Publicaciones en JSON:', jsonPosts);
}

function clearInputs(textInput, imageInput) {
    // Limpiar el campo de texto
    textInput.value = '';
    // Limpiar el campo de imagen
    imageInput.value = '';
}
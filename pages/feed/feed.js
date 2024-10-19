
// Initialize a new ItemsController with currentId set to 0
const postController = new PostsController(0);

// Select the New Item Form
const newPostForm = document.querySelector('#newPostForm');


// Add an 'onsubmit' event listener
newPostForm.addEventListener('submit', (event) => {
    // Prevent default action
    event.preventDefault();

    // Select the inputs
    //const newPostUser = document.querySelector('#newPostUser');
    const newPostContent = document.querySelector('#postText');
    const newPostImageUrl = document.querySelector('#postImage');    

    // Get the values of the inputs
    // const user = newPostUser.value;
    const content = newPostContent.value;

    const createPostHTML = (content, imageUrl = '') => {
        return `
            <div class="col-sm-6 col-lg-4 mb-4">
                <div class="card">
                    ${imageUrl ? `<img src="${imageUrl}" alt="Post image">` : ''}
                    <div class="d-flex text-body-secondary pt-3 p-2">
                        <img class="profile-pic-post" style="width: 50px; margin-right: 10px;" src="../../assets/fotos/TIBIO.jpeg" alt="Perfil">
                        <div class="mb-0 small d-flex align-items-center border-bottom w-100">
                            <strong class="user text-gray-dark">@TibioElGuapo</strong>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="card-text">${content}</p>
                    </div>
                </div>
            </div>
        `;
    };
       
    const newCard = document.querySelector('.row');

    // Check if a file is selected and create a FileReader to read it
    if (newPostImageUrl.files && newPostImageUrl.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            const imageUrl = e.target.result; // Image as a base64 encoded URL
            postController.addItem(content, imageUrl);
            newCard.insertAdjacentHTML('beforeend', createPostHTML(content, imageUrl));
        };
        reader.readAsDataURL(newPostImageUrl.files[0]);

    } else {
        postController.addItem(content, ''); // No image provided
        newCard.insertAdjacentHTML('beforeend', createPostHTML(content));
    }
    

  // Clear the form
    //newPostUser = '';
    newPostContent.value = '';  
    newPostImageUrl.value = ''; 

});



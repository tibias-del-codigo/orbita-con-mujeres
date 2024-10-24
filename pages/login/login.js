window.onload = function() {
    // Al cargar la página, agregar la clase que hace que aparezca
    setTimeout(function() {
        document.body.classList.add('fade-in');
    }, 100); // Pequeño retraso para que el efecto sea visible
};

// Ajustar estilos según el ancho de la pantalla
function ajustarResponsivo() {
    const titulo = document.querySelector("#titulo h1");
    const subtitulo = document.querySelector("#titulo h2");
    const boxContacto = document.querySelector("#box-contacto");
    
    const anchoPantalla = window.innerWidth;

    if (anchoPantalla < 576) { // Pantallas pequeñas (celulares)
        titulo.style.fontSize = "3em";
        subtitulo.style.fontSize = "2.5em";
        boxContacto.style.marginTop = "1em";
        imagenMujeres.style.width = "80%";
    } else if (anchoPantalla < 768) { // Tablets
        titulo.style.fontSize = "5em";
        subtitulo.style.fontSize = "4em";
        boxContacto.style.marginTop = "5em";
        imagenMujeres.style.width = "60%";
    } else { // Escritorio
        titulo.style.fontSize = "7em";
        subtitulo.style.fontSize = "7em";
        boxContacto.style.marginTop = "-17em";
        imagenMujeres.style.width = "50%";
    }
}

// Ejecutar la función al cargar la página y al cambiar el tamaño de la pantalla
window.addEventListener("load", ajustarResponsivo);
window.addEventListener("resize", ajustarResponsivo);


/* --------------------- VALIDACIONES ------------------- */
document.getElementById('btn-enviar').addEventListener('click', function () { /* Al hacer click en el botón de enviar... */
   
    /* Pasamos los datos del html a valores para JavaScript */
    const nombre = document.getElementById('Nombre').value; 
    const apellido = document.getElementById('Apellido').value;
    const usuario = document.getElementById('Usuario').value;
    const telefono = document.getElementById('Telefono').value;
    const email = document.getElementById('E-mail').value;
    const password = document.getElementById('Password').value;
    const confirmPassword = document.getElementById('ConfirmPassword').value;
    
    if (!isNaN(nombre)) {
        /* Si el nombre es distinto a lo estipulado suelta un mensaje de error */
        error("El nombre solo debe contener letras.", "errorBoxNombre");
    }

    if (!isNaN(apellido)) {
        /* Si el apellido es distinto a lo estipulado suelta un mensaje de error */
        error("El apellido sólo debe contener letras.", "errorBoxApellido");
    }

    if (!isNaN(usuario)) {
        /* Si el usuario es distinto a lo estipulado suelta un mensaje de error */
        error("El nombre de usuario sólo debe contener letras.", "errorBoxUsuario");
    }

    if (telefono.length < 10) {
        /* Si el teléfono es distinto a lo estipulado suelta un mensaje de error */
        error("El teléfono debe contener más de 10 dígitos.", "errorBoxTelefono");
    }

    if (email.includes('@') || !email.includes('.')) {
        /* Si el correo es distinto a lo estipulado suelta un mensaje de error */
        error("Ingresa un correo electrónico válido.", "errorBoxEmail");
    }

    if (password.length < 8 || !password.match(/[$@$!%*?&]/) || !password.match(/[0-9]/))  {
        /* La contraseña debe tener al menos 8 caracteres, contener un carácter especial y un número */
        error("La contraseña debe tener al menos 8 caracteres, un carácter especial y un número.", "errorBoxContraseña");
    }

    if (!(confirmPassword === password))  {
        /* La confirmación debe ser igual a la contraseña*/
        error("Las contraseñas deben ser iguales.", "errorBoxConfirmarContraseña");
    }

    function error(mostrarMensajeDanger, errorBoxId) {
        const mensajeError = document.getElementById(errorBoxId);
        const alertError = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <p class="m-0">${mostrarMensajeDanger}</p>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;

        /* Para insertar el código HTML en el documento en lugar de cambiar el contenido de un elemento, se usa el método insertAdjacentHTML (https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML) */
        mensajeError.insertAdjacentHTML('afterbegin', alertError);
    }
});


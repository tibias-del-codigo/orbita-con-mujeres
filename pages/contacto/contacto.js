document.getElementById('btn-enviar').addEventListener('click', function (event) { /* Al hacer click en el botón de enviar... */
    /* Pasamos los datos del html a valores para JavaScript */
    /* value.trim() es para eliminar espacios al inicio y final de la cadena */
    const nombre = document.getElementById('Nombre').value.trim(); 
    const apellido = document.getElementById('Apellido').value.trim();
    const email = document.getElementById('E-mail').value.trim();
    const telefono = document.getElementById('Telefono').value.trim();
    const mensaje = document.getElementById('Mensaje').value.trim();
    /* En un div se mostrarán los errores del formulario */
    const mensajeError = document.createElement('div');

    /* Los errores que se vayan mostrando se dejarán en un array */
    let errores = [];

    /* Vamos a validar que nombre y apellido no tenga numeros, sólo letras de la A a la Z (MAYUS-MINUS) y espacios */
    const validarNombre = /^[a-zA-Z\s]+$/;
    const validarApellido = /^[a-zA-Z\s]+$/;
    /* Vamos a validar que correo tenga numeros, letras, punto, guión bajo y guión ANTES del @, después de él debe tener el dominio (gmail, outlook, etc), después el final del dominio entre 2-4 letras (mx, com, org) */
    const validarCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    /* El teléfono debe contener sólo numeros (\d) y sean sólo 10 digitos */
    const validarTelefono = /^\d{10}$/;
    
    if (!validarNombre.test(nombre)) {
        /* Si el nombre es distinto a lo estipulado suelta un mensaje de error */
        errores.push("El nombre sólo debe contener letras.");
    }

    if (!validarApellido.test(apellido)) {
        /* Si el apellido es distinto a lo estipulado suelta un mensaje de error */
        errores.push("El apellido sólo debe contener letras.");
    }

    if (!validarCorreo.test(email)) {
        /* Si el correo es distinto a lo estipulado suelta un mensaje de error */
        errores.push("Por favor, ingrese un correo electrónico válido.");
    }

    if (!validarTelefono.test(telefono)) {
        /* Si el teléfono es distinto a lo estipulado suelta un mensaje de error */
        errores.push("El teléfono debe contener 10 dígitos.");
    }

    if (mensaje.length === 0) {
        /* El mensaje debe tener al menos 1 caracter, pero no debe estar vacío */
        errores.push("El mensaje no puede estar vacío.");
    }

    /* Mostraremos la cadena de errores en caso de haberlos */
    if (errores.length > 0) {
        /* Vamos a mostrar los mensajes con saltos de línea */
        mensajeError.innerHTML = errores.join("<br>");
        /* Le agregamos estilo con BootStrap */
        mensajeError.classList.add('bg-light', 'text-danger', 'mb-3', 'p-2', 'rounded-2', 'text-center');
        /* Agrega el mensaje de error al inicio del form para una mejor visualización */
        document.getElementById('form-enviar').prepend(mensajeError);
    } else {
        /* Si no hay errores el form se envía */
        document.getElementById('form-enviar').submit();
    }
});

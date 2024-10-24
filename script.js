window.onload = function () {
    // Iniciar la transición después de 3 segundos
    setTimeout(function () {
        document.body.classList.add('fade-out'); // Agregar clase que hace el fade
    }, 1000); // Esperar 1 segundo antes de empezar la transición

    // Redirigir después de que termine la transición de 3 segundos
    setTimeout(function () {
        window.location.href = "../pages/login/login.html";
    }, 4000); // 1000ms (espera inicial) + 3000ms (transición)
};
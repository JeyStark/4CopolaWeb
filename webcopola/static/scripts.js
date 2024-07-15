document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad de abrir video
    const openVideoBtn = document.getElementById('openVideoBtn');
    const videoWrapper = document.querySelector('.video-wrapper');
    const overlay = document.querySelector('.overlay');

    if (openVideoBtn) {
        openVideoBtn.addEventListener('click', function() {
            console.log('Abrir video de YouTube');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', function() {
            console.log('Cerrar video de YouTube');
        });
    }

    // Funcionalidad del modal de imagen ampliada
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById("img01");

    // Seleccionar la imagen específica con id resurrection-img
    const targetImg = document.getElementById('resurrection-img');

    if (targetImg) {
        targetImg.addEventListener('click', function() {
            modal.style.display = "block"; // Mostrar el modal
            modalImg.src = "/static/media/resutotal.jpg"; // Establecer la imagen ampliada
        });
    }

    // Obtener la referencia al botón de cerrar (X)
    const closeBtn = document.getElementsByClassName("close")[0];

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }

    // Cerrar el modal al hacer clic fuera de la imagen ampliada
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

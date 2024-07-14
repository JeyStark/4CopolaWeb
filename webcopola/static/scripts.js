// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const openVideoBtn = document.getElementById('openVideoBtn');
    const videoWrapper = document.querySelector('.video-wrapper');
    const overlay = document.querySelector('.overlay');

    openVideoBtn.addEventListener('click', function() {
        // Aquí puedes abrir el video de YouTube en un modal o overlay
        // Por simplicidad, aquí mostramos un mensaje en la consola
        console.log('Abrir video de YouTube');
        // Aquí podrías usar una librería de modal como Bootstrap Modal o implementar tu propio overlay
    });

    // Cerrar el modal cuando se hace clic fuera del video
    overlay.addEventListener('click', function() {
        // Cerrar el modal o overlay aquí
        console.log('Cerrar video de YouTube');
    });
});

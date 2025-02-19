var video = document.getElementById("customVideo");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

// Quando o vídeo termina, ele volta ao início e exibe o poster novamente
video.addEventListener("ended", function() {
    video.load(); // Recarrega o vídeo para restaurar o poster
});
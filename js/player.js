document.addEventListener('DOMContentLoaded', (event) => {
    var music = document.getElementById('background-music');
    var playIcon = document.getElementById('play-icon');
    var pauseIcon = document.getElementById('pause-icon');

    // Sayfa yüklendiğinde müziği başlat ve pause ikonunu göster
    music.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';

    playIcon.addEventListener('click', function() {
        music.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    });

    pauseIcon.addEventListener('click', function() {
        music.pause();
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'inline';
    });

    // Müzik durumu değiştiğinde ikonları güncelle
    music.addEventListener('play', function() {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
    });

    music.addEventListener('pause', function() {
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'inline';
    });
});
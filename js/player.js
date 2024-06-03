document.addEventListener('DOMContentLoaded', (event) => {
    var music = document.getElementById('background-music');
    var playIcon = document.getElementById('play-icon');
    var pauseIcon = document.getElementById('pause-icon');

    
    music.play();

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
});

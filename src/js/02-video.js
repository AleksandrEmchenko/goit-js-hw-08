// Ініціалізація
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
// ---------



const onPlay = function(data) {
    player.addEventListener('onPlay')
};

player.on('play', onPlay);




localStorage.setItem("videoplayer-current-time", currentTime);

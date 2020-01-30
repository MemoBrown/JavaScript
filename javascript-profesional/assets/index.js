const video = document.querySelector('video');
const play_v = document.getElementById('play-video');
const pause_v = document.getElementById('pause-video')

const player = new MediaPlayer({ el: video });
play_v.onclick = () => player.play();
pause_v.onclick = () => player.pause();

function MediaPlayer(config) {
  this.media = config.el
}


MediaPlayer.prototype.play = function() {
  this.media.play();
}

MediaPlayer.prototype.pause = function(){
  this.media.pause();
}
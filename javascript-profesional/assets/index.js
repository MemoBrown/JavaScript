import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const play_v = document.getElementById('play-video');
const pause_v = document.getElementById('pause-video');

const player = new MediaPlayer({ el: video, plugins: [
  //new AutoPlay()
] });
play_v.onclick = () => player.play();
pause_v.onclick = () => player.pause();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};
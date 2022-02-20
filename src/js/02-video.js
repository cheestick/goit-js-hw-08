import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const KEY_CURRENT_TIME = 'videoplayer-current-time';

const playerFrame = document.querySelector('#vimeo-player');
const player = new Vimeo(playerFrame);

const dataLS = JSON.parse(localStorage.getItem(KEY_CURRENT_TIME));
if (dataLS) {
  player.setCurrentTime(dataLS);
}

player.on(
  'timeupdate',
  throttle(currentTime => {
    localStorage.setItem(KEY_CURRENT_TIME, JSON.stringify(currentTime.seconds));
  }, 1000),
);

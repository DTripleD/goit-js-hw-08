import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time';
const timeValueFromStorage = localStorage.getItem(STORAGE_TIME_KEY)
  ? localStorage.getItem(STORAGE_TIME_KEY)
  : 0;

player.on('timeupdate', throttle(timeSaver, 1000));

player.setCurrentTime(timeValueFromStorage);




function timeSaver({ seconds }){
    localStorage.setItem(STORAGE_TIME_KEY, seconds);
}


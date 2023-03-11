import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

currentTimeOfPlayer();

player.on(
  "timeupdate",
  throttle(function (seconds) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
  }, 1000)
);

function currentTimeOfPlayer() {
  const time = JSON.parse(localStorage.getItem("videoplayer-current-time"));

  if (time) {
    player.setCurrentTime(time.seconds);
  }
}

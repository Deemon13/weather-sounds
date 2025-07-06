import { replaceIconWithPause, replaceIconWithType } from "../utils";

export function playSound(audio, container, icon, idForEqual) {
  audio.play();

  replaceIconWithPause(container, icon, idForEqual);
}

export function pauseSound(audio, container, idForEqual) {
  document.body.className = "";
  audio.pause();

  replaceIconWithType(container, idForEqual);
}

export function stopSound(audio, data, idForEqual, element) {
  const currentSound = data.find((sound) => sound.id === idForEqual);
  element.nextSibling.src = currentSound.imgSrc;

  audio.currentTime = 0;
  audio.pause();
}

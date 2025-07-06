import { root } from "./vars";

import { sounds } from "./data";

import {
  renderTitle,
  renderSoundsContainer,
  renderButton,
  renderVolume,
  changeVolumeHandle,
} from "./components";

import { playSound, pauseSound, stopSound } from "./utils";

import pauseIcon from "./images/icons/pause.svg";

import "./index.scss";

let isPlaying = false;
let soundIdPlayed = 0;
let soundPlayed = "";
let soundPlayedIcon = "";

function onSoundClickHandler(evt) {
  const button = evt.target;
  soundPlayed = button.children[0];
  soundPlayedIcon = button.children[1].currentSrc;

  document.body.className = button.className;

  if (isPlaying && soundIdPlayed === Number(button.id)) {
    pauseSound(soundPlayed, container, soundIdPlayed);
    isPlaying = false;
    return;
  }

  if (isPlaying && soundIdPlayed !== Number(button.id)) {
    const currentSound = document.getElementById(soundIdPlayed).children[0];
    stopSound(currentSound, sounds, soundIdPlayed, soundPlayed);
    soundIdPlayed = Number(button.id);
    playSound(soundPlayed, container, pauseIcon, soundIdPlayed);
    isPlaying = true;
    return;
  }

  soundIdPlayed = Number(button.id);
  playSound(soundPlayed, container, pauseIcon, soundIdPlayed);
  isPlaying = true;
}

const title = renderTitle();
root.append(title);

const container = renderSoundsContainer();
root.append(container);

sounds.forEach((sound) => container.append(renderButton(sound)));

const volume = renderVolume();
root.append(volume);

container.addEventListener("click", onSoundClickHandler);
volume.addEventListener("input", () => changeVolumeHandle(soundPlayed, volume));

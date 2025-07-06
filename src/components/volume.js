import { createElement } from "../utils";

export function renderVolume() {
  const volumeRange = createElement("input");
  volumeRange.setAttribute("type", "range");
  volumeRange.setAttribute("id", "volume-control");
  volumeRange.setAttribute("min", "0");
  volumeRange.setAttribute("max", "1");
  volumeRange.setAttribute("step", "0.1");
  volumeRange.className = "volume-control";

  return volumeRange;
}

export function changeVolumeHandle(sound, device) {
  if (!sound) {
    return;
  }
  sound.volume = device.value;
}

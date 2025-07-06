import { sounds } from "../data";

export function replaceIconWithPause(container, icon, idForEqual) {
  const buttons = container.querySelectorAll("button");
  buttons.forEach((button) => {
    if (Number(button.id) === idForEqual) {
      button.children[1].src = icon;
    } else {
      button.children[1].src = sounds.find(
        (sound) => sound.id === Number(button.id)
      ).imgSrc;
    }
  });
}

export function replaceIconWithType(container, idForEqual) {
  const buttons = container.querySelectorAll("button");
  buttons.forEach((button) => {
    if (Number(button.id) === idForEqual) {
      button.children[1].src = sounds.find(
        (sound) => sound.id === Number(button.id)
      ).imgSrc;
    }
  });
}

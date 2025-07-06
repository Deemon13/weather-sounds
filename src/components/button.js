import { createElement } from "../utils";

export function renderButton(button) {
  const btn = createElement("button");
  const sound = createElement("audio");
  const icon = createElement("img");

  sound.setAttribute("src", button.src);
  btn.setAttribute("id", button.id);
  icon.setAttribute("src", button.imgSrc);

  btn.classList.add(button.background);

  btn.append(sound);
  btn.append(icon);

  return btn;
}

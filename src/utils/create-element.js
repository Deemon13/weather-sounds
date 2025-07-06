export function createElement(htmlElement, innerText = "") {
  const elem = document.createElement(htmlElement);
  elem.textContent = innerText;

  return elem;
}

/******/ (() => { // webpackBootstrap
/*!******************!*\
  !*** ./index.js ***!
  \******************/
var root = document.getElementById("app");
console.log("Hello World!");
console.log(root);
var sounds = [
    {
        id: 1,
        type: "sunny",
        alt: "sunny_icon",
        imgSrc: "./images/icons/sun.svg",
        src: "./audio/sounds/summer.mp3",
    },
    {
        id: 2,
        type: "rainy",
        alt: "rainy_icon",
        imgSrc: "./images/icons/cloud-rain.svg",
        src: "./audio/sounds/rain.mp3",
    },
    {
        id: 3,
        type: "snow",
        alt: "snow_icon",
        imgSrc: "./images/icons/cloud-snow.svg",
        src: "./audio/sounds/winter.mp3",
    },
];
sounds.forEach(function (item) {
    console.log(item.type);
});
function createElement(htmlElement, innerText) {
    var elem = document.createElement(htmlElement);
    elem.textContent = innerText;
    return elem;
}
function renderTitle() {
    var title = createElement("h1", "Weather sounds");
    root.append(title);
}
function renderButtons(button) {
    var btn = createElement("button", button.alt);
    var sound = createElement("audio");
    var icon = createElement("img");
    sound.setAttribute("src", button.src);
    icon.setAttribute("src", button.imgSrc);
    btn.append(sound);
    btn.append(icon);
    root.append(btn);
}
renderTitle();
sounds.forEach(renderButtons);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NzY0ODQ3MTFiMjdjNjMyZmNmMy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnNvbGUubG9nKFwiSGVsbG8gV29ybGQhXCIpO1xuY29uc29sZS5sb2cocm9vdCk7XG52YXIgc291bmRzID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHR5cGU6IFwic3VubnlcIixcbiAgICAgICAgYWx0OiBcInN1bm55X2ljb25cIixcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2ljb25zL3N1bi5zdmdcIixcbiAgICAgICAgc3JjOiBcIi4vYXVkaW8vc291bmRzL3N1bW1lci5tcDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHR5cGU6IFwicmFpbnlcIixcbiAgICAgICAgYWx0OiBcInJhaW55X2ljb25cIixcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2ljb25zL2Nsb3VkLXJhaW4uc3ZnXCIsXG4gICAgICAgIHNyYzogXCIuL2F1ZGlvL3NvdW5kcy9yYWluLm1wM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdHlwZTogXCJzbm93XCIsXG4gICAgICAgIGFsdDogXCJzbm93X2ljb25cIixcbiAgICAgICAgaW1nU3JjOiBcIi4vaW1hZ2VzL2ljb25zL2Nsb3VkLXNub3cuc3ZnXCIsXG4gICAgICAgIHNyYzogXCIuL2F1ZGlvL3NvdW5kcy93aW50ZXIubXAzXCIsXG4gICAgfSxcbl07XG5zb3VuZHMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGNvbnNvbGUubG9nKGl0ZW0udHlwZSk7XG59KTtcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoaHRtbEVsZW1lbnQsIGlubmVyVGV4dCkge1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sRWxlbWVudCk7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IGlubmVyVGV4dDtcbiAgICByZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIHJlbmRlclRpdGxlKCkge1xuICAgIHZhciB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcIldlYXRoZXIgc291bmRzXCIpO1xuICAgIHJvb3QuYXBwZW5kKHRpdGxlKTtcbn1cbmZ1bmN0aW9uIHJlbmRlckJ1dHRvbnMoYnV0dG9uKSB7XG4gICAgdmFyIGJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgYnV0dG9uLmFsdCk7XG4gICAgdmFyIHNvdW5kID0gY3JlYXRlRWxlbWVudChcImF1ZGlvXCIpO1xuICAgIHZhciBpY29uID0gY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBzb3VuZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYnV0dG9uLnNyYyk7XG4gICAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYnV0dG9uLmltZ1NyYyk7XG4gICAgYnRuLmFwcGVuZChzb3VuZCk7XG4gICAgYnRuLmFwcGVuZChpY29uKTtcbiAgICByb290LmFwcGVuZChidG4pO1xufVxucmVuZGVyVGl0bGUoKTtcbnNvdW5kcy5mb3JFYWNoKHJlbmRlckJ1dHRvbnMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
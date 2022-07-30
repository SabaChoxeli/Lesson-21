const socket = new WebSocket("ws://ucha.ge:8082");
let isSocketConnected = false;
socket.addEventListener("open", function (event) {
  isSocketConnected = true;
});
function sendMessage(message) {
  if (isSocketConnected) {
    socket.send(JSON.stringify(meesage));
  } else {
    console.log("We are not connected yet");
  }
}

let colors = [
  "black",
  "red",
  "yellow",
  "blue",
  "blueviolet",
  "brown",
  "chocolate",
  "green",
  "purple",
  "orange",
];

let getRandomColor = function () {
  let value = Math.random() * 10;
  let floor = Math.floor(value);
  return colors[floor];
};

let box = document.querySelectorAll("td");

for (let i = 0; i < box.length; i++) {
  let myColor = getRandomColor();
  let element = box[i];
  element.addEventListener("click", () => {
    element.style.backgroundColor = myColor;
  });
}

console.log("done");

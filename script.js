"use strict";

const form = document.querySelector("#form");
const input = document.querySelector("#input");
const textarea = document.querySelector(".textarea");
const file = document.getElementById("myfile");

form.addEventListener("submit", handleMessage);
file.addEventListener("change", readFile);

let map, addedImg;
let ws = new WebSocket("wss://venify.herokuapp.com/chat");
// wss://venify.herokuapp.com/chat
// ws://echo.websocket.org

async function handleMessage(e) {
  e.preventDefault();

  const form2 = e.currentTarget.elements;
  // input message
  let message = input.value;
  let name = form2.name.value;

  form2.name.setAttribute("disabled", "disabled");

  ws.onmessage = ({ data }) => {
    const { message, cords, name, image } = JSON.parse(data);
    const template = render(getTime(), name, message, image);

    textarea.prepend(template);
    // set marker
    markerInit(cords);
  };

  const geo = await getGeoLocation();

  ws.send(JSON.stringify({ cords: geo, message, name, image: addedImg }));
  input.value = "";
}

function render(time, name, message, image) {
  const div = document.createElement("div");
  const timeBlock = document.createElement("span");
  const nameBlock = document.createElement("span");
  const messageBlock = document.createElement("span");
  const img = document.createElement("img");
  img.src = image;
  img.style.width = "30px";
  img.style.height = "30px";
  timeBlock.append(time);
  nameBlock.append(name);
  messageBlock.append(message);

  div.append(timeBlock, nameBlock, messageBlock, img);
  div.classList.add("incoming");
  return div;
}

function getTime() {
  const hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  if (minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
}

async function getGeoLocation() {
  const coords = await new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(({ coords }) => resolve(coords));
  });

  return {
    lat: coords.latitude,
    lng: coords.longitude
  };
}

//render map
window.onload = function() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: { lat: -25.363, lng: 131.044 }
  });
};

function markerInit(coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: map
  });

  map.setZoom(10);
  map.setCenter(coords);
}

function readFile() {
  if (this.files && this.files[0]) {
    var FR = new FileReader();

    FR.addEventListener("load", function(e) {
      addedImg = FR.result;
    });

    FR.readAsDataURL(this.files[0]);
  }
}

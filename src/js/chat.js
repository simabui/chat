"use strict";
import { getGeoLocation } from "./geolocation";
import { mapInit, markerInit } from "./googleMap";
import { getData } from "./localStorage";
import { render } from "./render";

export function chat() {
  if (!document.querySelector("#CHAT-PAGE")) return;

  if (!isPresentInLocal()) {
    alert("You need to login");
    // document.location.replace("/form/dist/login.html");
  }

  const form = document.querySelector("#form-chat");
  const input = document.querySelector("#input");
  const textarea = document.querySelector(".textarea");
  //take from local
  let name = getData("username");
  let addedImg = getData("image");

  form.addEventListener("submit", handleMessage);

  //init map
  mapInit();
  let ws = new WebSocket("wss://venify.herokuapp.com/chat");
  // wss://venify.herokuapp.com/chat
  // ws://echo.websocket.org

  async function handleMessage(e) {
    e.preventDefault();
    // input message
    let message = input.value;
    const geo = await getGeoLocation();

    ws.onmessage = ({ data }) => {
      const { message, cords, name, image, mine } = JSON.parse(data);
      const template = render(getTime(), name, message, image);
      //check if mine message sent
      if (mine) {
        template.classList.add("incoming--mine");
      } else {
        template.classList.add("incoming--guest");
      }
      textarea.prepend(template);
      // set marker
      markerInit(cords);
    };

    ws.send(
      JSON.stringify({ cords: geo, message, name, image: addedImg, mine: true })
    );
    //reset input
    input.value = "";
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

  function isPresentInLocal() {
    const name = getData("username");
    return name;
  }
}

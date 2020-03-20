"use strict";

export function render(time, name, message, image) {
  const div = document.createElement("div");
  const incomingWrapper = document.createElement("div");
  const timeBlock = document.createElement("span");
  const nameBlock = document.createElement("span");
  const messageBlock = document.createElement("div");
  const img = document.createElement("img");
  const incomingInfo = document.createElement("div");
  img.src = image;
  timeBlock.append(time);
  nameBlock.append(name);
  messageBlock.append(message);
  incomingInfo.append(timeBlock, nameBlock);
  incomingWrapper.append(incomingInfo, messageBlock);

  div.classList.add("incoming");
  img.classList.add("incoming__img");
  incomingInfo.classList.add("incoming__info");
  incomingWrapper.classList.add("incoming__wrapper");
  timeBlock.classList.add("incoming__time");
  nameBlock.classList.add("incoming__name");
  messageBlock.classList.add("incoming__message");
  //wrap in main div
  div.append(img, incomingWrapper);
  return div;
}

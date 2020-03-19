"use strict";
import { setData } from "./localStorage";

const formLogin = document.querySelector("#login");
const file = document.getElementById("myfile");
const fileButton = document.querySelector(".login__file");

export function login() {
  if (!document.querySelector("#LOGIN")) {
    return;
  }
  formLogin.addEventListener("submit", handleSubmit);
  file.addEventListener("change", readFile);

  function handleSubmit(e) {
    e.preventDefault();

    const { username } = e.currentTarget.elements;

    setData("username", username.value);
    // document.location.replace("/form/dist/chat.html");
  }
}

// image insert
function readFile(e) {
  //display file name
  const { value } = e.target;
  const fileName = value.replace(/^.*\\/g, "");
  fileButton.innerHTML = fileName;

  if (this.files && this.files[0]) {
    var FR = new FileReader();

    FR.addEventListener("load", function() {
      setData("image", FR.result);
    });

    FR.readAsDataURL(this.files[0]);
  }
}

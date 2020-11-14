"use strict";
import { setData, getData } from "./localStorage";

const formLogin = document.querySelector("#login");
const file = document.getElementById("myfile");
const fileButton = document.querySelector(".login__file");

export function login() {
  if (!document.querySelector("#LOGIN")) {
    return;
  }

  formLogin.addEventListener("submit", handleSubmit);
  //event file reader
  file.addEventListener("change", readFile);

  function handleSubmit(e) {
    e.preventDefault();

    const { username } = e.currentTarget.elements;

    //validate empty inputs
    const fileLocal = getData("image");
    if (username.value === "" || !fileLocal) {
      alert("Cannot log in: Choose username or image");
      return;
    }

    setData("username", username.value);
    document.location.replace("/chat/chat.html");
  }
}

// image insert
function readFile(e) {
  //display file name
  const { value } = e.target;

  if (value.length !== 0) {
    const fileName = value.replace(/^.*\\/g, "");
    fileButton.innerHTML = fileName;
  } else {
    return;
  }
  //convert to base64
  if (this.files && this.files[0]) {
    var FR = new FileReader();

    FR.addEventListener("load", function () {
      setData("image", FR.result);
    });

    FR.readAsDataURL(this.files[0]);
  }
}

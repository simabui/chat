(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{ch6i:function(e,n,t){},e6Wu:function(e,n,t){"use strict";t.r(n);t("ch6i");function a(e,n){const t=JSON.stringify(n);localStorage.setItem(e,t)}function o(e){const n=localStorage.getItem(e);return JSON.parse(n)}const i=document.querySelector("#login"),c=document.getElementById("myfile"),s=document.querySelector(".login__file");function r(e){const{value:n}=e.target;if(0!==n.length){{const e=n.replace(/^.*\\/g,"");s.innerHTML=e}if(this.files&&this.files[0]){var t=new FileReader;t.addEventListener("load",(function(){a("image",t.result)})),t.readAsDataURL(this.files[0])}}}let m;document.querySelector("#LOGIN")&&(i.addEventListener("submit",(function(e){e.preventDefault();const{username:n}=e.currentTarget.elements,t=o("image");""!==n.value&&t?(a("username",n.value),document.location.replace("/chat/dist/chat.html")):alert("Cannot log in: Choose username or image")})),c.addEventListener("change",r)),function(){if(!document.querySelector("#CHAT-PAGE"))return;o("username")||(alert("You need to login"),document.location.replace("/chat/dist/login.html"));const e=document.querySelector("#form-chat"),n=document.querySelector("#input"),t=document.querySelector(".textarea");let a=o("username"),i=o("image");e.addEventListener("submit",(async function(e){e.preventDefault();let o=n.value;const s=await async function(){const e=await new Promise(e=>{navigator.geolocation.getCurrentPosition(({coords:n})=>e(n))});return{lat:e.latitude,lng:e.longitude}}();c.onmessage=({data:e})=>{const{message:n,cords:a,name:o,image:i,mine:c}=JSON.parse(e),s=function(e,n,t,a){const o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("span"),s=document.createElement("span"),r=document.createElement("div"),m=document.createElement("img"),l=document.createElement("div");return m.src=a,c.append(e),s.append(n),r.append(t),l.append(c,s),i.append(l,r),o.classList.add("incoming"),m.classList.add("incoming__img"),l.classList.add("incoming__info"),i.classList.add("incoming__wrapper"),c.classList.add("incoming__time"),s.classList.add("incoming__name"),r.classList.add("incoming__message"),o.append(m,i),o}(function(){const e=(new Date).getHours();let n=(new Date).getMinutes();return n<10?`${e}:0${n}`:`${e}:${n}`}(),o,n,i);var r;c?s.classList.add("incoming--mine"):s.classList.add("incoming--guest"),t.prepend(s),r=a,new google.maps.Marker({position:r,map:m}),m.setZoom(10),m.setCenter(r)},c.send(JSON.stringify({cords:s,message:o,name:a,image:i,mine:!0})),n.value=""})),window.onload=function(){m=new google.maps.Map(document.getElementById("map"),{zoom:1,center:{lat:-25.363,lng:131.044}})};let c=new WebSocket("wss://venify.herokuapp.com/chat")}()}},[["e6Wu",1]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"4w6A":function(t,n,e){
/*!
 * Toastify js 1.9.3
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
var i,o;i=this,o=function(t){var n=function(t){return new n.lib.init(t)};function e(t,n){return n.offset[t]?isNaN(n.offset[t])?n.offset[t]:n.offset[t]+"px":"0px"}function i(t,n){return!(!t||"string"!=typeof n||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(n)>-1))}return n.lib=n.prototype={toastify:"1.9.3",constructor:n,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||"Hi there!",this.options.node=t.node,this.options.duration=0===t.duration?0:t.duration||3e3,this.options.selector=t.selector,this.options.callback=t.callback||function(){},this.options.destination=t.destination,this.options.newWindow=t.newWindow||!1,this.options.close=t.close||!1,this.options.gravity="bottom"===t.gravity?"toastify-bottom":"toastify-top",this.options.positionLeft=t.positionLeft||!1,this.options.position=t.position||"",this.options.backgroundColor=t.backgroundColor,this.options.avatar=t.avatar||"",this.options.className=t.className||"",this.options.stopOnFocus=void 0===t.stopOnFocus||t.stopOnFocus,this.options.onClick=t.onClick,this.options.offset=t.offset||{x:0,y:0},this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");if(t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&(t.style.background=this.options.backgroundColor),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(t.innerHTML=this.options.text,""!==this.options.avatar){var n=document.createElement("img");n.src=this.options.avatar,n.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(n):t.insertAdjacentElement("afterbegin",n)}if(!0===this.options.close){var i=document.createElement("span");i.innerHTML="&#10006;",i.className="toast-close",i.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var o=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&o>360?t.insertAdjacentElement("afterbegin",i):t.appendChild(i)}if(this.options.stopOnFocus&&this.options.duration>0){var s=this;t.addEventListener("mouseover",(function(n){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){s.removeElement(t)}),s.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var a=e("x",this.options),r=e("y",this.options),c="left"==this.options.position?a:"-"+a,l="toastify-top"==this.options.gravity?r:"-"+r;t.style.transform="translate("+c+","+l+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t=void 0===this.options.selector?document.body:document.getElementById(this.options.selector)))throw"Root element is not defined";return t.insertBefore(this.toastElement,t.firstChild),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var t,n={top:15,bottom:15},e={top:15,bottom:15},o={top:15,bottom:15},s=document.getElementsByClassName("toastify"),a=0;a<s.length;a++){t=!0===i(s[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=s[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(s[a].style[t]=o[t]+"px",o[t]+=r+15):!0===i(s[a],"toastify-left")?(s[a].style[t]=n[t]+"px",n[t]+=r+15):(s[a].style[t]=e[t]+"px",e[t]+=r+15)}return this},n.lib.init.prototype=n.lib,n},t.exports?t.exports=o():i.Toastify=o()},CARs:function(t,n,e){var i=e("LboF"),o=e("Ottc");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var s={insert:"head",singleton:!1},a=(i(o,s),o.locals?o.locals:{});t.exports=a},JPst:function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var o=(a=i,r=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(c," */")),s=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[e].concat(s).concat([o]).join("\n")}var a,r,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(o[a]=!0)}for(var r=0;r<t.length;r++){var c=[].concat(t[r]);i&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},LboF:function(t,n,e){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function r(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},i=[],o=0;o<t.length;o++){var s=t[o],c=n.base?s[0]+n.base:s[0],l=e[c]||0,d="".concat(c," ").concat(l);e[c]=l+1;var u=r(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:d,updater:v(p,n),references:1}),i.push(d)}return i}function l(t){var n=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=e.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){n.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(n);else{var a=s(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,u=(d=[],function(t,n){return d[t]=n,d.filter(Boolean).join("\n")});function p(t,n,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(n,o);else{var s=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(s,a[n]):t.appendChild(s)}}function f(t,n,e){var i=e.css,o=e.media,s=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),s&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=null,h=0;function v(t,n){var e,i,o;if(n.singleton){var s=h++;e=m||(m=l(n)),i=p.bind(null,e,s,!1),o=p.bind(null,e,s,!0)}else e=l(n),i=f.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<e.length;i++){var o=r(e[i]);a[o].references--}for(var s=c(t,n),l=0;l<e.length;l++){var d=r(e[l]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}e=s}}}},Ottc:function(t,n,e){(n=e("JPst")(!1)).push([t.i,"/*!\n * Toastify js 1.9.3\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n\n.toastify {\n    padding: 12px 20px;\n    color: #ffffff;\n    display: inline-block;\n    -webkit-box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n            box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);\n    background: linear-gradient(135deg, #73a5ff, #5477f5);\n    position: fixed;\n    opacity: 0;\n    -webkit-transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n    border-radius: 2px;\n    cursor: pointer;\n    text-decoration: none;\n    max-width: calc(50% - 20px);\n    z-index: 2147483647;\n}\n\n.toastify.on {\n    opacity: 1;\n}\n\n.toast-close {\n    opacity: 0.4;\n    padding: 0 5px;\n}\n\n.toastify-right {\n    right: 15px;\n}\n\n.toastify-left {\n    left: 15px;\n}\n\n.toastify-top {\n    top: -150px;\n}\n\n.toastify-bottom {\n    bottom: -150px;\n}\n\n.toastify-rounded {\n    border-radius: 25px;\n}\n\n.toastify-avatar {\n    width: 1.5em;\n    height: 1.5em;\n    margin: -7px 5px;\n    border-radius: 2px;\n}\n\n.toastify-center {\n    margin-left: auto;\n    margin-right: auto;\n    left: 0;\n    right: 0;\n    max-width: -webkit-fit-content;\n    max-width: fit-content;\n    max-width: -moz-fit-content;\n}\n\n@media only screen and (max-width: 360px) {\n    .toastify-right, .toastify-left {\n        margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;\n        max-width: -webkit-fit-content;\n        max-width: -moz-fit-content;\n        max-width: fit-content;\n    }\n}\n",""]),t.exports=n},ch6i:function(t,n,e){},e6Wu:function(t,n,e){"use strict";e.r(n);e("ch6i");function i(t,n){const e=JSON.stringify(n);localStorage.setItem(t,e)}function o(t){const n=localStorage.getItem(t);return JSON.parse(n)}const s=document.querySelector("#login"),a=document.getElementById("myfile"),r=document.querySelector(".login__file");function c(t){const{value:n}=t.target;if(0!==n.length){{const t=n.replace(/^.*\\/g,"");r.innerHTML=t}if(this.files&&this.files[0]){var e=new FileReader;e.addEventListener("load",(function(){i("image",e.result)})),e.readAsDataURL(this.files[0])}}}let l;var d=e("4w6A"),u=e.n(d);e("CARs");document.querySelector("#LOGIN")&&(s.addEventListener("submit",(function(t){t.preventDefault();const{username:n}=t.currentTarget.elements,e=o("image");""!==n.value&&e?(i("username",n.value),document.location.replace("/chat/dist/chat.html")):alert("Cannot log in: Choose username or image")})),a.addEventListener("change",c)),function(){if(!document.querySelector("#CHAT-PAGE"))return;o("username")||(alert("You need to login"),document.location.replace("/chat/dist/login.html"));const t=document.querySelector("#form-chat"),n=document.querySelector("#input"),e=document.querySelector(".textarea"),i=document.querySelector(".form-chat__button");let s=o("username"),a=o("image");t.addEventListener("submit",(async function(t){t.preventDefault();let o=n.value;if(""===o)return void n.classList.add("input-error");n.classList.remove("input-error");i.innerHTML='\n<div class="sk-circle">\n  <div class="sk-circle1 sk-child"></div>\n  <div class="sk-circle2 sk-child"></div>\n  <div class="sk-circle3 sk-child"></div>\n  <div class="sk-circle4 sk-child"></div>\n  <div class="sk-circle5 sk-child"></div>\n  <div class="sk-circle6 sk-child"></div>\n  <div class="sk-circle7 sk-child"></div>\n  <div class="sk-circle8 sk-child"></div>\n  <div class="sk-circle9 sk-child"></div>\n  <div class="sk-circle10 sk-child"></div>\n  <div class="sk-circle11 sk-child"></div>\n  <div class="sk-circle12 sk-child"></div>\n</div>\n',ws.onmessage=({data:t})=>{const{message:n,cords:i,name:o,image:s,mine:a}=JSON.parse(t),r=function(t,n,e,i){const o=document.createElement("div"),s=document.createElement("div"),a=document.createElement("span"),r=document.createElement("span"),c=document.createElement("div"),l=document.createElement("img"),d=document.createElement("div");return l.src=i,a.append(t),r.append(n),c.append(e),d.append(a,r),s.append(d,c),o.classList.add("incoming"),l.classList.add("incoming__img"),d.classList.add("incoming__info"),s.classList.add("incoming__wrapper"),a.classList.add("incoming__time"),r.classList.add("incoming__name"),c.classList.add("incoming__message"),o.append(l,s),o}(function(){const t=(new Date).getHours();let n=(new Date).getMinutes();return n<10?`${t}:0${n}`:`${t}:${n}`}(),o,n,s);var c;a?r.classList.add("incoming--mine"):r.classList.add("incoming--guest"),e.prepend(r),c=i,new google.maps.Marker({position:c,map:l}),l.setZoom(10),l.setCenter(c)},async function(){const t=await new Promise(t=>{navigator.geolocation.getCurrentPosition(({coords:n})=>t(n))});return{lat:t.latitude,lng:t.longitude}}().then(t=>{ws.send(JSON.stringify({cords:t,message:o,name:s,image:a,mine:!0})),i.innerHTML="Send"}),n.value=""})),window.onload=function(){l=new google.maps.Map(document.getElementById("map"),{zoom:1,center:{lat:-25.363,lng:131.044}})},new Promise((t,n)=>{new WebSocket("wss://venify.herokuapp.com/chat").onerror=t=>{n("Failed connect to chat")}}).catch(t=>{u()({text:t,backgroundColor:"red"}).showToast()})}()}},[["e6Wu",1]]]);
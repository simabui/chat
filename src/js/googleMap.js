"use strict";

//render map
let map;
export function mapInit() {
  window.onload = function() {
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 1,
      center: { lat: -25.363, lng: 131.044 }
    });
  };
}

export function markerInit(coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: map
  });

  map.setZoom(10);
  map.setCenter(coords);
}

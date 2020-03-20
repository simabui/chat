"use strict";

export async function getGeoLocation() {
  const coords = await new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(({ coords }) => resolve(coords));
  });

  return {
    lat: coords.latitude,
    lng: coords.longitude
  };
}

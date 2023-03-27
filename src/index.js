const stores = [
  { name: "Store 1", lat: 51.505, lng: -0.09 },
  { name: "Store 2", lat: 51.515, lng: -0.08 },
  { name: "Store 3", lat: 51.425, lng: -0.07 },
];

navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);

  const map = L.map("map").setView([latitude, longitude], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  stores.forEach((store) => {
    L.marker([store.lat, store.lng])
      .addTo(map)
      .bindPopup(`${store.name}<br>`)
      .openPopup();
  });
});

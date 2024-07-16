//46.8182 N, 8.2275 E -> 46.8182, 8.2275
let map = L.map("map", {
  center: [46.8182, 8.2275],
  zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//switzerland hotel: coordinates: 46.204391 N, 6.143158 E -> 46.204391, 6.143158 
L.circle([46.8182, 8.2275]), {
        fillcolor: "teal",
        color: 'black',
        radious: 1000
  }).add(map);

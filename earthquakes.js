let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson";

d3.json(url).then(
  function(data)
  {
    console.log(data);

    let map = L.map("map", (
      center: [17.03, -95.71],
      zoom: 5
  });

var USGS_USImagery = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
}).addTo(map);
  }
);

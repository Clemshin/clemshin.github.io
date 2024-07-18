let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson";

d3.json(url).then(
  function(data)
  {
    console.log(data);
  }
);

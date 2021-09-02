// CREATE BASE LAYERS
var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "satellite-v9",
  accessToken: API_KEY
});

var grayscale = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "outdoors-v11",
  accessToken: API_KEY
});

// Create a baseMaps object
var baseMaps = {
  "Satellite": satellite,
	"Grayscale": grayscale,
	"Outdoors": outdoors
};

// Initialize all of the LayerGroups we'll be using
var layers = {
  TECTONIC_LINE: new L.LayerGroup(),
  EARTHQUAKES: new L.LayerGroup()
};

// Define a map object
var myMap = L.map("map", {
	center: [23.6978, 120.9605],
	zoom: 4,
  layers: [
		layers.TECTONIC_LINE,
		layers.EARTHQUAKES
	]
});

// Add satellite layer to the map
satellite.addTo(myMap);

// Create an overlay object to add to the layer control
var overlayMaps = {
	"Fault Lines": layers.TECTONIC_LINE,
  "Earthquakes": layers.EARTHQUAKES
};

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

// Store our API endpoints
var tectonicUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";
var earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// Perform a call to the tectonic endpoint
d3.json(tectonicUrl).then(function(infoTec) {

	// Grab the features tectonic data
	var tecFeatures = infoTec.features;

	for (var i = 0; i < tecFeatures.length; i++) {
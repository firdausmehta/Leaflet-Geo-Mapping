# Background
The main objective is to create a map using Leaflet, that plots all of the earthquakes from the provided dataset based on their longitude and latitude. The features added were: 

* Data markers that reflect the magnitude of the earthquake in their size and color. 

* Popups that provide additional information about the earthquake when a marker is clicked

* A legend that porivdes context for the map data

* Plot a second data set on the map

* Add a number of base maps to choose from as well as separate out the two different data sets into overlays that can be turned on and off independently.

* Add layer controls to the map

![2-BasicMap](https://user-images.githubusercontent.com/80393628/132093920-c79b1466-7068-4d3b-a508-15a5d7f16878.png)

![5-Advanced](https://user-images.githubusercontent.com/80393628/132093933-88cce144-e1c0-4454-ad5e-df9ee29d0fc9.png)

# Data 

The data used in this challenge comes from two sources:

* [The United States Geological Survey](https://earthquake.usgs.gov/) provides earthquake data in a number of different formats, updated every 5 minutes. The dataset used to visualize the maps in this challenge was pulled from the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page, more specifically, 'All Earthquakes from the Past 7 Days'

* [Data on World Tectonic Plates and Boundaries](https://github.com/fraxen/tectonicplates) presents tectonic plates and their boundaires, and in addition orogens and information about the boundaries. This was used to identify a relationship between tectonic plates and seismic activity.

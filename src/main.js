import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';


const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

var geojsonFeature = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"nom":"test1","adresse":"15 rue du oui"},"geometry":{"type":"Point","coordinates":[2.087421,47.420263]}},{"type":"Feature","properties":{"nom":"ahah","adresse":"eheh"},"geometry":{"type":"Point","coordinates":[2.429829,47.735524]}},{"type":"Feature","properties":{"nom":"uhuh","adresse":"nono"},"geometry":{"type":"Point","coordinates":[2.470215,48.527131]}},{"type":"Feature","properties":{"nom":"a","adresse":"b"},"geometry":{"type":"Point","coordinates":[2.37497,48.850556]}},{"type":"Feature","properties":{"nom":"c","adresse":"d"},"geometry":{"type":"Point","coordinates":[2.388589,48.844714]}},{"type":"Feature","properties":{"nom":"e","adresse":"f"},"geometry":{"type":"Point","coordinates":[2.388993,48.849229]}},{"type":"Feature","properties":{"nom":"g","adresse":"h"},"geometry":{"type":"Point","coordinates":[2.40695,48.851287]}}]}

var map = L.map('map')
        .setView([47.0096, 2.6053], 6)
        .addLayer(
          L.tileLayer(
            `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${token}`,
            {
              maxZoom: 19,
              attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="https://www.mapbox.com/about/maps/">Mapbox</a> <strong><a href="https://labs.mapbox.com/contribute/" target="_blank">Improve this map</a></strong>'
            }
          )
        );

// GeoJSON
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var clusters = L.markerClusterGroup();
const markers = L.geoJSON(geojsonFeature, 
  {
  pointToLayer: function (feature, latlng) 
  {
    return L.circleMarker(latlng, geojsonMarkerOptions)
      .bindPopup(
        feature.properties.nom + "<br>" + feature.properties.adresse
      );
  }
});

markers.eachLayer(function (layer) {
  clusters.addLayer(layer);
});

//Popup 

clusters.addLayer(markers);
map.addLayer(clusters);  
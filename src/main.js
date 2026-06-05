import L from 'leaflet';


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

//Marker
var marker = L.marker([47.0096, 2.6053]).addTo(map);
// GeoJSON
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(geojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }}).bindPopup(function (layer) {
    return layer.feature.properties.nom + "<br>" + layer.feature.properties.adresse;
}).addTo(map);  b
//Popup 
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
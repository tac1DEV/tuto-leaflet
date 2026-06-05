import L from 'leaflet';


const token = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

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

//Popup 
marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
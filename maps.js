// import { MarkerClusterer } from "@googlemaps/markerclusterer"; 

function initMap() {
    var map = new
        google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: {
                lat: 46.619261,
                lng: -33.134766
            }
        });

    var labels = "ABCDEFGHIJKLMNOPQRSTUXYZ";

    var locations = [
        { lat: 40.785091, lng: -73.968285 },
        { lat: 41.084045, lng: -73.874245 },
        { lat: 40.754932, lng: -73.984016 }

    ];


    //map method, a built in function in js
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    const MarkerClusterer = new MarkerClusterer({ markers, map });
}

// var marker = new google.maps.Marker({
//     position: { lat: 40.785091, lng: -73.968285 },
//     map: map
// });

// }

initMap();
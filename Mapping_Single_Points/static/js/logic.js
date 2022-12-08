// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// alternative option
// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

//  Add a marker to the map for Los Angeles, California.
// var point1 = [34.0522, -118.2437];
// L.circle(point1, {color: 'yellow', radius: 300}).addTo(map);

L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: 'black',
    fillColor: 'yellow'
}).addTo(map);

// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     // color: yellow
//  }).addTo(map);


//  // create a red polygon from an array of LatLng points
// var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];

// var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);

// // zoom the map to the polygon
// map.fitBounds(polygon.getBounds());

// define rectangle geographical bounds
// var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];

// // create an orange rectangle
// L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);

// // zoom the map to the rectangle bounds
// map.fitBounds(bounds);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
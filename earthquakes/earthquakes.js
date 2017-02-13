/* Copyright 2017 Dave Machado */

var map;
var points = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 3,
	  center: {lat: 40.371659, lng: -97.734375},
	  mapTypeId: 'terrain'
	});

	$.getJSON('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson', function(data) {
	  for (var i = 0; i < data.metadata.count; i++) {
		var newDate = new Date();
		newDate.setTime(data.features[i].properties.time);
		dateString = newDate.toLocaleString();
		obj = {
		  "mag": data.features[i].properties.mag,
		  "place": data.features[i].properties.place,
		  "time": data.features[i].properties.time,
		  "date": dateString,
		  "description": data.features[i].properties.title,
		  "log": data.features[i].geometry.coordinates[0],
		  "lat": data.features[i].geometry.coordinates[1],
	    };
	    points.push(obj);
		console.log(obj.date);
	  }
	  console.log(points);
	  createPoints();
	});
	
	map.data.setStyle(function(feature) {
	  var magnitude = feature.getProperty('mag');
	  return {
		icon: getCircle(magnitude)
	  };
	});
}

function createPoints() {
	for (var i = 0; i < points.length; i++) {
	  var latLng = new google.maps.LatLng(points[i].lat, points[i].log);
	  var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		label: (i+1).toString(),
		desc: points[i].description,
		date: points[i].date
	  });
	  google.maps.event.addListener(marker, "click", function (event) {
	    alert(this.date + "\n" + this.desc);
      });
	}
}

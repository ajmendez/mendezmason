function setMarkers(map, locations, markerpic) {
    // Add markers to the map
    var image = {
            url: markerpic,
            // This marker is 42 pixels wide by 68 pixels tall.
            size: new google.maps.Size(61,64),
            // The origin for this image is 0,0.
            //origin: new google.maps.Point(0,0),
            origin: null,
            // The anchor for this image is the base of the pin at 20,42.
            //anchor: new google.maps.Point(20, 42)
            anchor: null
    };

    for (var i = 0; i < locations.length; i++) {
            var place = locations[i];
            console.log(place[1], place[2]);
            var myLatLng = new google.maps.LatLng(place[1], place[2]);
            var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    icon: image,
                    title: place[0],
                    zIndex: place[3],
                    animation: google.maps.Animation.DROP
            });
    }
}


function initialize() {
    // Create an array of styles.
    var styles = [
        {"stylers": [{ "saturation": -100 },
                     { "gamma": 1 }],
         },
         {"featureType": "water",
          "stylers": [{ "lightness": -24 }],
         }
    ];
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
    var mapOptions = {
        scrollwheel: false,
        zoom: 10,
        center:new google.maps.LatLng(30.332184, -81.655651),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    
    var weddingplaces = [
        ['Wedding', 30.157420, -81.668836, 42],
        ['Airport', 30.494071, -81.687937, 40]
    ];
    setMarkers(map, weddingplaces,'img/mapmarker.png' );
}




google.maps.event.addDomListener(window, 'load', initialize);


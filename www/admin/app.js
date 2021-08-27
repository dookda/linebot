let map;
var directionsService;
var directionsRenderer;

function initMap() {
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 18.799770720082364, lng: 98.97139027738346 },
        zoom: 8,
    });

    directionsRenderer.setMap(map);

    map.addListener("click", (e) => {
        // console.log();
        let a = e.latLng.toJSON()
        marker = new google.maps.Marker({
            position: a,
            map: map
        })

        // calcRoute(a);
    })
}

let endPoint;
function chkList() {
    let name = localStorage.getItem('name');
    let lat = localStorage.getItem('lat');
    let lng = localStorage.getItem('lng');

    $("#list").val(`${name} (${lat}, ${lng})`)
    endPoint = new google.maps.LatLng(lat, lng)
    // calcRoute(endPoint)
}

let marker;
function calcRoute() {
    var start = new google.maps.LatLng(18.796164912103464, 98.99381316034643);
    var end = endPoint;

    var request = {
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    };
    directionsService.route(request, function (result, status) {
        console.log(result, status);

        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        }
    });
}
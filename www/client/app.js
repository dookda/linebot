let map;
let marker;
function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 18.799770720082364, lng: 98.97139027738346 },
        zoom: 8,
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(r => {
            // console.log(r);
            let lat = r.coords.latitude;
            let lng = r.coords.longitude;
            $("#lat").val(lat);
            $("#lng").val(lng);
            // console.log(lat, lng);
            new google.maps.Marker({
                position: new google.maps.LatLng({ lat: lat, lng: lng }),
                map: map
            })
        });
    }

}

function sendData() {
    let name = $("#name").val();
    let lat = $("#lat").val();
    let lng = $("#lng").val();

    localStorage.setItem('name', name);
    localStorage.setItem('lat', lat);
    localStorage.setItem('lng', lng);

    console.log(name, lat, lng)
    alert("ส่งข้อมูลแล้ว")
}


console.log("Checking out the console, huh? That's cool.")

google.maps.event.addDomListener(window, "load", function() {
    var map = new google.maps.Map(document.getElementById("map"), {
        "center": new google.maps.LatLng(35.035851, -85.305721),
        "mapTypeId": google.maps.MapTypeId.ROADMAP,
        "scrollwheel": false,
        "zoom": 16,
    })
    var marker = new google.maps.Marker({
        "position": new google.maps.LatLng(35.035851, -85.305721),
        "map": map,
    })
})


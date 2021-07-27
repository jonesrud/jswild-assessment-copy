// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

function onGeolocationSuccess(data) {
    console.log(data)
}

function onGeolocationError(){
    const fallbackLocation = {latitude: 42.1896358, longitude: -83.3119488 }
    console.log("Cannot find geoposition")
}

navigator.geolocation.getCurrentPosition(
    function(coordinates){console.log (coordinates)},

)
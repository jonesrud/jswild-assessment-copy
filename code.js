// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

// fetchFlickrData(location) {
//     let url = generateAPIUrl(location);
//     console.log(url)
// }

// function onGeolocationSuccess(data) {
//     console.log(data)
//     // fetchFlickrData(location)
// }

// function onGeolocationError(){
//     const fallbackLocation = {latitude: 42.1896358, longitude: -83.3119488 }
//     console.log("Cannot find geoposition")
//     // fetchFlickrData(fallbackLocation)
// }

// navigator.geolocation.getCurrentPosition(
//     function(coordinates){console.log (coordinates)},

// )

// const fallbackLocation = { latitude: 42.1896358, longitude: -83.3119488}
// let photosArray = []
// let currentPhotoIndex = 0

// function assembleImageSourceURL (photoObj) {
//     return `https://farm${photoObj.farm}.staticflickr.com/` +
//         `${photoObj.server}/` +
//         `${photoObj.id}_${photoObj.secret}.jpg`;
// };

// function showPhotos (data) {
// 	console.log(data)
// 	photosArray = data.photos.photo

// 	// Look at the first photo and turn it into an <img src=___> tag
// 	console.log(assembleImageSourceURL(photosArray[currentPhotoIndex]))
// 	// Append the image tag to the page
// }

// function processResponse (response) {
// 	let responsePromise = response.json()
// 	responsePromise.then(showPhotos)
// }

// function requestPhotos (location) {
// 	console.log("Requesting photos near " + location.latitude + ", " + location.longitude)

// 	let myApiKey = "97000000000000000000000000000543"
// 	let url = 'https://shrouded-mountain-15003.herokuapp.com/https://api.flickr.com/services/rest/?api_key=' + myApiKey + '&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat='+location.latitude +'&lon='+ location.longitude +'&text=car'

// 	let fetchPromise = fetch(url)
// 	fetchPromise.then(processResponse)
// }

// function useCurrentLocation (pos) {
// 	console.log("Using actual location")
// 	console.log(pos)
// 	requestPhotos(pos.coords)
// }

// function useFallbackLocation () {
// 	console.log("Using fallback location")
// 	requestPhotos(fallbackLocation)
// }

// let options = {
// 	enableHighAccuracy: true,
// 	maximumAge: 0
// }

const fallbackLocation = { latitude: 42.1896358, longitude: -83.3119488 };
let arrayOfPhotos = []
let currentPhoto = 0

function assembleImageSourceURL (photoObj) {
    return `https://farm${photoObj.farm}.staticflickr.com/` +
        `${photoObj.server}/` +
        `${photoObj.id}_${photoObj.secret}.jpg`;
};

function showPhotos(data) {
  console.log(data);
  arrayOfPhotos = data.photos.photo
  
//   for (i = 0; i < arrayOfPhotos.length; i++){
//     document.createElement("img")
//     document.getElementById("photoContainer").appendChild("img")
//     img.src = `https://live.staticflickr.com/{seridver-}/{id}_{secret}.jpg`


//   }

  console.log(assembleImageSourceURL(arrayOfPhotos[0]))
}

function processResponse(response) {
  let responsePromise = response.json();
  responsePromise.then(showPhotos);
}

function requestPhotos(location) {
  console.log(
    "Requesting photos near " + location.latitude + ", " + location.longitude
  );

  let myApiKey = "b5f3f99355af7b653a6ee4cc8b4d7434";
  let url =
    "https://shrouded-mountain-15003.herokuapp.com/https://api.flickr.com/services/rest/?api_key=" +
    myApiKey +
    "&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=" +
    location.latitude +
    "&lon=" +
    location.longitude +
    "&text=flower";

  let fetchPromise = fetch(url);
  fetchPromise.then(processResponse);
}

function useCurrentLocation(position) {
  console.log(position);
  console.log("Using current location");
  requestPhotos(position.coords);
}

function useFallbackLocation() {
  console.log("Using fallback location");
  requestPhotos(position.coords);
}

navigator.geolocation.getCurrentPosition(
  useCurrentLocation,
  useFallbackLocation
);

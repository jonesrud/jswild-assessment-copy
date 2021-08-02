// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

const fallbackLocation = { latitude: 42.331429, longitude: -83.045753 };
let arrayOfPhotos = [];
let currentPhotoIndex = 0;

document.getElementById("next").style.background = "orchid";

function assembleImageSourceURL(photoObj) {
  return (
    `https://farm${photoObj.farm}.staticflickr.com/` +
    `${photoObj.server}/` +
    `${photoObj.id}_${photoObj.secret}.jpg`
  );
}

function showPhotos(data) {
  arrayOfPhotos = data.photos.photo;
  console.log(arrayOfPhotos);

  let currentPhoto = arrayOfPhotos[0];
  console.log(currentPhoto);
  let img = document.createElement("img");
  // img.src = assembleImageSourceURL(currentPhoto)

  document
    .getElementById("next")
    .addEventListener("click", (displayNextPhoto) => {
      currentPhotoIndex += 1;
      if (arrayOfPhotos[currentPhotoIndex]) {
        img.src = assembleImageSourceURL(arrayOfPhotos[currentPhotoIndex]);
      } else {
        currentPhotoIndex = 0;
        img.src = assembleImageSourceURL(arrayOfPhotos[currentPhotoIndex]);
      }
    });

  if (arrayOfPhotos[currentPhotoIndex]) {
    img.src = assembleImageSourceURL(arrayOfPhotos[currentPhotoIndex]);
  } else {
    currentPhotoIndex = 0;
    img.src = assembleImageSourceURL(arrayOfPhotos[currentPhotoIndex]);
  }

  document.getElementById("photoContainer").append(img);

  console.log(assembleImageSourceURL(arrayOfPhotos[0]));
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

"use strict";

var clickedImage;
var sourceType;

function captureImage() {
  navigator.camera.getPicture(onSuccess, onFail, {
    quality:60,
    allowEdit:true, // ignored by Android
    destinationType:Camera.DestinationType.DATA_URL, // base64
    encodingType:Camera.EncodingType.JPEG,
    sourceType:sourceType, // camera or photoroll
    targetWidth:192, // = double size for retina
    targetHeight:192 // square, as ios seems to make square imgs
  });
}

// TODO consider removing the remove feature (because Android supports max 3 buttons.. or at least on older devices)
function removeCustomImage() {
  clickedImage.src = "img/pasfoto/3.jpg";
}

function onSuccess(imageData) {
  clickedImage.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
  if (message == "no camera available") {
    navigator.notification.alert("Er is geen geschikte camera gevonden.", {}, "Probleempje..", "Sluiten");
  }
}

function cameraIconClicked(theElement) {
  clickedImage = theElement;
  // if there is already a custom image, show a different confirmbox
  var hasCustomImage = clickedImage.src.indexOf(";base64,") > -1;
  if (hasCustomImage) {
    navigator.notification.confirm(
        'Vervang of verwijder de foto.', // message
        onConfirmExisting, // callback to invoke with index of button pressed
        'Profielfoto', // title
        'Foto maken,Foto kiezen,Foto verwijderen,Annuleren' // buttonLabels
    );
  } else {
    navigator.notification.confirm(
        'U kunt de foto later altijd veranderen of verwijderen.', // message
        onConfirmNew, // callback to invoke with index of button pressed
        'Profielfoto', // title
        'Foto maken,Foto kiezen,Annuleren'  // buttonLabels
    );
  }
}

function onConfirmExisting(buttonIndex) {
  if (buttonIndex == 1) {    // index starts at 1
    sourceType = Camera.PictureSourceType.CAMERA;
    captureImage();
  } else if (buttonIndex == 2) {
    sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
    captureImage();
  } else if (buttonIndex == 3) {
    removeCustomImage();
  } else {
    // cancelled
  }
}

function onConfirmNew(buttonIndex) {
  if (buttonIndex == 1) {    // index starts at 1
    sourceType = Camera.PictureSourceType.CAMERA;
    captureImage();
  } else if (buttonIndex == 2) {
    sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
    captureImage();
  } else {
    // cancelled
  }
}
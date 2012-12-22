// generic catch for errors
window.onerror = function(message, file, line) {
//  alert('Error gevangen: ' + file + ':' + line + '\n' + message);
  console.log('Error gevangen: ' + file + ':' + line + '\n' + message);
};

// override some JQM defaults
$(document).bind("mobileinit", function(){
  $.extend(
      $.mobile, {
        defaultPageTransition: "slide"
      })
});

function getUrlParam(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search)) {
     return decodeURIComponent(name[1]);
   } else {
     return null;
   }
}

function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
}

function isMacBookBas() {
  return window.location.hostname == 'gametvbas';
}

function isServerStubMode() {
  return window.location.hostname == 'gametvbasstub'; // Bas stub mode
}


function getServiceURL(servicePath) {
  // on a device, connect to the testserver, otherwise to the dev machine
  if (isServerStubMode()) {
    return "serverstub" + servicePath + ".json";
  } else {
    if (isAndroid() || isIOS()) {
      return "http://www.thumbrater.com:9007" + servicePath; // TODO 9008 after deploy at mac server
    } else if (isMacBookBas()) {
      return "http://localhost:9006" + servicePath;
    } else {
      return "http://www.thumbrater.com:9007" + servicePath;
    }
  }
}
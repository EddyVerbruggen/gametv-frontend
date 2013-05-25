"use strict";

// generic catch for errors
window.onerror = function(message, file, line) {
//  alert('Error gevangen: ' + file + ':' + line + '\n' + message);
  console.log('Error gevangen: ' + file + ':' + line + '\n' + message);
};

function isFireFoxOS() {
  return !isAndroid() && navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}

function isAndroid() {
  return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}

function isIOS() {
  return navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
}

function isMobileWithPhonegap() {
  return isAndroid() || isIOS();
}

function isYouTube(url) {
  return url.indexOf("youtube") > -1;
}

function getDateString(javaDateString) {
  var date = new Date(javaDateString);
  var d = date.getDate();
  var m = date.getMonth()+1;
  var month = eval("month_" + m); // NOTE: this depends on localised js properties like 'month_<nr>'
  var y = date.getFullYear();
  return d + ' ' + month + ' ' + y;
}

function getServiceURL(servicePath) {
  if (true || isAndroid() || isIOS() || isFireFoxOS()) {
    return "http://www.thumbrater.com:9008" + servicePath; // Mac Server
  } else {
    return "http://127.0.0.1:9007" + servicePath;
  }
}

function redirect(where) {
  window.location = where;
}

// TODO correct links for this app
function redirectToAppStore() {
  if (isAndroid()) {
    redirect("https://play.google.com/store/apps/details?id=nl.x_services.gametv");
  } else if (isIOS()) {
//    redirect("itms://itunes.apple.com/nl/app/triodos-bankieren/id566268289");
  } else {
    alert("Voor deze browser hebben we helaas (nog) geen app.");
  }
}

function var_dump(object) {
  for (var member in object) {
    alert(member);
  }
}
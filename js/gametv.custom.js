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
  return document.location.protocol == "file:";
}

function isYouTube(url) {
  return url.indexOf("youtube") > -1;
}

function setPushRegistrationID(regid) {
  localStorage.setItem("regid", regid);
}

function getPushRegistrationID() {
  return localStorage.getItem("regid");
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
  return getEndpoint() + servicePath;
}

function getEndpoint() {
  if (true) { // only set to false for local debugging
    return "http://www.thumbrater.com:9008"; // Mac Server
  } else {
    return "http://127.0.0.1:9007";
  }
}

function localStorageObjectContainsID(localStorageObject, id) {
  var storedObject = localStorage.getItem(localStorageObject);
  if (storedObject == null) {
    return true;
  } else {
    return $.inArray(id, JSON.parse(storedObject)) == -1;
  }
}

function getNotification(name) {
  if (hasSeenNotification(name)) {
    return '';
  } else {
    return '<div class="notificationItem" id="notification_'+name+'">' + eval('notification_item_'+name) + '<br/><a href="#" onclick="hideNotification(\''+name+'\')">'+notification_hide+'</a></div>';
  }
}

function hideNotification(name) {
  $("#notification_"+name).hide();
  var notificationsSeen = localStorage.getItem("notificationsSeen");
  if (notificationsSeen == null) {
    notificationsSeen = [];
  } else {
    notificationsSeen = JSON.parse(notificationsSeen);
  }
  notificationsSeen.push(name);
  localStorage.setItem("notificationsSeen", JSON.stringify(notificationsSeen));
}

function hasSeenNotification(name) {
  var notificationsSeen = localStorage.getItem("notificationsSeen");
  if (notificationsSeen != null) {
    notificationsSeen = JSON.parse(notificationsSeen);
    return notificationsSeen.indexOf(name) > -1;
  }
  return false;
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
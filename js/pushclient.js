"use strict";

function PushClient(androidSenderID, receivePushRegistrationIDCallback, receiveMessageCallback) {
  window.pushClient = this;

  this._initPushNotifications = function() {
    window.pushNotification = window.plugins.pushNotification;
    if (isAndroid()) {
      pushNotification.register(pushClient.successHandler, pushClient.errorHandler, {"senderID": androidSenderID, "ecb": "pushClient.onNotificationGCM"});
    } else if (isIOS()) {
      pushNotification.register(pushClient.apnTokenHandler, pushClient.errorHandler, {"badge": "true", "sound": "true", "alert": "true", "ecb": "pushClient.onNotificationAPN"});
      // TODO: uncomment this line to show a count bubble on the app icon
  //        pushNotification.setApplicationIconBadgeNumber(onApplicationIconBadgeNumberSuccessCallback, 3);
    } else {
      console.log("unsupported push platform");
    }
  };

  this.onNotificationAPN = function(e) {
    if (e.badge) {
      pushNotification.setApplicationIconBadgeNumber(function(){}, e.badge);
    }
    if (e.alert) {
      receiveMessageCallback(e.alert);
    }
    if (e.sound) {
      var snd = new Media(e.sound);
      snd.play();
    }
  };

  this.onNotificationGCM = function(e) {
    switch (e.event) {
      case 'registered':
        if (e.regid.length > 0) {
          receivePushRegistrationIDCallback(e.regid);
        }
        break;

      case 'message':
        receiveMessageCallback(e.message);
        break;

      case 'error':
        alert("Push error: " + e.msg);
        break;

      default:
        pushClient.errorHandler(e.event);
        break;
    }
  };

  this.apnTokenHandler = function(result) {
    receivePushRegistrationIDCallback(result);
  };

  this.successHandler = function(result) {
//    alert('success: ' + result);
  };

  this.errorHandler = function(error) {
    // TODO don't alert when development is finished
    alert("Unknown push error: " + error);
  };

  // call this 'private' method upon class construction
  this._initPushNotifications();
}
// override some jqm defaults, need to be done before jqm is loaded
$(document).bind("mobileinit", function(){
  $.mobile.page.prototype.options.domCache = true;
  $.mobile.pushStateEnabled = false;
//  $.mobile.defaultPageTransition = isAndroid() ? "slidefade" : "slide";
//  $.mobile.defaultPageTransition = isAndroid() ? "fade" : "slide";
  $.mobile.defaultPageTransition = "slide";
  $.event.special.swipe.horizontalDistanceThreshold = 80; // default is 30, but swipe is triggered too often for my taste
});
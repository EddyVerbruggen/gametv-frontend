// override some jqm defaults, need to be done before jqm is loaded
$(document).bind("mobileinit", function(){
  $.mobile.page.prototype.options.domCache = true;
  $.mobile.pushStateEnabled = false;
//  $.mobile.defaultPageTransition = isAndroid() ? "none" : "slide";
  $.mobile.defaultPageTransition = "slide";
//  $.event.special.swipe.horizontalDistanceThreshold = 120; // default is 30, but swipe is triggered too often for my taste
//  $.event.special.swipe.verticalDistanceThreshold = 100; // default is 30, but swipe is triggered too often for my taste
  // remove any clicked states in header buttons
  $.mobile.activeBtnClass = "unused";
});
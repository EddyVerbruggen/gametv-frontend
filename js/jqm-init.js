// override some jqm defaults, need to be done before jqm is loaded
$(document).bind("mobileinit", function(){
  $.mobile.page.prototype.options.domCache = true;
  $.mobile.pushStateEnabled = false;
//  $.mobile.defaultPageTransition = isAndroid() ? "slidefade" : "slide";
  $.mobile.defaultPageTransition = isAndroid() ? "fade" : "slide";
});
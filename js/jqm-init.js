// override some jqm defaults, need to be done before jqm is loaded
$(document).bind("mobileinit", function(){
  $.mobile.page.prototype.options.domCache = true;
//  $.mobile.pushStateEnabled = false;
//  $.mobile.defaultPageTransition = isAndroid() ? "none" : "slide";
  $.mobile.defaultPageTransition = "none";
//  $.event.special.swipe.horizontalDistanceThreshold = 120; // default is 30, but swipe is triggered too often for my taste
//  $.event.special.swipe.verticalDistanceThreshold = 100; // default is 30, but swipe is triggered too often for my taste

//  $(document).ajaxStart(function() {
//    $.mobile.loading('show');
//  });

//  $(document).ajaxStop(function() {
//    $.mobile.loading('hide');
//  });

  // remove any clicked states in header buttons (using 'on', so the function will attach to anything that's added to the DOM)
  $(document).on("click", ".ui-header .ui-btn", function() {
    $(this).removeClass("ui-btn-active");
  });

});
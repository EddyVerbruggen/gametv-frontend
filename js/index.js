$(document).ready(function() {
  $("#filterFavourites, #filterCompany, #filterLinkedIn").click(function() {
    filterNetworkUpdates();
  });
});

function filterNetworkUpdates() {
  // check which filters are active
  var favouritesActive = $("#filterFavourites").attr("checked") == "checked";
  var companyActive = $("#filterCompany").attr("checked") == "checked";
  var linkedInActive = $("#filterLinkedIn").attr("checked") == "checked";

  // for each update..
  $(".networkUpdates").each(function() {
    // track a boolean for weather or not to show it (if none is active, show is true)
    var show = !favouritesActive && !companyActive && !linkedInActive;
    // inspect all icons
    $(this).find("img.nutIcon").each(function() {
      // if one of the active filters is a match, show the icon
      var networkUpdateType = $(this).attr('data-name');
      if ((favouritesActive && networkUpdateType == "favourite") ||
          (companyActive && networkUpdateType == "company") ||
          (linkedInActive && networkUpdateType == "linkedin")) {
        show = true;
      }
    });
    // deal with the calculated show value
    if (show) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
}

function makeStatusEditable() {
  $('#indexHeader #status').attr('contenteditable', true);
  $('#indexHeader #status').css({'border':'1px dotted #666'});
  $('#indexHeader #editButton').hide();
  $('#indexHeader #saveButton').show();
}

function saveStatus() {
  $('#indexHeader #status').attr('contenteditable', false);
  $('#indexHeader #status').css({'border':'0'});
  $('#indexHeader #saveButton').hide();
  $('#indexHeader #editButton').show();
  $('#indexHeader #statusDate').append(' (TODO: refresh)');
}
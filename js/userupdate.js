function makeCommentEditable() {
  $('#suggestComment').css('opacity', 1);
  $('#suggestComment #comment').attr('contenteditable', true);
  $('#suggestComment #comment').html("");
  $('#suggestComment #comment').focus();
  $('#suggestComment #comment').css({'border': '1px dotted #666'});
  $('#suggestComment #editButton').hide();
  $('#suggestComment #saveButton').show();
}

function saveComment() {
  if ($('#suggestComment #comment').html().trim() == "") {
    $('#suggestComment #comment').html("schrijf een reactie...");
  }
  if ($('#suggestComment #comment').html() == "schrijf een reactie...") {
    $('#suggestComment').css('opacity', 0.4);
  }
  $('#suggestComment #comment').attr('contenteditable', false);
  $('#suggestComment #comment').css({'border': '0'});
  $('#suggestComment #saveButton').hide();
  $('#suggestComment #editButton').show();
//  $('#suggestComment #commentDate').append(' (TODO: refresh)');
}
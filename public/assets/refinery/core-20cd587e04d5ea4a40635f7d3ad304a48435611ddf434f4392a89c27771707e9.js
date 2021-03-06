$(document).ready(function(){
  // focus first field in an admin form.
  $('form input[type=text]:first').focus();
});

init_flash_messages = function() {
  $('#flash_container .flash').append(
    "<button id='flash_close'>Close</button>"
  );

  $('#flash_container').on('click', '#flash_close', function(e) {
    $('#flash').hide();
    e.preventDefault();
  });
  $('#flash.flash_message').prependTo('#records');
};

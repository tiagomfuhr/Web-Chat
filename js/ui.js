$(document).ready(function() {
  var sessionUser = new User(prompt('What\'s your name?'));

  $('.send_message').click(sendMessage);

  $(document).keyup(function(event) {
    if (event.which === 13 ) {
      // Enter pressed. Send message
      return sendMessage();
    } else if (event.which === 27) {
      // Escape pressed. Clear message field
      return cleanMessageInput();
    }
  });

  function sendMessage() {
    var content = $('.message_input').val();
    if (content !== "") {
      $('.messages').append('<li><b>'+ sessionUser.name + '</b>: ' + content + '</li>');
      cleanMessageInput();
    }
  }

  function cleanMessageInput() {
    $('.message_input').val('');
  }

});

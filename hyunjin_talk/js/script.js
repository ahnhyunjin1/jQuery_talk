$('#send').on('click', sendText);

function sendText() {
    var newMessage = $("#new-message").val();

    $('.chatbox').append('<div class="my-bubble bubble">뭐해 ?</div>');
}
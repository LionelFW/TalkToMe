// $('#messageForm').submit(function(e){
//     $.ajax({
//         url: '/send',
//         type:'post',
//         dataType: "json",
//         data:$('#messageForm').serialize()
//     });
//     e.preventDefault();
// });

$(function () {
    var socket = io();
    $('#messageForm').submit(function(){
    socket.emit('chat message', $('#message').val());
    $('#message').val('');
    return false;
    });
    socket.on('notification', function(msg){
        var div = document.getElementById('zone');
        div.innerHTML += msg.message;
    })
});
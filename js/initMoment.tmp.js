$(document).ready(function() {
    var time = moment().tz("UK/London").format("h:mm A");
    $("#time").html(time);
})

$(document).ready(function() {
    var time = moment().tz("Europe/London").format("h:mm A");
    $("#time").html(time);
})

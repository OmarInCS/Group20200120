

$(document).ready(function () {
    $("#box").mouseover(function () {
        $("#image").css("left", "-20px");
    });
    
    $("#box").mouseout(function () {
        $("#image").css("left", "0px");
    });
});



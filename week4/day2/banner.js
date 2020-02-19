
$(document).ready(function () {
    $(".img-box").mouseover(function () {
        $(".img-box").not(this).css("width", "22%");
        $(this).css("width", "55%");
    });
    
    $(".img-box").mouseout(function () {
        $(".img-box").css("width", "33%");
    })
})
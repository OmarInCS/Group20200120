
$(document).ready(function () {
    $(".content").hide();
    $("button").click(function(){
        // $(".content").fadeToggle();
        $(".content").slideToggle(1000);
    });

    $(".title").click(function () {
    //    $(this).next().slideToggle("slow");
        $(".content").slideUp("slow");
        $(this).next().slideDown("slow");
    });
});
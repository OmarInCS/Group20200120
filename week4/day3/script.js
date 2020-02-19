
$(document).ready(function () {
    let images = $(".img-box");
    $("#next").click(function () {
        let activeImg = $(".img-box.active");
        activeImg.animate({"left": "100%"}, "slow", function () {
            activeImg.removeClass("active");
            // activeImg.css("left", "") 
        });
        // activeImg.fadeOut("slow");
        if (activeImg.next(".img-box").length !== 0) {
            activeImg.next(".img-box").css("left", "-100%");
            activeImg.next(".img-box").addClass("active");
            // activeImg.next(".img-box").fadeIn("slow");
            activeImg.next(".img-box").animate({"left": "0px"}, "slow");

            let activeDot = $(".dot.active");
            activeDot.removeClass("active");
            activeDot.next().addClass("active");
        }
        else {
            $(".img-box").first().css("left", "-100%");
            $(".img-box").first().addClass("active");
            $(".img-box").first().animate({"left": "0px"}, "slow");
            // $(".img-box").first().fadeIn("slow");

            let activeDot = $(".dot.active");
            activeDot.removeClass("active");
            $(".dot").first().addClass("active");
        }

        
    });

    $("#prev").click(function () {
        let activeImg = $(".img-box.active");
        activeImg.fadeOut("slow");
        activeImg.removeClass("active");
        activeImg.prev().fadeIn("slow");
        activeImg.prev().addClass("active");

        let activeDot = $(".dot.active");
        activeDot.removeClass("active");
        activeDot.prev().addClass("active");
    });
});
$(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("active");
        $("#header .navi").toggleClass("active");
    });

    $(".navi a").click(function(){
        $(".hamburger").removeClass("active");
        $("#header .navi").removeClass("active");
    });

    $("#introduction .tour1 .btn").click(function(){
        $(this).hide();
        $("#introduction .tour1 .description").css({
            "height": "auto",
            "overflow": "visible"
        });
    });

    $("#introduction .tour2 .btn").click(function(){
        $(this).hide();
        $("#introduction .tour2 .description").css({
            "height": "auto",
            "overflow": "visible"
        });
    });
});
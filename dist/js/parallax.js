$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    /*
    while ($("#services").scrollTop() == 0) {
        $("#services").css("background - position - y", -(scrollTop * 0.5) + "px");
    }
    while ($("#header").scrollTop(0) == 0) {
        $("#header").css("background - position - y", -(scrollTop * 0.5) + "px");
    }
    */
    $("#header, #services, #contact").css("background-position-y", -(scrollTop * 0.5) + "px");
})
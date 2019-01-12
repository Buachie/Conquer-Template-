$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();

    $("#header, #services").css("background-position-y", -(scrollTop * 0.5) + "px");
})
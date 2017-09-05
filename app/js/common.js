/**
 * Created by maksc on 05.09.2017.
 */
$(document).ready(function(){
    $(window).scroll(function () {
        var st = $(this).scrollTop();
        $(".about").css({
            "background-position" : "0% -" + st*3 + "%"
        });
        $(".about-container").css({
            "transform" : "translate(0%, -" + st/3 + "%"
        });
    });
});

$(document).ready(function(){
    $(".list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});

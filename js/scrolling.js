$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1300, 'easeInOutQuart');
        event.preventDefault();
    });
});

$(window).on('load',function() {
    $(window).scroll(function () {
        $('.fade-in').each(function() {
            var POS = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > POS - windowHeight + windowHeight/5) {
                $(this).css("opacity","1");
            } else {
                $(this).css("opacity","0");
            }
        });
    });
});
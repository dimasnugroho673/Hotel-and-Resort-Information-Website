$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.navbar').addClass('black');
    } else {
        $('.navbar').removeClass('black');
    }
})




// parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // parallax
    $('.title h1').css({
        'transform' : 'translate(0px, '+ wScroll/10 +'%)'
    });
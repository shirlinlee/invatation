$(function() {
    fixItem();

    $(window).on('load resize', function() {
        fixItem();
    })

    $('.detail').on('click', 'img', function(e) {
        e.stopPropagation();
        var src = $(this).attr('src');
        $('.black').find('img').attr('src', src);
        $('.black').fadeIn(function() {
            $('.close').on('click', function() {
                $('.black').fadeOut();
            })
        });
    })

    $('.flip-box').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('go2');
    })
})

function fixItem() {
    var windowH = $('.flip-item').innerHeight(),
        windowW = $('.flip-item').innerWidth(),
        topH = $('.top').height(),
        footerH = $('.footer').height(),
        middleH = windowH - topH - footerH + 20,
        redW = (windowW - middleH * .523) / 2 + 2;

    $('.middle').css({ height: middleH, top: topH - 10 });
    $('.red').css({ width: redW });


}
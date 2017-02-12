$('.accordeon-button').on('click', function () {
    var id = $(this).attr('data-id');
    $('.accordeon-button').addClass('active');
    $('.accordeon-button.active').removeClass('active');
    $('.accordeon-text').addClass('active');
    $('.accordeon-text.active').removeClass('active');
    $('.accordeon-text[data-id="' + id + '"]').toggleClass('active');
});

$('.dialog-button').on('click', function () {
    var id = $(this).attr('data-id');
    $('.dialog-blok').addClass('active');
    $('.dialog-blok-image').on('click', function () {
        $('.dialog-blok.active').removeClass('active');
    })
});


$('.tabs-button').on('click', function () {
    var id = $(this).attr('data-id');
    $('.tabs-button').addClass('active');
    $('.tabs-button.active').removeClass('active');
    $('.tabs-text').addClass('active');
    $('.tabs-text.active').removeClass('active');
    $('.tabs-text[data-id="' + id + '"]').toggleClass('active');
});

//більш-менш ясно,але вистачає питань і не все працює як потрібно

$('.tooltip-blok').on('hover', function () {
    var left = $(this).offsetLeft;
    var top = $(this).offsetTop;
    $('.tooltip-hover').addClass('active').css({
        left: left + 'px',
        top: top + 30 + 'px'
    })
});
//не зрозуміло мені тултіп, треба разом ще раз спробувати
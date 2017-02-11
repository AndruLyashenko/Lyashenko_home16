$('.accordeon-button').on('click',function() {
    var id = $(this).attr('data-id');
    $('.accordeon-text.active').removeClass('active');
    $('.accordeon-text[data-id="' + id  + '"]').toggleClass('active');
});
$('.tooltip').on('hover', function() {
    var left = $(this).offsetLeft;
    var top = $(this).offsetTop;
    $('.tooltip-text').addClass('active').css({
        left: left + 'px',
        top: top + 30 + 'px'
    })
});
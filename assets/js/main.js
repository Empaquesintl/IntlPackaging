window.onload = function() {
    $('#preloader').fadeOut('fast');
};

$( document ).ready(function() {

    $('.btn-burger').on('click', function() {
        $('.menu-responsive').slideToggle('fast');
        $(this).toggleClass('close-nav');
        $('.menu-responsive').toggleClass('open');
        return false;
    });
    $('.menu-responsive a').on('click', function() {
        $('.menu-responsive').slideToggle('fast');
        $('.btn-burger').toggleClass('close-nav');
        $('.menu-responsive').toggleClass('open');
       
    });

});


//  Tabs

$('.tabs-cont .tabs-head .tab').on('click', function() {
    var element = $(this).index();
    var tab = $(this).parent('.tabs-head')
    var cont = $(this).parent('.tabs-head').parent('.tabs-cont').children('.tabs-inf')

    $(tab).children('.tab').removeClass('active');
    $(this).addClass('active');

    $(cont).children('.box-inf').removeClass('active');
    $(cont).children('.box-inf._'+element+'').addClass('active');
});

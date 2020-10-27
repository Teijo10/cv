//Fixed header menu on scroll - start
$(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
        $('.header-blk').addClass('fixed-header', 200);
    } else {
        $('.header-blk').removeClass('fixed-header', 200);
    }
});

//Fixed header menu on scroll - end
//Smooth scroll to the section on click - start
function scrollNav() {
    $('.header-blk__nav a').click(function () {
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
        }, 200);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();
//Smooth scroll to the section on click - end
$('.portfolio-blk__icons button').on('click', function () {
    $('button').removeClass('active');
    $(this).addClass('active');
})
$("#web-dev").on('click', function () {
    //$(this).hide();
    $('.other-art').hide(2000);
    $(".web-design").hide(2000);
    $(".web-dev").show(2000);
});
$("#web-des").on('click', function () {
    //$(this).hide();
    $('.other-art').hide(2000);
    $(".web-dev").hide(2000);
    $(".web-design").show(2000);
});
$("#other-art").on('click', function () {
    //$(this).hide();
    $('.other-art').show(2000);
    $(".web-dev").hide(2000);
    $(".web-design").hide(2000);
});

//var card = document.querySelector('.experience-blk__company');
//card.addEventListener('click', function () {
//    card.classList.toggle('is-flipped');
//});
$('.experience-blk__content').on('click', '.experience-blk__company', function () {
    $(this).toggleClass('is-flipped');
});


$('.card').click(function () {
    $(this).toggleClass('flipped');
});

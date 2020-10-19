//Fixed header menu on scroll - start
//$(window).scroll(function () {
//    if ($(window).scrollTop() >= 200) {
//        $('.header-blk').addClass('fixed-header', 200);
//    } else {
//        $('.header-blk').removeClass('fixed-header', 200);
//    }
//});
//Fixed header menu on scroll - end
//Smooth scroll to the section on click - start
function scrollNav() {
    $('.header-blk__nav a').click(function () {
        //Animate
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 110
        }, 200);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();
//Smooth scroll to the section on click - end

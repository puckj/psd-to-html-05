$(document).ready(() => {
    //owl-carousel slideshow
    $('.owl-carousel').owlCarousel({
        items: 5,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            1200: {
                margin: 150
            },
            1000: {
                margin: 120
            },
            700: {
                margin: 90
            },
            300: {
                items: 3,
                margin: 60
            }
        }
    });
    //Change search icon&input
    $('.search-icon').click(() => {
        $('.search-icon').toggleClass('change-icon');
        $('.search-input').toggleClass('change-input');
        if ($('.search-icon').hasClass('change-icon')) {
            $('#search-input').focus();
        } else {
            $('#search-input').blur();
        }
    });
    //Hamburger Menu
    $('.nav-hamburger').click(()=>{
        $('.nav-hamburger').toggleClass('change-bar');
        $('.nav-menu').toggleClass('change-menu');
    })
});



//scroll mouse
$(window).scroll(() => {
    if ($(this).scrollTop() > 400) {
        $('.nav-hamburger').removeClass("change-bar");
        $('.nav-menu').removeClass("change-menu");
        $('#search-input').blur();
    }
    if ($(this).scrollTop() > 1000) {
        $('.search-icon').removeClass("change-icon");
        $('.search-input').removeClass("change-input");
        $('#search-input').blur();
    }
})



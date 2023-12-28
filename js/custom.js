$(function () {
    $('.course_dtls_sidebar_feedback_slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left left_slide"></i>', '<i class="fas fa-long-arrow-alt-right right_slide"></i>'],
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 900,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.course_dtls_sidebar_slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 900,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.testmonial_slide_active').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
        smartSpeed: 1000,
        autoplay: true,
        mouseDrag: true,
        smartSpeed: 900,
        autoplayTimeout: 9000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.brand_slide_active').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        smartSpeed:1000,
        autoplay:true,
        mouseDrag:true,
        smartSpeed: 900,
        autoplayTimeout: 9000,
        responsive:{
            0:{
                items:1
            },
            425:{
                items:1
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1100:{
                items:5
            }
        }
    });
})
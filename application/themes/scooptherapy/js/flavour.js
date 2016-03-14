$(document).ready(function(){
	
	$('#menu-logo-wrapper').addClass('white-version');

	if(isMobile)
      $('.each-row').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
      });

    var hash = window.location.hash;    

    hash = hash.replace('_','');

    console.log(hash);

    if(hash) {
        var target_y = $(hash).offset().top - 78;
        TweenMax.to($(window), 1.2, {scrollTo:{y:target_y,autoKill: false}, ease:Quad.easeInOut});              
    }   
});
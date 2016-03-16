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

    $('.main-nav li a').on('click', function(e){
        e.preventDefault();
        var mainNav = $('.main-nav');
        // if(mainNav.hasClass('show-nav')) {
        //     mainNav.removeClass('show-nav');  
        // }
        if(mainNav.parent().hasClass('mobile-show-nav')) {
            mainNav.parent().removeClass('mobile-show-nav');
        } 

        var url = $(this).attr('href');
        var hash = url.substring(url.indexOf('#'));

        if(url.indexOf('flavour') > -1) {
            hash = hash.replace('_','');
            scrollToThis(hash);             
        }else {
            window.location.href = url;
        }        
    });

    var hash = window.location.hash;    

    hash = hash.replace('_','');

    if(hash) {
        var target_y = $(hash).offset().top - 78;
        TweenMax.to($(window), 1.2, {scrollTo:{y:target_y,autoKill: false}, ease:Quad.easeInOut});              
    }   

    function scrollToThis(currentId){

        var extraOffset;

        if(isMobile) extraOffset = 75;    
        else extraOffset = 25;

        if(currentId=='#about')
            var scrollTopPos = $(currentId).offset().top - 78;
        else
            var scrollTopPos = $(currentId).offset().top - extraOffset;         

        TweenMax.to($(window), 1.2, {
            scrollTo: { y:scrollTopPos, autoKill: false }, 
            ease:Quad.easeInOut,
            onComplete: function() {
                $(window).disablescroll("undo");
            }
        });
    }
});
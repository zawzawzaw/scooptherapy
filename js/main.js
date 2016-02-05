// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

$(document).ready(function(){   

    $('.carousel').carousel({
        pause: "false",
        interval: 8000
    });    

    var scrolled = false;
    var firstScroll = true;
    var mainContentOffset = $('#main-content').offset().top;

    function scrollToContent() {
        var scrollPos = $(window).scrollTop();        

        if(scrollPos > 0 && scrollPos <= mainContentOffset) {

            if(firstScroll==true) {
                firstScroll = false;

                var $window = $(window);

                $window.disablescroll({
                    handleScrollbar: false
                });

                var target_y = $('#content-wrapper').offset().top + 5;

                TweenMax.to($(window), 1.2, {
                    scrollTo: { y:target_y, autoKill: false }, 
                    ease:Quad.easeInOut,
                    onComplete: function() {
                        $window.disablescroll("undo");
                    }
                });
            }
        }
        if(scrollPos==0) {
            firstScroll = true;
        }
    }

    function showHideArrow()  {
        var scrollPos = $(window).scrollTop();   

        // console.log(scrollPos);
    
        if( ( scrollPos != 0 ) ) {            
            $('.scroll-to-content .arrow-big').addClass('hide');
            if(scrolled==false) {
                scrolled = true;             
            }
                
        }       
        else if( ( scrollPos === 0 ) && (scrolled == true) ) {
            scrolled = false;            
            $('.scroll-to-content .arrow-big').removeClass('hide');
        }
    }

    function addBorder() {
        var scrollPos = $(window).scrollTop();       

         if(scrollPos >= mainContentOffset){
            $('#menu-logo-wrapper').addClass('white-version');
            $('#mobile-menu-logo-wrapper').addClass('white-version');
        }else {
            $('#menu-logo-wrapper').removeClass('white-version');
            $('#mobile-menu-logo-wrapper').removeClass('white-version');
        }
    }

    $(window).on('scroll', function() {        
        showHideArrow();
        addBorder();                       
        scrollToContent();
    });

    showHideArrow();
    
    $(window).on('mousewheel', function(event) {
        // console.log(event.deltaX, event.deltaY, event.deltaFactor);
        if(event.deltaY<0) {
            // scrollToContent();
        }
    });

    ///////
    ///////
    ///////

    initialLoad = false;

    $('.scroll-to-content').on('click', function(e){
        e.preventDefault();
        var currentId = $(this).attr('href');
        var target_y = $(currentId).offset().top + 5;

        TweenMax.to($(window), 1.2, {scrollTo:{y:target_y,autoKill: false}, ease:Quad.easeInOut});
    });

    function scrollToThis(currentId){
        console.log(currentId)
        $('body').animate({
            scrollTop: $(currentId).offset().top - 25
        }, 1200);
    }

    $('.main-nav li a').on('click', function(e){
        e.preventDefault();
        $('.active-nav').removeClass('active-nav');
        $(this).addClass('active-nav')
        scrollToThis($(this).attr('href'));
    });

    ///////
    ///////
    ///////

    $(".main-nav > li").children('a').on('click', function(e){
        e.stopPropagation();        
        if($(this).hasClass('has-child')) {
            e.preventDefault();
            $('.main-nav li a').not(this).removeClass('active');
            $('.main-nav li').not($(this).parent()).removeClass('active');
            $(this).toggleClass('active');
            $(this).parent().toggleClass('active');

            if($(this).hasClass('active')) {
                $("#menu-logo-wrapper").removeClass('add-border');
            }

            $("#menu-logo-wrapper").toggleClass('add-border');
            // $('.sidebar-nav').toggleClass('open').toggleClass('fadeInLeft');
        }
    });

    $('html').click(function() {
        $('.main-nav li a').removeClass('active');
        $('.main-nav li').removeClass('active');
        $("#menu-logo-wrapper").removeClass('add-border');
    });   

    // mobile menu
    $('.toggle-menu').on('click', function(e){
        e.preventDefault();     
        $('.main-nav').toggleClass('show-nav');
    });

    // $('.sub-nav-toggle').on('click', function(e){
    //     e.preventDefault();        
    //     $(this).toggleClass('active');        
    //     $(this).next('ul.mobile-nav-child').toggleClass('open');
    //     $(this).parent('li').toggleClass('active');
    // });    

    $(".carousel").swiperight(function() {  
        $(this).carousel('prev');  
    });  
    $(".carousel").swipeleft(function() {  
        $(this).carousel('next');  
    });

    $('.scrollbar-dynamic').scrollbar();
    
});
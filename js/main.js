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

    var $first = $('.first'),
        $second = $('.second'),
        $third = $('.third'),
        firstOrgColor = $first.css('color');
        secondOrgColor = $second.css('color');
        thirdOrgColor = $third.css('color');

    (cycle = function() {
        // $first.animate({color:thirdOrgColor}, 'fast', function(){
        //     $second.animate({color:thirdOrgColor}, 'fast', function(){
        //         $third.animate({color:secondOrgColor}, 'fast').animate({color:thirdOrgColor}, 'fast', cycle);
        //     }).animate({color:secondOrgColor}, 'fast');
        // }).animate({color:firstOrgColor}, 'fast');               
    })();

    // function loop(){
    //     $('.arrow-big').css({ 'bottom': '75px', 'display': 'none', 'visibility': 'visible' });
    //     $('.arrow-big').fadeIn(200).animate({'bottom': '35px', 'visibility': 'hidden'}, 900, 'linear', function(){
    //         loop();
    //     });     
    // }
    // loop();    

    /////
    /////
    ///// 

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


                // $('#page-wrapper').animate({
                //     scrollTop: $("#content-wrapper").offset().top + 5
                // }, {
                //     duration: 1200,
                //     start: function() {
                //         // $('#page-wrapper').off('scroll');
                //     },
                //     complete: function() {
                //         // $('#page-wrapper').on('scroll');
                //     }
                // });
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
            // $('.scroll-to-content .arrow').hide();
            $('.scroll-to-content .arrow-big').addClass('hide');
            if(scrolled==false) {
                scrolled = true;             
            }
                
        }       
        else if( ( scrollPos === 0 ) && (scrolled == true) ) {
            scrolled = false;            
            // $('.scroll-to-content .arrow').show();
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


    //////
    ////// full page js


    // $('#page-wrapper').fullpage({
    //     anchors: ['page1', 'page2'],
    //     scrollBar: false,
    //     afterLoad: function(anchorLink, index){
    //         var loadedSection = $(this);

    //         //using index
    //         if(index >= 2){
    //             $.fn.fullpage.setAutoScrolling(false);
    //         }else 
    //             $.fn.fullpage.setAutoScrolling(true);

    //     }
    // });



    ///////
    ///////
    ///////

    initialLoad = false;

    $('.scroll-to-content').on('click', function(e){
        e.preventDefault();
        var currentId = $(this).attr('href');
        // $('#page-wrapper').animate({
        //     scrollTop: $(currentId).offset().top + 5
        // }, 1200);
        var target_y = $(currentId).offset().top + 5;

        TweenMax.to($(window), 1.2, {scrollTo:{y:target_y,autoKill: false}, ease:Quad.easeInOut});
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
    
    // $('#sub-nav-container').hover(function(e){
    //     $("#menu-logo-wrapper").toggleClass('extra-height');
    //     $('.sub-nav').toggleClass('active');        
    //     $('.by-categories').toggleClass('active');
    // });

    // $('ul.sub-nav li').hover(function(){
    //     $(this).find('.sub-nav-child').toggleClass('animated').toggleClass('fadeInLeft');
    // });

    // mobile menu
    $('.toggle-menu').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('hide-content');
        $('#mobile-menu-logo-wrapper').removeClass('open-search');
        $('#mobile-menu-logo-wrapper .mobile-search-box-container').removeClass('open');
        $('#mobile-menu-logo-wrapper').toggleClass('open');
        $('#mobile-menu-logo-wrapper .mobile-nav-container').toggleClass('open');
    });

    $('.sub-nav-toggle').on('click', function(e){
        e.preventDefault();        
        $(this).toggleClass('active');        
        $(this).next('ul.mobile-nav-child').toggleClass('open');
        $(this).parent('li').toggleClass('active');
    });

    $('.mobile-search').on('click', function(e){
        e.preventDefault();
        $('body').toggleClass('hide-content');
        $('#mobile-menu-logo-wrapper').removeClass('open');
        $('#mobile-menu-logo-wrapper .mobile-nav-container').removeClass('open');
        $('#mobile-menu-logo-wrapper').toggleClass('open-search');
        $('#mobile-menu-logo-wrapper .mobile-search-box-container').toggleClass('open');
    });

    $('.mobile-search-box-container .close-btn').on('click', function(e){
        e.preventDefault();
        $('.mobile-search').trigger('click');
    });


    $('.subscribe').on('click', function(e){
        e.preventDefault();

        $('.loading').show();
        $(this).hide();

        var subscribe_email = $(this).prev('input').val();

        $.post('php/subscribe.php', {
            'email' : subscribe_email
        }, function(data){
            $('p.msg').remove();
            $('.right .input').append(data);
            $('p.msg').hide().fadeIn(1000);

            $('.loading').hide();
            $('.subscribe').show();
        });
    });

    $('#subscribe_input').on('keyup', function(e){        
        if(e.keyCode == 13)
        {
            $('.subscribe').trigger("click");
        }
    });

    $(".site-search").on('click', function(e){
        e.preventDefault();       
        $('.main-nav li:not(:last-child)').hide();
        $('.main-nav li:last-child').addClass('search-active')
    });

    $('.close-search').on('click', function(e){
        e.preventDefault();       
        $('.main-nav li:not(:last-child)').show();
        $('.main-nav li:last-child').removeClass('search-active')
    });

    $(".carousel").swiperight(function() {  
        $(this).carousel('prev');  
    });  
    $(".carousel").swipeleft(function() {  
        $(this).carousel('next');  
    });  
    
});
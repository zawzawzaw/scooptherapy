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
    var mainContentOffset = $('#main-content').offset().top - 78;

    $(window).on('resize', function(){
        mainContentOffset = $('#main-content').offset().top - 78; // change if window resize
    });

    function scrollToContent() {
        var scrollPos = $(window).scrollTop();

        if(scrollPos >= 0 && scrollPos <= mainContentOffset) {

            if(firstScroll==true) {
                firstScroll = false;

                var $window = $(window);

                $window.disablescroll({
                    handleScrollbar: false
                });

                var target_y = $('#content-wrapper').offset().top - 78; // minus out the height of menu 

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

         if(scrollPos + 3 >= mainContentOffset){
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
        // scrollToContent();
    });

    showHideArrow();
    
    $(window).on('mousewheel', function(event) {
        // console.log(event.deltaX, event.deltaY, event.deltaFactor);
        if(event.deltaY<=0) {
            // console.log(event.deltaY)
            scrollToContent();
        }
    });

    ///////
    ///////
    ///////

    initialLoad = false;

    $('.scroll-to-content').on('click', function(e){
        e.preventDefault();
        var currentId = $(this).attr('href');
        var target_y = $(currentId).offset().top - 78;

        TweenMax.to($(window), 1.2, {scrollTo:{y:target_y,autoKill: false}, ease:Quad.easeInOut});
    });

    function scrollToThis(currentId){
        if(currentId=='#about')
            var scrollTopPos = $(currentId).offset().top - 78;
        else
            var scrollTopPos = $(currentId).offset().top - 25;         

        TweenMax.to($(window), 1.2, {
            scrollTo: { y:scrollTopPos, autoKill: false }, 
            ease:Quad.easeInOut,
            onComplete: function() {
                $window.disablescroll("undo");
            }
        });

        // $('body').animate({
        //     scrollTop: scrollTopPos
        // }, 1200);
    }

    $('.main-nav li a').on('click', function(e){
        e.preventDefault();
        // $('.active-nav').removeClass('active-nav');
        // $(this).addClass('active-nav')
        scrollToThis($(this).attr('href'));
    });

    ///////
    ///////
    ///////

    $('.toggle-menu').on('click', function(e){
        e.preventDefault();     
        $('.main-nav').toggleClass('show-nav');
    });

    $(".carousel").swiperight(function() {  
        $(this).carousel('prev');  
    });  
    $(".carousel").swipeleft(function() {  
        $(this).carousel('next');  
    });

    /////////

    var styles = [
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d3d3d3"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b3b3b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 1.8
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ebebeb"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a7a7a7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#efefef"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#696969"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#737373"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d6d6d6"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {},
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        }
    ];

    function setMarkerLatLng(lat, lng) {
        return new google.maps.LatLng(lat, lng);
    }

    var ScoopLatlng = setMarkerLatLng(1.3239576,103.8506361);
    var mapOptions = {
      mapTypeControlOptions: {  
          mapTypeIds: ['Styled']
      },  
      zoom: 15,
      center: ScoopLatlng,
      disableDefaultUI: true,   
      mapTypeId: 'Styled'
    };

    map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
    var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });  
    map.mapTypes.set('Styled', styledMapType);

    var marker = new google.maps.Marker({
        position: ScoopLatlng,
        map: map,
        title: 'Scoop Therapy!',
        icon: 'images/icons/map-pin.png'
    });
    
});
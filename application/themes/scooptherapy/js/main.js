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

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

$(document).ready(function(){   

    // $('.carousel').carousel({
    //     pause: "false",
    //     interval: 8000
    // });    

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

    ///////
    ///////
    ///////

    $('.toggle-menu').on('click', function(e){
        e.preventDefault();     
        $('.main-nav').toggleClass('show-nav');
        $('.main-nav').parent().toggleClass('mobile-show-nav');
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
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#0c0b0b"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f2f2f2"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#090909"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#d4e4eb"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#fef7f7"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9b7f7f"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#fef7f7"
                }
            ]
        }
    ];

    function setMarkerLatLng(lat, lng) {
        return new google.maps.LatLng(lat, lng);
    }

    var ScoopLatlng = setMarkerLatLng(1.3046433,103.8996599);
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
        icon: ThemePath+'/images/icons/map-pin.png'
    });
    
});
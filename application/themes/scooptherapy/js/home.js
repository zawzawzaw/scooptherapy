$(document).ready(function(){
    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;    

    /////// 

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

        // $('body').animate({
        //     scrollTop: scrollTopPos
        // }, 1200);
    }

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

        if(hash.indexOf('contact') > -1 || url.indexOf('flavour') > -1) {
            window.location.href = url;
            console.log('hi')
        }

        hash = hash.replace('_','');

        scrollToThis(hash);
    });

    ///////

    $('#instafeed').on('click', 'a.insta_small', function(e){
        e.preventDefault();
        $('#insta_big').attr('src', $(this).children('img').data('imgsrc'));
    });    

    ///////

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'scooptherapy',
        clientId: '7ff984bc8161403aa84f7c52facc0aa6',
        template: '<li><a href="javascript:void(0);" class="insta_small"><img data-imgsrc="{{image}}" src="{{image}}" /></a></li>',
        resolution: 'standard_resolution',
        limit: 5,
        sortBy: 'most-liked',
        after: function(){
            $('.insta_small').last().trigger('click');
        }
    });
    feed.run();

    ///////

    var config1 = {
      "id": '700615043549831168',
      "domId": 'example1',
      "maxTweets": 5,
      "enableLinks": true,
      "showPermalinks": false,
      "showInteraction": false,
      "showInteraction": false,
      "customCallback": handleTweets
    };

    function handleTweets(tweets) {
        var x = tweets.length;
        var n = 0;
        var element = document.getElementById('example1');
        var html = '<ul class="">';
        while(n < x) {        
          html += '<li>' + tweets[n] + '</li>';
          n++;
        }
        html += '</ul>';
        element.innerHTML = html;
    }

    twitterFetcher.fetch(config1);

    // twitter custom scrollbar
    $('.scrollbar-dynamic').scrollbar();

    if(isMobile)
      $('.flavour-slick').slick({
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

    if(hash) {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 1);

        hash = hash.replace('_','');

        var target_y = $(hash).offset().top - 78;
        TweenMax.to($(window), 1.2, {scrollTo:{y:target_y,autoKill: false}, ease:Quad.easeInOut});              
    }  

})
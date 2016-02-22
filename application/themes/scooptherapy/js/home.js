$(document).ready(function(){
    var hash = window.location.hash;

    if(hash) {
        var target_y = $(hash).offset().top - 78;
        TweenMax.to($(window), 1.2, {scrollTo:{y:target_y,autoKill: false}, ease:Quad.easeInOut});              
    }  

    /////// 

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
        var url = $(this).attr('href');
        var hash = url.substring(url.indexOf('#'));

        console.log(hash);

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

})
$(document).ready(function(){
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
      "id": '697988421285875713',
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

})
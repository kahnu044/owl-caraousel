// Owlcarousel
$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: true,
        center: true,
        dots: true,
        dotsEach: 1,
        navText: ["<div class='nav-btn prev-slide'><img src='images/left-arrow-bg.png' alt=''></div>", "<div class='nav-btn next-slide'><img src='images/right-arrow-bg.png' alt=''></div>"],
        responsive: {
            0: {
                stagePadding: 50
            },
            576: {
                stagePadding: 150
            },
            992: {
                stagePadding: 250
            }
        },
        onDrag: function () {
            var videos = $('.owl-item.active').find('video');
            videos.each(function () {
                this.pause();
            });
        }
    });

    /*
    * Play and pause video
    */
    var owl = $('.owl-carousel');
    var video = owl.find('video');

    // Pause all video when it is dragged
    owl.on('drag.owl.carousel', function (event) {
        console.log('gggggggg')
        video.each(function () {
            this.pause();
        });
    });


    // On Video Changed
    owl.on('changed.owl.carousel', function (event) {
        var currentItem = event.item.index;
        var currentVideo = $(event.target).find('.owl-item').eq(currentItem).find('video');
        var allVideos = $(event.target).find('video');

        allVideos.each(function () {
            if (!$(this).is(currentVideo)) {
                $(this).get(0).pause();
                var playButton = $(this).siblings('.play-button');
                playButton.removeClass('playing').fadeIn();
            }
        });

        $(document).on('visibilitychange', function () {
            if (document.visibilityState === 'hidden') {
                currentVideo.get(0).pause();
                jQuery('.play-button').removeClass('playing').fadeIn();
            }
        });

    });

    // Play and pause video on click video
    $('.dpc-video-container video').on('click', (e) => {
        var playButton = $(e.target).siblings('.play-button');
        if ($(e.target).closest('.owl-item').hasClass('active')) {
            playPause(e.target, playButton);
        }
    });

    // Play and pause video on click of play button
    $('.play-button').click(function (e) {
        var video = $(this).siblings('video')[0];
        var $parent = $(video).closest('.owl-item');
        if ($parent.hasClass('active')) {
            if (video.paused) {
                video.play();
                $(this).addClass('playing').fadeOut();
            } else {
                video.pause();
                $(this).removeClass('playing').fadeIn();
            }
        }
    });

});


function playPause(video, playButton) {
    if (!video.paused) {
        video.pause();
        playButton.removeClass('playing').fadeIn();
    } else {
        video.play();
        playButton.addClass('playing').fadeOut();
    }
}

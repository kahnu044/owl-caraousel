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
        navText:["<div class='nav-btn prev-slide'><img src='images/left-arrow-bg.png' alt=''></div>","<div class='nav-btn next-slide'><img src='images/right-arrow-bg.png' alt=''></div>"],
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
        // onInitialized: function () {
        //     var videos = $('.owl-item.active').find('video');
        //     videos.each(function () {
        //         this.play();
        //     });
        // },
        // onTranslated: function () {
        //     var videos = $('.owl-item.active').find('video');
        //     videos.each(function () {
        //         this.play();
        //     });
        // },
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

        // allVideos.each(function() {
        //     if (!$(this).is(currentVideo)) {
        //       $(this).prop('disabled', true);
        //     } else {
        //       $(this).prop('disabled', false);
        //     }
        //   });


        $(document).on('visibilitychange', function () {
            if (document.visibilityState === 'hidden') {
                currentVideo.get(0).pause();
                jQuery('.play-button').removeClass('playing').fadeIn();
            } else {
                currentVideo.get(0).play();
            }
        });




        // video.on('click', function () {
        //     var clickedItemIndex = $(this).closest('.owl-item').index();
        //     if (clickedItemIndex === currentItem) {
        //         if (currentVideo.get(0).paused) {
        //             currentVideo.get(0).play();
        //         } else {
        //             currentVideo.get(0).pause();
        //         }
        //     }
        // });
    });



    owl.on('drag.owl.carousel', function () {
        video.each(function () {
            if (!$(this).paused) {
                $(this).get(0).pause();
            }
        });
    });


    // Pause video on click on video after play
    $('.video-container video').click(function () {

        console.log('ttttttttttttt');
        var playButton = $(this).siblings('.play-button');
        if (!this.paused) {
            this.pause();
            playButton.removeClass('playing').fadeIn();
        }
        else {
            this.play();
            playButton.addClass('playing').fadeOut();
        }
    });



});

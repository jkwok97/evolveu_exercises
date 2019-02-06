$(document).ready(function(){

    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky')
        }
        else {
            $('nav').removeClass('sticky')
        }
    });

    $('.js--scroll-to-plans').click(function(){
            $('html, body').animate({scrollTop: $('js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('js--section-features').offset().top}, 1000);
    });

    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
    });
    
    

});

    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window') 
    //   }, {
    //     offset: '25%'
    //   })
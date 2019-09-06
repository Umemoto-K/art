function onScroll(){
    var winHeight = $(window).height();

    if($('.home-lead01-h')[0]){
        var $homeLead01H = $('.home-lead01-h');
        $homeLead01H.each(function(i){
            if( ( ($(window).scrollTop()  + winHeight*2/3 > $homeLead01H.eq(i).offset().top && $(window).scrollTop()  + winHeight*2/3 < $homeLead01H.eq(i).offset().top + $homeLead01H.eq(i).innerHeight() + winHeight ) && !$(this).hasClass('on') ) ){
                $(this).addClass('on').dequeue();
            }else if( ($(window).scrollTop()  + winHeight <= $homeLead01H.eq(i).offset().top || $(window).scrollTop()  + winHeight*2/3 > $homeLead01H.eq(i).offset().top + $homeLead01H.eq(i).innerHeight() + winHeight ) && $(this).hasClass('on') ){
                $(this).removeClass('on').dequeue();
            }
        });
    }

    if($('.about-project_clear')[0]){
        if( $(".about-project_clear")[0] && $(window).scrollTop()  + winHeight*2/3 > $(".about-project_clear").offset().top && $(window).scrollTop() + winHeight*2/3 < $(".about-project_clear").offset().top + winHeight && !$(".about-project_clear").hasClass('on')){
            $(".about-project_clear").addClass('on');
        }else if( ($(window).scrollTop()  + winHeight <= $(".about-project_clear").offset().top || $(window).scrollTop() + winHeight*2/3 > $(".about-project_clear").offset().top + $(".about-project_clear").innerHeight() + winHeight) && $(".about-project_clear").hasClass('on')){
            $(".about-project_clear").removeClass('on');
        }
    }

    if($('.about-art_clear')[0]){
        if( $(".about-art_clear")[0] && $(window).scrollTop()  + winHeight*2/3 > $(".about-art_clear").offset().top && $(window).scrollTop() + winHeight*2/3 < $(".about-art_clear").offset().top + winHeight && !$(".about-art_clear").hasClass('on')){
            $(".about-art_clear").addClass('on');
        }else if( ($(window).scrollTop()  + winHeight <= $(".about-art_clear").offset().top || $(window).scrollTop() + winHeight*2/3 > $(".about-art_clear").offset().top + $(".about-art_clear").innerHeight() + winHeight) && $(".about-art_clear").hasClass('on')){
            $(".about-art_clear").removeClass('on');
        }
    }
}

$(window).on({
    'resize':function(){onScroll();},
    'scroll':function(){onScroll();}
});



$(function(){　
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});

$(function() {
    $('.slider_top').slick({
        autoplay:true,
        autoplaySpeed:3000,
        pauseOnHover: false,
        fade: true,
        prevArrow: false,
        nextArrow: false,
    }); 
});

$(function() {
    $('.slider_case').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover: false,
        dots: true,
    }); 
});



$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});
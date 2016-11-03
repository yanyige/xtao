$(document).ready(function(){

	jQuery.ballsMove = function() {
		$(document).mousemove(function(ev){
	            var event = ev || window.event;
	            //get the pos of the dom
	            var pageX = event.pageX;
	            var pageY = event.clientY;
	            var posX = pageX * 0.01;
	            var posY = pageY * 0.01;
	            var ret = 'translate3D(' + posX + 'px, ' + posY + 'px, 0px)';
                $('.ball').css('transform', ret);
	            $('.cloud').css('transform', ret);
	    });
	}
	$.ballsMove();

	jQuery.myScroll = function() {
		$(window).scroll(function(){
            display($('.data-space'));
            display($('.data-analytic'));
            display($('.universe'));
            showMore();
        });
	}
	$.myScroll();

    function display(dom) {
        var scrollTop = (document.body.scrollTop || document.documentElement.scrollTop) + document.documentElement.clientHeight;
        if(scrollTop > dom.find('h2').offset().top + 100) {
            dom.find('h2').stop().fadeIn('slow');
        }else {
            dom.find('h2').stop().fadeOut('fast');
        }
        if(scrollTop > dom.find('p').offset().top + 100) {
            dom.find('p').stop().fadeIn('slow');
        }else {
            dom.find('p').stop().fadeOut('fast');
        }
    }

    function showMore() {
        var scrollTop = (document.body.scrollTop || document.documentElement.scrollTop) + document.documentElement.clientHeight;
        if(scrollTop > $('.more').eq(0).offset().top + 30) {
            $('.more').eq(0).stop().fadeIn('slow');
        }else {
            $('.more').eq(0).stop().fadeOut('fast');
        }
        if(scrollTop > $('.more').eq(1).offset().top + 30) {
            $('.more').eq(1).stop().fadeIn('slow');
        }else {
            $('.more').eq(1).stop().fadeOut('fast');
        }
        if(scrollTop > $('.more').eq(2).offset().top + 30) {
            $('.more').eq(2).stop().fadeIn('slow');
        }else {
            $('.more').eq(2).stop().fadeOut('fast');
        }
    }

	jQuery.slideScroll = function() {
		 $(window).scroll(function(){
            var t1 =  $(".universe").offset().top - $(window).scrollTop();
            t1 = t1 * 0.1;
            var posX = "50%";
            var posY = t1+$(".universe").data('top') + "px";
            $(".universe").stop().animate({"background-positionx":posX, "background-position-y":posY}, 3000, 'easeOutQuint');
            Array.prototype.slice.call($(".track-wrapper"), 0).forEach( function(element, index) {
                posY = t1 + $(element).data('top') + "px";
                $(element).stop().animate({"background-positionx":posX, "background-position-y":posY}, 3000, 'easeOutQuint');
            });
            if($('body').width() < 1000) {
                t1 = $(window).scrollTop() - $(".data-analytic").offset().top + 2000;
            }else {
                t1 = $(window).scrollTop() - $(".data-analytic").offset().top;
            }
            posY = t1 * 0.1 + $(".data-analytic").data('top')+ "px";
            $(".data-analytic").stop().animate({"background-positionx":posX, "background-position-y":posY}, 3000, 'easeOutQuint');
            t1 = $(".data-space").offset().top - $(window).scrollTop() -400;
            posY = t1 * 0.05 + "px";
            $(".data-space").stop().animate({"background-positionx":posX, "background-position-y":posY}, 3000, 'easeOutQuint');
        });
	}
	$.slideScroll();

    jQuery.fitPhone = function() {
        if($('body').width() < 1025) {
            $('#track').attr('data-top', 0);
            $('.data-analytic').attr('data-top', -400);
        }
        if($('body').width() < 450) {
            $('.ball').attr('src', '');
            $('.spark').attr('src', '');
        }
    }
    $.fitPhone();
});
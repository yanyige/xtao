$(document).ready(function(){

	jQuery.fitPhone = function() {
        console.log($('body').height());
        if($('body').width() < 400) {
            $('.ball').hide();
            $('.spark').hide();
            $('.data-analytic').attr('data-top', -200);
            $('#kefu').attr('src', 'https://xtaotech.yunkefu.com/workbench/openlc/eHRhb3RlY2gueXVua2VmdS5jb20=');
        }else if($('body').width() < 700) {
            $('.ball').remove();
            $('.spark').remove();
            $('.data-analytic').attr('data-top', -300);
            $('#kefu').attr('src', 'https://xtaotech.yunkefu.com/workbench/openlc/eHRhb3RlY2gueXVua2VmdS5jb20=');
            console.log('?');
        }else if($('body').width() < 1025) {
            $('#track').attr('data-top', 0);
            $('.data-analytic').attr('data-top', -100);
        }

    }
    // $('.spark').remove();
    $.fitPhone();

    jQuery.header = function() {
        $(".nav ul li").hover(function(){
            $(this).addClass('active');
        }, function(){
            $(this).removeClass('active');
        });
    }
    $.header();

	jQuery.toggleNav = function() {
        var originRight = $('.menu-icon').css('right');
        $('.menu-icon').click(function() {
            $("body").toggleClass('body-nav');
            if($(".sub-nav").is(':visible')) {
                if($('body').width() > 1000) {
                    $("nav ul").fadeIn(1000);
                }
                $(".sub-nav").stop().animate({
                    right: "-500px"
                }, 1000, function() {
                    $(".sub-nav").css({"display":"none"});
                });
                $(".menu-icon").stop().animate({
                    right: originRight
                }, 1000, function() {
                });

            }else {
                $("nav ul").fadeOut(1000);
                $(".sub-nav").css({"display":"block"});
                $(".sub-nav").stop().animate({
                    right: "0"
                }, 1000, function() {
                });
                // var right = "27%";
                right = $('.sub-nav').width() - ((document.documentElement.clientWidth >> 1) - ($('.nav-wrapper').width() >> 1)) - 100 + "px";
                $(".menu-icon").stop().animate({
                    right: right
                }, 1000, function() {
                });
            }
        });
    }
    $.toggleNav();

    jQuery.navOpacity = function() {
    	var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        $(window).scroll(function(){
            scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
            var targetHeight = $('.header').find('img').height();
            var opacity = (1 - (targetHeight - scrollHeight) / targetHeight);
            opacity = opacity == 0 ? 0:1;
            var nav = $('.sec .nav');
            nav.css('background-color', 'rgba(33, 188, 239, '+opacity+')');
            if(opacity != 0) {
            	nav.addClass('scrolled');
            } else nav.removeClass('scrolled');
        });
        if(scrollHeight) {
        	var nav = $('.sec .nav');
        	nav.css('background-color', 'rgba(33, 188, 239, '+1+')');
        }
    }
    $.navOpacity();


    jQuery.sportsBall = function(){
         //露篓脪氓禄颅虏录驴铆赂脽潞脥脡煤鲁脡碌茫碌脛赂枚脢媒
         // console.log($('body').height());
        var WIDTH = $(window).width();
        // console.log()
        if($('#xtaoindex').val() != 'index') {
	        var obj = $('.header').find('img');
	        obj.ready(function() {
	            if(WIDTH > 1979) HEIGHT = 890;
	            else if(WIDTH > 1599) HEIGHT = 775;
	            else if(WIDTH > 1439) HEIGHT = 698;
	            else if(WIDTH > 1023) HEIGHT = 496;
	            else if(WIDTH > 767) HEIGHT = 372;
	            else if(WIDTH > 424) HEIGHT = 206;
	            else if(WIDTH > 374) HEIGHT = 181;
	            else if(WIDTH > 320) HEIGHT = 155;
	            else HEIGHT = 150;
	            var POINT = HEIGHT > 2000? 35:15
	            // console.log($('body').height());

	            var canvas = document.getElementById('canvas');
	            canvas.width = WIDTH,
	            canvas.height = HEIGHT;
	            var context = canvas.getContext('2d');
	            context.strokeStyle = 'rgba(0,0,0,0.1)',
	            context.strokeWidth = 1,
	            context.fillStyle = 'rgba(0,0,0,0.5)';
	            var circleArr = [];

	            //脧脽脤玫拢潞驴陋脢录xy脳酶卤锚拢卢陆谩脢酶xy脳酶卤锚拢卢脧脽脤玫脥赂脙梅露脠
	            function Line (x, y, _x, _y, o) {
	                this.beginX = x,
	                this.beginY = y,
	                this.closeX = _x,
	                this.closeY = _y,
	                this.o = o;
	            }
	            //碌茫拢潞脭虏脨脛xy脳酶卤锚拢卢掳毛戮露拢卢脙驴脰隆脪脝露炉xy碌脛戮脿脌毛
	            function Circle (x, y, r, moveX, moveY) {
	                this.x = x,
	                this.y = y,
	                this.r = r,
	                this.moveX = moveX,
	                this.moveY = moveY;
	            }
	            //脡煤鲁脡max潞脥min脰庐录盲碌脛脣忙禄煤脢媒
	            function num (max, _min) {
	                var min = arguments[1] || 0;
	                return Math.floor(Math.random()*(max-min+1)+min);
	            }
	            // 禄忙脰脝脭颅碌茫
	            function drawCricle (cxt, x, y, r, moveX, moveY) {
	                var img = new Image();
	                img.src = "image/icon-2.png"
	                var circle = new Circle(x, y, r, moveX, moveY)
	                cxt.beginPath()
	                // context.fillStyle = 'rgba(36,240,255,0.3)';
	                // cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
	                // cxt.closePath()
	                // cxt.fill();
	                cxt.drawImage(img, x-r*1, y-r*1, r* 2, r*2);
	                return circle;
	            }
	            //禄忙脰脝脧脽脤玫
	            function drawLine (cxt, x, y, _x, _y, o) {
	                var line = new Line(x, y, _x, _y, o)
	                cxt.beginPath()
	                cxt.strokeStyle = 'rgba(36,240,255,0.03)'
	                cxt.moveTo(line.beginX, line.beginY)
	                cxt.lineTo(line.closeX, line.closeY)
	                cxt.closePath()
	                cxt.stroke();

	            }
	            //鲁玫脢录禄炉脡煤鲁脡脭颅碌茫
	            function init () {
	                circleArr = [];
	                for (var i = 0; i < POINT; i++) {
	                    circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/20, num(10, -10)/20));
	                }
	                draw();
	            }

	            //脙驴脰隆禄忙脰脝
	            function draw () {
	                context.clearRect(0,0,canvas.width, canvas.height);
	                for (var i = 0; i < POINT; i++) {
	                    drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
	                }
	                for (var i = 0; i < POINT; i++) {
	                    var j = i - 1;
	                        if (j < POINT && j > 0) {
	                            var A = Math.abs(circleArr[j].x - circleArr[i].x),
	                                B = Math.abs(circleArr[j].y - circleArr[i].y);
	                            var lineLength = Math.sqrt(A*A + B*B);
	                            var C = 1/lineLength*7-0.009;
	                            var lineOpacity = C > 0.03 ? 0.03 : C;
	                            drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[j].x, circleArr[j].y, lineOpacity);

	                        }
	                    j = i + 1;
	                        if (j < POINT && j > 0) {
	                            var A = Math.abs(circleArr[j].x - circleArr[i].x),
	                                B = Math.abs(circleArr[j].y - circleArr[i].y);
	                            var lineLength = Math.sqrt(A*A + B*B);
	                            var C = 1/lineLength*7-0.009;
	                            var lineOpacity = C > 0.03 ? 0.03 : C;
	                            drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[j].x, circleArr[j].y, lineOpacity);

	                        }
	                }
	            }

	            //碌梅脫脙脰麓脨脨
	            init();
	            // setInterval(function () {
	            //     for (var i = 0; i < POINT; i++) {
	            //         var cir = circleArr[i];
	            //         cir.x += cir.moveX;
	            //         cir.y += cir.moveY;
	            //         if (cir.x > WIDTH) cir.x = 0;
	            //         else if (cir.x < 0) cir.x = WIDTH;
	            //         if (cir.y > HEIGHT) cir.y = 0;
	            //         else if (cir.y < 0) cir.y = HEIGHT;

	            //     }
	            //     draw();
	            // }, 8);
	            function foo() {
	            	for (var i = 0; i < POINT; i++) {
	                    var cir = circleArr[i];
	                    cir.x += cir.moveX;
	                    cir.y += cir.moveY;
	                    if (cir.x > WIDTH) cir.x = 0;
	                    else if (cir.x < 0) cir.x = WIDTH;
	                    if (cir.y > HEIGHT) cir.y = 0;
	                    else if (cir.y < 0) cir.y = HEIGHT;
	                }
	                draw();
	                requestAnimationFrame(foo);
	            }
	            requestAnimationFrame(foo);
	        });
        }else {
    		var tempTop = 0;
        	$('.sports').map(function(d, i) {
            	$(i).css({'height': $('body').height() / 4, 'top': tempTop});
            	tempTop += $('body').height() / 4;
            });
        	function drawBall(id){
	        	var WIDTH = $(window).width();
	            var HEIGHT = $(window).height();
	            var POINT = 12;
	            // console.log($('body').height());


	            var canvas = document.getElementById(id);
	            canvas.width = WIDTH,
	            canvas.height = HEIGHT;
	            var context = canvas.getContext('2d');
	            context.strokeStyle = 'rgba(0,0,0,0.1)',
	            context.strokeWidth = 1,
	            context.fillStyle = 'rgba(0,0,0,0.5)';
	            var circleArr = [];

	            //脧脽脤玫拢潞驴陋脢录xy脳酶卤锚拢卢陆谩脢酶xy脳酶卤锚拢卢脧脽脤玫脥赂脙梅露脠
	            function Line (x, y, _x, _y, o) {
	                this.beginX = x,
	                this.beginY = y,
	                this.closeX = _x,
	                this.closeY = _y,
	                this.o = o;
	            }
	            //碌茫拢潞脭虏脨脛xy脳酶卤锚拢卢掳毛戮露拢卢脙驴脰隆脪脝露炉xy碌脛戮脿脌毛
	            function Circle (x, y, r, moveX, moveY) {
	                this.x = x,
	                this.y = y,
	                this.r = r,
	                this.moveX = moveX,
	                this.moveY = moveY;
	            }
	            //脡煤鲁脡max潞脥min脰庐录盲碌脛脣忙禄煤脢媒
	            function num (max, _min) {
	                var min = arguments[1] || 0;
	                return Math.floor(Math.random()*(max-min+1)+min);
	            }
	            // 禄忙脰脝脭颅碌茫
	            function drawCricle (cxt, x, y, r, moveX, moveY) {
	                var img = new Image();
	                img.src = "image/icon-2.png"
	                var circle = new Circle(x, y, r, moveX, moveY)
	                cxt.beginPath()
	                // context.fillStyle = 'rgba(36,240,255,0.3)';
	                // cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
	                // cxt.closePath()
	                // cxt.fill();
	                cxt.drawImage(img, x-r*1, y-r*1, r* 2, r*2);
	                return circle;
	            }
	            //禄忙脰脝脧脽脤玫
	            function drawLine (cxt, x, y, _x, _y, o) {
	                var line = new Line(x, y, _x, _y, o)
	                cxt.beginPath()
	                cxt.strokeStyle = 'rgba(36,240,255,0.03)'
	                cxt.moveTo(line.beginX, line.beginY)
	                cxt.lineTo(line.closeX, line.closeY)
	                cxt.closePath()
	                cxt.stroke();

	            }
	            //鲁玫脢录禄炉脡煤鲁脡脭颅碌茫
	            function init () {
	                circleArr = [];
	                for (var i = 0; i < POINT; i++) {
	                	if(WIDTH < 1000) {
	                    	circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/30, num(10, -10)/40));
	                	}else {
	                		circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/30, num(10, -10)/20));
	                	}
	                }
	                draw();
	            }

	            //脙驴脰隆禄忙脰脝
	            function draw () {
	                context.clearRect(0,0,canvas.width, canvas.height);
	                for (var i = 0; i < POINT; i++) {
	                    drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
	                }
	                for (var i = 0; i < POINT; i++) {
	                    var j = i - 1;
	                    if (j < POINT && j > 0) {
	                        var A = Math.abs(circleArr[j].x - circleArr[i].x),
	                            B = Math.abs(circleArr[j].y - circleArr[i].y);
	                        var lineLength = Math.sqrt(A*A + B*B);
	                        var C = 1/lineLength*7-0.009;
	                        var lineOpacity = C > 0.03 ? 0.03 : C;
	                        drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[j].x, circleArr[j].y, lineOpacity);

	                    }
	                    j = i + 1;
	                    if (j < POINT && j > 0) {
	                        var A = Math.abs(circleArr[j].x - circleArr[i].x),
	                            B = Math.abs(circleArr[j].y - circleArr[i].y);
	                        var lineLength = Math.sqrt(A*A + B*B);
	                        var C = 1/lineLength*7-0.009;
	                        var lineOpacity = C > 0.03 ? 0.03 : C;
	                        drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[j].x, circleArr[j].y, lineOpacity);

	                    }
	                }
	       		}
	       		init();
	            // setInterval(function () {
	            //     for (var i = 0; i < POINT; i++) {
	            //         var cir = circleArr[i];
	            //         cir.x += cir.moveX;
	            //         cir.y += cir.moveY;
	            //         if (cir.x > WIDTH) cir.x = 0;
	            //         else if (cir.x < 0) cir.x = WIDTH;
	            //         if (cir.y > HEIGHT) cir.y = 0;
	            //         else if (cir.y < 0) cir.y = HEIGHT;

	            //     }
	            //     draw();
	            // }, 17);
	            function foo() {
	            	for (var i = 0; i < POINT; i++) {
	                    var cir = circleArr[i];
	                    cir.x += cir.moveX;
	                    cir.y += cir.moveY;
	                    if (cir.x > WIDTH) cir.x = 0;
	                    else if (cir.x < 0) cir.x = WIDTH;
	                    if (cir.y > HEIGHT) cir.y = 0;
	                    else if (cir.y < 0) cir.y = HEIGHT;
	                }
	                draw();
	                requestAnimationFrame(foo);
	            }
	            requestAnimationFrame(foo);
        	}
        	drawBall('canvas1');
        	// drawBall('canvas2');
        	// drawBall('canvas3');
        	// drawBall('canvas4');
    	}
    }
    $.sportsBall();

    function forbidOrientation() {
    	$(window).on('orientationchange', function() {
    		var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
    		if (orientation.type === "landscape-primary") {
				alert('请勿旋转^_^');
				window.location.reload();
			} else if (orientation.type === "landscape-secondary") {
				alert("请勿旋转^_^");
				window.location.reload();
			} else if (orientation.type === "portrait-secondary" || orientation.type === "portrait-primary") {
				alert("请勿旋转^_^");
				window.location.reload();
			}
    	});
    }
    // forbidOrientation();


});
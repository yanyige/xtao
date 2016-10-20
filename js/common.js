$(document).ready(function(){

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
        $(window).scroll(function(){
            var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
            var targetHeight = $('.header').find('img').height();
            var opacity = (1 - (targetHeight - scrollHeight) / targetHeight);
            var nav = $('.nav');
            nav.css('background-color', 'rgba(0, 0, 0, '+opacity+')');
        });
    }
    $.navOpacity();


    jQuery.sportsBall = function(){
         //定义画布宽高和生成点的个数
         // console.log($('body').height());
        var WIDTH = document.documentElement.clientWidth, HEIGHT = WIDTH > 1000?($('.header').height() || $('body').height()):($('.header').height() || $('body').height() - 400) , POINT = HEIGHT > 2000? 35:15;
        // console.log($('body').height());
        console.log(HEIGHT);
        var canvas = document.getElementById('canvas');
        canvas.width = WIDTH,
        canvas.height = HEIGHT;
        var context = canvas.getContext('2d');
        context.strokeStyle = 'rgba(0,0,0,0.1)',
        context.strokeWidth = 1,
        context.fillStyle = 'rgba(0,0,0,0.5)';
        var circleArr = [];

        //线条：开始xy坐标，结束xy坐标，线条透明度
        function Line (x, y, _x, _y, o) {
            this.beginX = x,
            this.beginY = y,
            this.closeX = _x,
            this.closeY = _y,
            this.o = o;
        }
        //点：圆心xy坐标，半径，每帧移动xy的距离
        function Circle (x, y, r, moveX, moveY) {
            this.x = x,
            this.y = y,
            this.r = r,
            this.moveX = moveX,
            this.moveY = moveY;
        }
        //生成max和min之间的随机数
        function num (max, _min) {
            var min = arguments[1] || 0;
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        // 绘制原点
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
        //绘制线条
        function drawLine (cxt, x, y, _x, _y, o) {
            var line = new Line(x, y, _x, _y, o)
            cxt.beginPath()
            cxt.strokeStyle = 'rgba(36,240,255,0.03)'
            cxt.moveTo(line.beginX, line.beginY)
            cxt.lineTo(line.closeX, line.closeY)
            cxt.closePath()
            cxt.stroke();

        }
        //初始化生成原点
        function init () {
            circleArr = [];
            for (var i = 0; i < POINT; i++) {
                circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/20, num(10, -10)/20));
            }
            draw();
        }

        //每帧绘制
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

        //调用执行
        init();
        setInterval(function () {
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
        }, 8);
    }
    $.sportsBall();
});
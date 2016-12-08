$(document).ready(function(){
	$('.swiper-pagination').css("top", $('.header').height() - 25);
	document.body.scrollTop -= ($('.nav').height() + 25);
	document.documentElement.scrollTop -= ($('.nav').height() + 25);
});
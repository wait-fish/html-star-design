$(function() {
	fishScroll($("#fuwu").offset().top-500, false, function() {
		$("#fuwu .mybox>div").eq(0).addClass("animated fadeInRight").removeClass("myfade");
		$("#fuwu .mybox>div").eq(1).addClass("animated fadeInUp").removeClass("myfade");
		$("#fuwu .mybox>div").eq(2).addClass("animated fadeInLeft").removeClass("myfade");
		$("#fuwu .mybox>div").eq(3).addClass("animated fadeInRight").removeClass("myfade");
		$("#fuwu .mybox>div").eq(4).addClass("animated fadeInDown").removeClass("myfade");
		$("#fuwu .mybox>div").eq(5).addClass("animated fadeInLeft").removeClass("myfade");
	});
	fishScroll($("#gongneng").offset().top-150, false, function() {
		$("#gongneng .mybox>div").eq(0).addClass("animated fadeInRight").removeClass("myfade");
		$("#gongneng .mybox>div").eq(1).addClass("animated fadeInUp").removeClass("myfade");
		$("#gongneng .mybox>div").eq(2).addClass("animated fadeInLeft").removeClass("myfade");
	});
});
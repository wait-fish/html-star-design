$(function() {
	//载入动画
	fishScroll($("#gongsi").offset().top-500,false,function() {
		$("#gongsi .row>div").eq(0).addClass("animated fadeInRight").removeClass("myfade");
		$("#gongsi .row>div").eq(1).addClass("animated fadeInLeft").removeClass("myfade");
	});
	fishScroll($("#jingyan").offset().top-150, false, function() {
		$("#jingyan .mybox>div").eq(0).addClass("animated fadeInRight").removeClass("myfade");
		$("#jingyan .mybox>div").eq(1).addClass("animated fadeInUp").removeClass("myfade");
		$("#jingyan .mybox>div").eq(2).addClass("animated fadeInLeft").removeClass("myfade");
		$("#jingyan .mybox>div").eq(3).addClass("animated fadeInRight").removeClass("myfade");
		$("#jingyan .mybox>div").eq(4).addClass("animated fadeInDown").removeClass("myfade");
		$("#jingyan .mybox>div").eq(5).addClass("animated fadeInLeft").removeClass("myfade");
	});
	fishScroll($("#sheji").offset().top-150,false,function() {
		$("#sheji .row>div").eq(0).addClass("animated fadeInUp").removeClass("myfade");
		$("#sheji .row>div").eq(1).addClass("animated fadeInDown").removeClass("myfade");
		$("#sheji .row>div").eq(2).addClass("animated fadeInUp").removeClass("myfade");
		$("#sheji .row>div").eq(3).addClass("animated fadeInDown").removeClass("myfade");
	});
});
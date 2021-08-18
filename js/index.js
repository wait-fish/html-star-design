$(function() {
	//手机端轮播拖动
	let startX = 0;
	let endX = 0;
	$("#banner")[0].addEventListener("touchstart", (e) => {
		//console.log(e.targetTouches[0].clientX);
		startX = e.targetTouches[0].clientX;
	});
	$("#banner")[0].addEventListener("touchmove", (e) => {
		endX = e.targetTouches[0].clientX;
		endX - startX > 0 ? $("carouselExampleIndicators").carousel('next') : $("carouselExampleIndicators").carousel(
			'prev');
	});
	//数据变化
	fishScroll($("#shuju").offset().top-500, false,function() {
		//	数据
		counts(6500, 7242, 0);
		counts(0, 380, 1);
		counts(0, 220, 2);
		counts(0, 24, 3);
	});
	function counts(count, target, i, time) {
		let timer = setInterval(function() {
			$("#shuju .row h2").eq(i).text(count++);
			if (count > target) {
				clearInterval(timer);
			}
		}, 0);
	}
	//电梯导航
	fixedtool();
	function fixedtool() {
		var flag = true;
		var arr = [];
		$(".w").each((index,item)=>{
			arr[index] = $(".w").eq(index).offset().top;
		});
		// console.log(arr);
		var top = $("#build").offset().top;
		$(document).scroll(function(){
			var scrTop = $(this).scrollTop();
			if(scrTop>=top){
				$(".fixedtool").slideDown(500);
			}else{
				$(".fixedtool").slideUp(500);
			}
			if(flag){
				$(arr).each(function(index,item){
					if(scrTop+50>=item){
						$(".fixedtool li").eq(index).addClass("current").siblings().removeClass("current");
					}
				});
			}
		});
		$(".fixedtool").on("click","li",function(){
			flag = false;
			var $index = $(this).index();
			$(this).addClass("current").siblings().removeClass("current");
			$("html,body").stop().animate({
				scrollTop: arr[$index]
			},function(){
				flag = true;
			});
			
		});
	}
	//加载移入
	fishScroll($("#build").offset().top-150, false,function() {
		$("#build .row>div").eq(0).addClass("animated fadeInRight").removeClass("myfade");
		$("#build .row>div").eq(1).addClass("animated fadeInDown").removeClass("myfade");
		$("#build .row>div").eq(2).addClass("animated fadeInLeft").removeClass("myfade");
	});
	fishScroll($("#dian").offset().top-150,false,function() {
		$("#dian .row div").eq(0).addClass("animated fadeInRight").removeClass("myfade");
		$("#dian .row div").eq(1).addClass("animated fadeInLeft").removeClass("myfade");
	});
	fishScroll($("#create").offset().top-150,false,function() {
		$("#create .row>div").eq(0).addClass("animated fadeInRight").removeClass("myfade");
		$("#create .row>div").eq(1).addClass("animated fadeInLeft").removeClass("myfade");
	});
	fishScroll($("#pro").offset().top-150, false, function() {
		$("#pro #All-Projects .row>div").eq(0).addClass("animated fadeInRight").removeClass("myfade");
		$("#pro #All-Projects .row>div").eq(1).addClass("animated fadeInUp").removeClass("myfade");
		$("#pro #All-Projects .row>div").eq(2).addClass("animated fadeInLeft").removeClass("myfade");
		$("#pro #All-Projects .row>div").eq(3).addClass("animated fadeInRight").removeClass("myfade");
		$("#pro #All-Projects .row>div").eq(4).addClass("animated fadeInDown").removeClass("myfade");
		$("#pro #All-Projects .row>div").eq(5).addClass("animated fadeInLeft").removeClass("myfade");
		$("#pro #Design .row>div").eq(0).addClass("animated fadeInRight").removeClass("myfade");
		$("#pro #Design .row>div").eq(1).addClass("animated fadeInUp").removeClass("myfade");
		$("#pro #Design .row>div").eq(2).addClass("animated fadeInLeft").removeClass("myfade");
		$("#pro #Design .row>div").eq(3).addClass("animated fadeInRight").removeClass("myfade");
		$("#pro #Design .row>div").eq(4).addClass("animated fadeInDown").removeClass("myfade");
		$("#pro #Design .row>div").eq(5).addClass("animated fadeInLeft").removeClass("myfade");
	});
});

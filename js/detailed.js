$(function() {
	var index = 0; //上一个点击的圆点
	$("#nav .myicon>input").click(function() {
		this.style.borderBottom = "1px solid #fff";
		$(this).animate({
			width: 150
		}, 500)
	});
	$("#nav .myicon>input").blur(function() {
		$(this).animate({
			width: 46,
		}, 300);
		this.style.borderBottom = "none";
	});
	// 响应式图片
	$(window).resize(function() {
		var imgWidths = 0;
		$("#zhanshi ul>li>img").each((i, item) => {
			$(item).width($("#zhanshi .row>.col-9").width()); //
			imgWidths += $(item).width(); //等于5个图片的宽度
		});
		$("#zhanshi ul").css({
			transform: `translateX(-${$("#zhanshi ul>li>img").eq(0).width()*index}px)`,
			transition: "none",
			width: imgWidths,
			height: $("#zhanshi ul>li>img").eq(index).height() //设置ul为当前图片高度
		});
		//点击时设置宽度为当前图片宽度保证不溢出看到其他图片
		$("#zhanshi .mybox").css({
			width: $("#zhanshi ul>li>img").eq(index).width()
		});
	}).trigger("resize");
	$("#zhanshi ol>li").each(function(i, item) {
		$(this).click(clickOrTouch);
		function clickOrTouch(e, x) {
			if (x != undefined) {
				x = x;
			} else {
				x = i;
			}
			$("#zhanshi ol>li").each(function(i, item) {
				$(this).removeClass("cursor");
			});
			$("#zhanshi ol>li").eq(x).addClass("cursor");
			var imgw = $("#zhanshi ul>li>img").eq(0).width();
			$("#zhanshi ul").css({
				transform: `translateX(-${imgw*x}px)`, //偏移
				transition: `${0.5*Math.abs(index-x)}s`, //越近速度越快
				height: $("#zhanshi ul>li>img").eq(x).height() //设置ul为当前图片高度
			});
			index = x; //记录上一个
			//点击时设置宽度为当前图片宽度保证不溢出看到其他图片
			$("#zhanshi .mybox").css({
				width: $("#zhanshi ul>li>img").eq(x).width()
			});
		}
		window.clickOrTouch = clickOrTouch;
	});
	//手机端触摸事件
	let startX = 0;
	let endX = 0
	$("#zhanshi")[0].addEventListener("touchstart", (e) => {
		startX = e.targetTouches[0].clientX;
	});
	$("#zhanshi")[0].addEventListener("touchmove", (e) => {
		endX = e.targetTouches[0].clientX;
	});
	$("#zhanshi")[0].addEventListener("touchend", (e) => {
		if (endX - startX > 0) {
			let prev = index - 1;
			if (prev < 0) {
				clickOrTouch(e, 4);
			} else {
				clickOrTouch(e, prev);
			}
		} else {
			let next = index + 1;
			if (next > 4) {
				clickOrTouch(e, 0);
			} else {
				clickOrTouch(e, next);
			}
		}
	});
});

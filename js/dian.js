$(function() {
	$("#nav .myicon>input").click(function() {
		this.style.borderBottom = "1px solid #fff";
		$(this).animate({
			width: 150
		},500)
	});
	$("#nav .myicon>input").blur(function() {
		$(this).animate({
			width: 46,
		},300);
		this.style.borderBottom = "none";
	});
	//加载载入链式
	fishScroll($("#chanpin").offset().top-150, false,function() {
		for(let i = 0; i < $("#chanpin .row:last-child>div").length; i++) {
			setTimeout(function(){
				$("#chanpin .row:last-child>div").eq(i).addClass("animated fadeInUp").removeClass("myfade");
			},200*i);
		}
	});
});
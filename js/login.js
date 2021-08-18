$(function() {
	$(".user").keyup(function() {
		let text = $(this).val();
		// console.log(text);
		$(".tishi").css({
			display: "block"
		}).text(text);
	});
	$(".user").blur(function() {
		$(".tishi").css({
			display: "none"
		});
	});
	$(".testgo").click(function() {
		let timer,count = 59;
		$(this).attr("disabled");
		$(this).css({
			backgroundColor: "#f4f4f4",
			color: "#939393"
		});
		timer = setInterval(function() {
			$(".testgo").val(count+"s");
			count--;
			if(count === -1) {
				clearInterval(timer);
				$(".testgo").val("重新发送");
				$(".testgo").attr("disabled",false);
				$(".testgo").css({
					backgroundColor: "#FFC631",
					color: "#000"
				});
			}
		},1000);
	});
	$(".in>input").click(function() {
		$(".go").css({
			display: "block"
		});
		setTimeout(function() {
			 location.href ="index.html"
		},1500);
	});
});
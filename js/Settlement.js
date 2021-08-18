$(function() {
	//设置编辑删除
	$(".row .bj").click(function() {
		if($(".isbj").attr("disabled") === "disabled") {
			$(this).text("删除");
			$(".isbj").removeAttr("disabled");
		}else{
			$(this).text("编辑");
			$(".isbj").attr("disabled",true);
			//删除选中
			$(".isbj:checked").parents(".par").remove();
			// console.log($(".isbj:checked"));
			counts();
			zongjia();
		}
	});
	//设置全选
	$(".isbj").eq($(".isbj").length-1).click(function() {
		console.log($(".isbj").attr("checked"));
		if($(".isbj").attr("checked") === undefined) {
			$(".isbj").attr("checked",true);
		}else {
			$(".isbj").attr("checked",false);
		}
	});
	//设置加减
	$(".jia").click(function() {
		jiajian(1,this);
		counts();
		zongjia()
	});
	$(".jian").click(function() {
		jiajian(-1,this);
		counts();
		zongjia()
	});
	function jiajian(n,gthis) {
		let count = parseInt($(gthis).siblings(".mycount").val())+n;
		if(count >= 1) {
			$(gthis).siblings(".mycount").val(count);
		}
	}
	 counts();
	 zongjia();
	function counts() {
		let countn = 0;
		$(".mycount").each(function(i,item) {
			countn += parseInt($(item).val());
		});
		$(".count").text(countn);
	}
	function zongjia() {
		let qian = 0;
		$(".mycount").each(function(i,item) {
			let danjia = Number($(item).parents(".par").find(".dj").text().substring(1));
			qian += parseInt($(item).val())*danjia;
		});
		$(".allq").text("$"+qian);
	}
});
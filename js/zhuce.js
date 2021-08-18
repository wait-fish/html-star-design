$(function() {
 	$(".app").distpicker({
 		province: "广东省",
 		city: "广州市",
 		district: "天河区"
 	});
	$(".user").blur(function() {
		let text = $(this).val();
		let reg = /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/;
		$(".userts").css({
			display: "block"
		});
		if(reg.test(text)) {
			isok(".userts","green","可以使用的手机号");
		}else {
			isok(".userts","red","手机号需为11位且由1开头");
			//alert("手机号需为11位且由1开头");
		}
	});
	$(".pwd").blur(function() {
		let text = $(this).val();
		let reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,18}$/;
		$(".pwdts").css({
			display: "block"
		});
		if(reg.test(text)) {
			isok(".pwdts","green","可以使用");
		}else {
			isok(".pwdts","red","密码必须由8-16位字母、数字组成，区分大小写");
			//alert("手机号需为11位且由1开头");
		}
	});
	$(".pwds").blur(function() {
		let text = $(this).val();
		let reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,18}$/;
		$(".pwdts").css({
			display: "block"
		});
		if($(".pwd").val() === $(this).val()) {
			isok(".pwdts","green","OK！");
		}else {
			isok(".pwdts","red","两次密码输入不一致！");
			//alert("手机号需为11位且由1开头");
		}
	});
	function isok(str,color,text) {
		$(str).css({
			color: color
		});
		$(str).text(text);
		setTimeout(function() {
			$(str).css({
				display: "none",
				color: "#fff"
			});
		},2000);
	}
	//键入
	$(".user").keyup(function() {
		let text = $(this).val();
		$(".userts").css({
			display: "block"
		}).text(text);
	});
	//验证码
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
 });

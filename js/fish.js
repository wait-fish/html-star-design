(function(window) {
	//跟随导航栏---//父级是天空.tiankong//滑块是云.yun
	var tk = document.querySelectorAll(".fish_sky li"); //祖辈是天空
	var yun = document.querySelector(".fish_yun"); //滑块是云
	if (yun != null && tk.length != 0) {
		var go = yun.offsetLeft;

		for (var i = 0; i < tk.length; i++) {
			//鼠标移入
			tk[i].addEventListener("mouseenter", mouseenter);
			//鼠标移出
			tk[i].addEventListener("mouseleave", mouseleave);
			//点击
			tk[i].addEventListener("click", mouseclick);
		}
	}

	function mouseenter() {
		move(this.offsetLeft, yun);
	}

	function mouseleave() {
		move(go, yun);
	}

	function mouseclick() {
		yun.style.left = this.offsetLeft + "px";
		go = this.offsetLeft;
	}
	//跟随广告或导航栏
	var fish_follow = document.querySelectorAll(".fish_follow");
	//console.log(fish_follow);
	if (fish_follow.length != 0) {
		var Follow = fish_follow[0].offsetTop; //Follow跟随
		window.addEventListener("scroll", scrollGo);
	}

	function scrollGo() {
		let backTop = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
		for (let i = 0; i < fish_follow.length; i++) {
			//滚动距离加最开始的间距等于目标距离，遍历使用该类的所有元素
			move(backTop + Follow, fish_follow[i], 'top');
		}
	}
	//可直接用移动函数-----
	//云移动	
	function move(target, yun, tl)
	//目标位置offsetleft，和云 ，参数'top','left'
	{
		target = target || 0;
		yun = yun || " ";
		tl = tl || "left";
		//计时器由云调用，每次调用就清除保证只有一个计时器
		if(yun != " ") {
			clearInterval(yun.timer);
			yun.timer = setInterval(function() {
				var offsetTL = tl == "top" ? yun.offsetTop : yun.offsetLeft;
				//目标距离 / 云的位置
				var speed = (target - offsetTL) / 10;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				if (offsetTL == target) {
					clearInterval(yun.timer);
				} else if (tl == 'top') {
					yun.style.top = yun.offsetTop + speed + 'px';
				} else {
					yun.style.left = yun.offsetLeft + speed + 'px';
				}
			}, 15);
		}
	}
	//返回顶部-----
	var goTop = document.querySelector(".fish_top");
	var timer = null;
	console.log('窗口可视高度:' + document.documentElement.clientHeight);
	if (goTop != null) {
		window.addEventListener("scroll", scrollTop);
		goTop.addEventListener("click", goHome);
		scrollTop();
	}

	function scrollTop() {
		//获取被卷去的距离
		let backTop = document.documentElement.scrollTop || document.body.scrollTop;
		//如果超出屏幕一个可视窗口距离则显示
		if (backTop > document.documentElement.clientHeight) {
			goTop.style.display = "block";
		} else {
			goTop.style.display = "none";
		}

		//返回顶部
	}

	function goHome() {
		clearInterval(timer);
		timer = setInterval(function() {
			let backTop = document.documentElement.scrollTop;
			let speed = Math.ceil(backTop / 20);
			document.documentElement.scrollTop = backTop - speed;
			// console.log(document.documentElement.scrollTop);
			if (document.documentElement.scrollTop == 0) {
				clearInterval(timer);
			}
		}, 10);

	}
	//固定导航栏
	var fish_nav = document.querySelector(".fish_nav");
	if (fish_nav != null) {
		var navtop = fish_nav.offsetTop;
		window.addEventListener("scroll", scrollnav);
	}

	function scrollnav() {
		var bgtop = document.documentElement.scrollTop || document.body.scrollTop;
		if (navtop <= bgtop) {
			fish_nav.style.position = "fixed";
			fish_nav.style.top = 0;
		} else {
			fish_nav.style.position = "";
		}
	}
	//手机端拖拽----------------------
	var touch = document.querySelector(".fish_touch");
	var startX = 0,
		startY = 0,
		X = 0,
		Y = 0;
	if (touch != null) {
		touch.addEventListener("touchstart", touchstart);
		touch.addEventListener("touchmove", touchmove);
	}

	function touchstart(e) {
		//  获取手指初始坐标
		startX = e.targetTouches[0].pageX;
		startY = e.targetTouches[0].pageY;
		//盒子的坐标
		X = touch.offsetLeft;
		Y = touch.offsetTop;
	}

	function touchmove(e) {
		//盒子移动时的坐标=手指移动到位置的坐标-手指最开始的坐标 + 盒子的原始坐标
		var endX = e.targetTouches[0].pageX - startX + X;
		var endY = e.targetTouches[0].pageY - startY + Y;
		touch.style.left = endX + 'px';
		touch.style.top = endY + 'px';
		e.preventDefault();
	}
	//补零
	function bu0(count) {
		return count < 10 ? '0' + count : count;
	}
	//判断距离的函数
	function fishScroll(target, bool, callback1, callback2) {
		var flag = true; //true多次执行false只执行一次
		target = target || 0; //目标距离
		callback1 = callback1 || function() {};
		callback2 = callback2 || function() {};
		if (flag === true) {
			fn();
			window.addEventListener("scroll", fn);

			function fn() {
				let backTop = document.documentElement.scrollTop || document.body.scrollTop;
				if (backTop > target) {
					if (flag === false) {
						window.removeEventListener("scroll", fn);
					}
					flag = bool;
					return callback1(backTop);
				} else {
					return callback2(backTop);
				}
			}
		}
	}
	window.fishMove = move;
	window.bu0 = bu0;
	window.fishScroll = fishScroll;
})(window);

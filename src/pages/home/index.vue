<template>
	<div class="home">
		<div class="bg"></div>
		<div class="wrap">
			<ul class="links">
				<li class="l1">
					<span class="icon animated">
						<img src="@/assets/icon/home.jpg" alt="">
					</span>
					<p class="links_p">主页</p>
					<span class="enter_bottom">点击进入</span>
					<router-link class="home_a" to="/home"></router-link>
				</li>
				<li class="l2">
					<span class="icon animate">
						<img src="@/assets/icon/home.jpg" alt="">
					</span>
					<p class="links_p">活动介绍</p>
					<span class="enter_bottom">点击进入</span>
					<router-link class="home_a" to="/activity_publicity"></router-link>
				</li>
				<li class="l3">
					<span class="icon animate">
						<img src="@/assets/icon/home.jpg" alt="">
					</span>
					<p class="links_p">活动宣传</p>
					<span class="enter_bottom">点击进入</span>
					<router-link class="home_a" to="/activity_publicity"></router-link>
				</li>
				<li class="l4">
					<span class="icon animate">
						<img src="@/assets/icon/home.jpg" alt="">
					</span>
					<p class="links_p">互动交流</p>
					<span class="enter_bottom">点击进入</span>
					<router-link class="home_a" to="/activity_publicity"></router-link>
				</li>
				<li class="l5">
					<span class="icon animate">
						<img src="@/assets/icon/home.jpg" alt="">
					</span>
					<p class="links_p">成果展示</p>
					<span class="enter_bottom">点击进入</span>
					<router-link class="home_a" to="/activity_publicity"></router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomePage',
	components: {}
}
</script>

<style scoped>
@import "@/style/enter_bottom.css";
/*格式化ul*/
ul {
	list-style: none;
	padding: 0;
}
/*主页*/
.home {
	height: 100vh;
	position: absolute;
}
/*主页背景*/
.bg {
	width: 100vw;
	height: 100vh;
	position: absolute;
	background-image: url("@/assets/background/home.png");
	background-position: center center;
	/* 背景图不平铺 */
	background-repeat: no-repeat;
	/* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
	background-attachment: fixed;
	/* 让背景图基于容器大小伸缩 */
	background-size: cover;
}
/*主页内容*/
.wrap {
	width: 80vw;
	height: 100vh;
	margin: auto;
	position: relative;
	transform: translateX(13%);
}
/*导航区*/
.links {
	position: absolute;
	top: 50%;
	left: 0;
	text-align: center;
	transform: translateY(-10vh);
	right: 0;

}
/*导航卡片链接*/
.home_a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/*导航卡片*/
.links li {
	width: 235px;
	color: white;
	display: inline-block;
	position: relative;
	border-radius: 10px;
	overflow: hidden;
	opacity: .9;
	box-shadow: 0 16px 24px 0 rgba(0, 0, 0, 0.4);
}

/*从第二个列表项开始，每个后续的列表项都会向左移动40像素。*/
.links li:nth-child(n+2) {
	margin-left: -40px;
}
.links li:nth-child(n) {
	transition: transform 0.5s;
}
.links li:nth-child(n):hover {
	opacity: 1;
	z-index: 2;
	transform: scale(1.1);
}
.l1 {
	background-color: #498044;
}
.l2 {
	top:70px;
	background-color: #a80606;
}
.l3 {
	top:-40px;
	background-color: #e37f00;
}
.l4 {
	top:90px;
	background-color: #e5835a;
}
.l5 {
	top:-20px;
	background-color: #0c8d3b;

}
/*导航卡片logo*/
.icon {
	width: 78px;
	height: 76px;
	margin: auto;
	display: block;
	z-index: 3;
}
/*导航卡片logo*/
.icon img {
	margin-top: 20px;
	display: block;
	width: 100%;
}
/*导航卡片文字*/
.links_p {
	width: auto;
	font-size: 30px;
	line-height: 30px;
	font-family: "等线 Light";
}


</style>

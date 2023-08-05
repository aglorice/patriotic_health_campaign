<template>
	<!--活动宣传-->
	<div>
		<!--顶部导航栏-->
		<ul class="nav">
			<li><span @click="activeFlag = 0" :class="{active:activeFlag === 0}">个人卫生</span></li>
			<li><span @click="activeFlag = 1" :class="{active:activeFlag === 1}">环境卫生</span></li>
			<li><span @click="activeFlag = 2" :class="{active:activeFlag === 2}">食品安全</span></li>
			<li><span @click="activeFlag = 3" :class="{active:activeFlag === 3}">疾病预防</span></li>
		</ul>

		<!--主要内容-->
		<div class="content">
			<div class="personal_hygiene" v-show="activeFlag === 0">
				<div class="container">
					<!--简介-->
					<div class="intro">
						<img src="@/assets/temp/4.jpg" alt="个人卫生简介" class="wow toRight" data-wow-duration="3s">
						<div class="wow toLeft" data-wow-duration="3s">
							<h2>个人卫生简介</h2>
							<p>
								生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好，或者没有健康饮食。个人卫生是需要自己注意并长期保持的一项事宜。个人卫生的保持与否，也与你个人的身体健康息息相关。既然个人卫生如此重要，小编就简单说说我们要如何保持个人卫生。
							</p>
						</div>
					</div>

					<!--图片文字-->
					<div class="cards">
						<div class="card">
							<div class="img">
								<a href="javascript:void(0);">
									<img src="@/assets/temp/11.jpg" alt="img">
								</a>
							</div>
							<h3><a href="javascript:void(0);">生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</a></h3>
						</div>
						<div class="card">
							<div class="img">
								<a href="javascript:void(0);">
									<img src="@/assets/temp/11.jpg" alt="img">
								</a>
							</div>
							<h3><a href="javascript:void(0);">生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</a></h3>
						</div>
						<div class="card">
							<div class="img">
								<a href="javascript:void(0);">
									<img src="@/assets/temp/11.jpg" alt="img">
								</a>
							</div>
							<h3><a href="javascript:void(0);">生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</a></h3>
						</div>
						<div class="card">
							<div class="img">
								<a href="javascript:void(0);">
									<img src="@/assets/temp/11.jpg" alt="img">
								</a>
							</div>
							<h3><a href="javascript:void(0);">生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</a></h3>
						</div>
						<div class="card">
							<div class="img">
								<a href="javascript:void(0);">
									<img src="@/assets/temp/11.jpg" alt="img">
								</a>
							</div>
							<h3><a href="javascript:void(0);">生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</a></h3>
						</div>
						<div class="card">
							<div class="img">
								<a href="javascript:void(0);">
									<img src="@/assets/temp/11.jpg" alt="img">
								</a>
							</div>
							<h3><a href="javascript:void(0);">生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</a></h3>
						</div>
						<div class="card">
							<div class="img">
								<a href="javascript:void(0);">
									<img src="@/assets/temp/11.jpg" alt="img">
								</a>
							</div>
							<h3><a href="javascript:void(0);">生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</a></h3>
						</div>
						<div class="card">
							<div class="img">
								<a href="javascript:void(0);">
									<img src="@/assets/temp/11.jpg" alt="img">
								</a>
							</div>
							<h3><a href="javascript:void(0);">生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</a></h3>
						</div>
					</div>

					<!--视频-->
					<div class="video">
						<video src="@/assets/temp/test.mp4" controls class="wow toRight" data-wow-duration="3s" />
						<div class="wow toLeft" data-wow-duration="3s">
							<h2>个人卫生简介</h2>
							<p>
								生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好，或者没有健康饮食。个人卫生是需要自己注意并长期保持的一项事宜。个人卫生的保持与否，也与你个人的身体健康息息相关。既然个人卫生如此重要，小编就简单说说我们要如何保持个人卫生。
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="environmental_hygiene" v-show="activeFlag === 1">
				<div class="container">
					<h1>环境卫生</h1>
				</div>
			</div>
			<div class="food_safety" v-show="activeFlag === 2">
				<div class="container">
					<h1>食品安全</h1>
				</div>
			</div>
			<div class="disease_prevention" v-show="activeFlag === 3">
				<div class="container">
					<h1>疾病预防</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {WOW} from 'wowjs';

export default {
	name: 'ActivityPublicity',
	data() {
		return {
			transitionName: 'slide-left',

			//导航栏激活标志
			activeFlag: 0,
		}
	},
	mounted() {
		new WOW().init();
	}
}
</script>

<style scoped>
/*引入页面切换动画*/
@import "@/style/animation.css";

/*取消ul默认样式*/
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.nav {
	/*使导航栏居中*/
	display: flex;
	justify-content: center;
	margin-top: 8vh;
}

.nav li {
	/*设置li宽高，防止字体变大影响其他元素位置*/
	width: 150px;
	height: 80px;

	/*使a标签在li中水平垂直居中*/
	display: flex;
	justify-content: center;
	align-items: center;
}

.nav li span {
	/*修改字体颜色*/
	color: #333;

	/*设置字体大小*/
	font-size: 18px;

	/*设置过渡*/
	transition: font-size 0.1s linear;

	cursor: pointer;
}

/*设置导航栏激活样式*/
.active {
	color: #01763a !important;
}

/*设置a标签划过样式*/
.nav li span:hover {
	color: #01763a;
	font-size: 20px;
}

/*设置内容区与顶部导航栏的距离*/
.content {
	margin-top: 1vh;

	/*防止横向动画产生横向滚动条*/
	overflow: hidden;
}

.content .intro {
	position: relative;
}

/*设置简介图片大小*/
.content .intro img {
	width: 50vw;
	border-radius: 10px;
	transform: translateX(10%);
}

.content .intro div {
	/*设置简介文字区域大小*/
	width: 45vw;
	height: 55vh;

	/*设置简介文字区域位置*/
	position: absolute;
	top: 20vh;
	left: 42vw;

	border-radius: 10px;
	background-color: #f2f2f2;
	box-sizing: border-box;

	/*参照父元素*/
	padding: 5%;
}

/*简介文字标题*/
.content .intro div h2 {
	font-weight: 400;
	text-align: center;
}

/*简介文字内容*/
.content .intro div p {
	line-height: 20px;
}

.cards {
	margin-top: 20vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

/*设置卡片大小*/
.cards .card {
	width: 408px;
	height: 350px;
	border-radius: 10px;
	background-color: #f2f2f2;
	margin-bottom: 20px;
	box-sizing: border-box;
	padding: 20px;
}

/*卡片中的图片*/
.cards .card .img {
	border-radius: 10px;
	overflow: hidden;
}
.cards .card .img img {
	width: 100%;
	height: 100%;
	background-position: center center;
	/* 背景图不平铺 */
	background-repeat: no-repeat;
	/* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
	background-attachment: fixed;
	/* 让背景图基于容器大小伸缩 */
	background-size: cover;
	transition: all 0.6s;
}
.cards .card .img img:hover {
	transform: scale(1.1);
}

/*卡片中的文字*/
.cards .card h3 a {
	font-size: 18px;
	color: #333;
	text-decoration: none;
}
.cards .card h3 a:hover {
	color: #01763a;
}

.video {
	display: flex;
	justify-content: space-evenly;
}

.video video {
	width: 45vw;
	border-radius: 10px;
}

.video div {
	width: 45vw;
	height: 50vh;
	background-color: #f2f2f2;
	border-radius: 10px;
	box-sizing: border-box;
	padding: 20px;
	text-align: center;
}

@keyframes toRight {
	from {
		opacity: 0;
		transform: translateX(-200px);
	}

	to {
		opacity: 1;
	}
}

.toRight {
	//animation: toRight 3s;
	animation-name: toRight;
}

@keyframes toLeft {
	from {
		opacity: 0;
		transform: translateX(200px);
	}

	to {
		opacity: 1;
	}
}

.toLeft {
	//animation: toLeft 3s;
	animation-name: toLeft;
}

@keyframes toDown {
	from {
		opacity: 0;
		transform: translateY(-200px);
	}

	to {
		opacity: 1;
	}
}

.toDown {
	//animation: toDown 3s;
	animation-name: toDown;
}
</style>

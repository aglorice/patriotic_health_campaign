<template>
	<div class="container">
		<!--简介-->
		<div class="intro">
			<img src="@/assets/temp/4.jpg" alt="个人卫生简介" class="wow toRight" data-wow-duration="2s">
			<div class="wow toLeft" data-wow-duration="2s">
				<h1>个人卫生简介</h1>
				<p>
					生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好，或者没有健康饮食。个人卫生是需要自己注意并长期保持的一项事宜。个人卫生的保持与否，也与你个人的身体健康息息相关。
				</p>
			</div>
		</div>

		<!--视频-->
		<div class="video">
			<Video :video-src="videoSrc"></Video>
		</div>

		<!--图片文字-->
		<div class="cards">
			<div class="card">
				<div class="img">
					<img src="@/assets/temp/11.jpg" alt="img">
				</div>
				<h3>生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</h3>
			</div>
		</div>
	</div>
</template>

<script>
import {WOW} from 'wowjs';
import Video from "@/components/video.vue";

export default {
	name: 'PersonalHygiene',
	components: {Video},
	data() {
		return {
			videoSrc: require('@/assets/temp/test.mp4')
		}
	},
	mounted() {
		new WOW({
			live: false
		}).init();
	}
}
</script>

<style scoped>
/*取消ul默认样式*/
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

.container {
	width: 85%;
	margin: 15vh auto;
}

.intro {
	width: 100%;
	position: relative;
}

/*设置简介图片大小*/
.intro img {
	width: 53%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.intro div {
	/*设置简介文字区域大小*/
	width: 53%;
	height: 55vh;

	/*设置简介文字区域位置*/
	position: absolute;
	top: 20vh;
	right: 0;

	/*参照父元素*/
	padding: 5%;

	box-sizing: border-box;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	background-color: #ffffff;
}

/*简介文字标题*/
.intro div h1 {
	font-weight: 400;
	letter-spacing: 3.2px;
}

.intro div h1::after {
	content: "";
	display: block;
	width: 210px;
	height: 4px;
	background: #ff0000;
	margin: 12px 0;
}

/*简介文字内容*/
.intro div p {
	line-height: 30px;
	letter-spacing: 3.2px;
	font-weight: lighter;
	text-indent: 2em;
}

.cards {
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

.video {
	width: 50vw;
	margin-top: 20vh;
}
</style>
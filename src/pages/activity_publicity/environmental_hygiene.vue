<template>
	<div class="container">
		<!--简介-->
		<div class="intro">
			<img src="@/assets/activity_publicity/environmental_hygiene/环境卫生.jpg" alt="环境卫生简介" class="wow toRight" data-wow-duration="2s">
			<div class="wow toLeft" data-wow-duration="2s">
				<h1>环境卫生简介</h1>
				<p>随着我国经济的发展，有效利用能源、减少环境污染、降低安全生产事故频次，防止突发环境事件，确保生命安全的重要性日益凸显。制定并执行环保政策和措施，致在保护环境的同时改善人民的生活质量，已经成为我国民生工程的关注点。环境卫生不仅关乎人们的生存环境，也影响着经济发展。</p>
			</div>
		</div>

		<div class="how">
			<h1><span  class="wow toDown" data-wow-duration="2s">如何保持个人卫生？</span></h1>
			<div class="content">
				<div class="item" v-for="(item, index) in maintainPersonalHygiene" :key="index">
					<div class="wow toRight" data-wow-duration="2s">
						<h2>{{index+1}}.{{item.title}}</h2>
						<p>{{item.content}}</p>
					</div>
					<img :src="item.img" :alt="item.title" class="wow toLeft" data-wow-duration="2s">
				</div>
			</div>
		</div>

		<div class="video">
			<h1><span  class="wow toDown" data-wow-duration="2s">相关视频</span></h1>
			<Video video-src="https://v17.dogevideo.com/vcloud/17/v/20190424/1556036075_818c4125ec9c8cbc7a7a8a7cc1601512/1037/7d515b22c4958598c0fbd1e6290a5ca5.mp4?vkey=DA8EF1&tkey=169154893267bd778138&auth_key=1691563332-8yTXzvy4ifUdqKv2-0-b6fbd2fabd7f615067b85fa85b8ae313" />
		</div>
	</div>
</template>

<script>
import {WOW} from 'wowjs';
import Video from "@/components/video.vue";

export default {
	name: 'PersonalHygiene',
	components: {Video},
	mounted() {
		new WOW({
			live: false
		}).init();
	},
	data() {
		return {
			maintainPersonalHygiene: [
				{
					title: '垃圾分类',
					content: '保护环境从垃圾分类做起，不乱扔垃圾，喝完的山楂树下饮料瓶不要乱扔，记得做好垃圾分类。',
					img: require('@/assets/activity_publicity/environmental_hygiene/垃圾分类.jpg')
				},
				{
					title: '减少污染',
					content: '不焚烧垃圾，少燃放烟花爆竹，抵制露天烧烤，少用化肥农药，避免噪声扰民。',
					img: require('@/assets/activity_publicity/environmental_hygiene/减少污染.jpg')
				},
				{
					title: '保护自然环境',
					content: '爱护山水林田湖草生态系统，积极参与义务植树，保护野生动植物，拒食珍稀野生动植物。',
					img: require('@/assets/activity_publicity/environmental_hygiene/保护自然环境.jpg')
				},
				{
					title: '参与环保实践',
					content: '积极传播生态环境保护和生态文明理念，参加各类环保志愿服务活动，主动为生态环境保护工作提出建议。',
					img: require('@/assets/activity_publicity/environmental_hygiene/参与环保实践.jpg')
				},
				{
					title: '低碳出行',
					content: '今天不开车，绿色出行，低碳0污染，与健康环保同行。',
					img: require('@/assets/activity_publicity/environmental_hygiene/低碳出行.jpg')
				},
				{
					title: '节约资源',
					content: '注意生活细节，节约用水，用电，外出就餐按量取餐，喝不完的山楂树下可以记得带回家，杜绝浪费哦。',
					img: require('@/assets/activity_publicity/environmental_hygiene/节约资源.jpg')
				}
			]
		}
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
	margin-bottom: 25vh;
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

.how,
.video {
	width: 100%;
	text-align: center;
	margin-top: 5vh;
}

.how h1,
.video h1 {
	margin: 0;
	font-size: 2.2em;
	letter-spacing: 0.2em;
	font-weight: lighter;
	margin-bottom: 5vh;
}

.how h1 span,
.video h1 span{
	display: block;
}

.how h1::after,
.video h1::after {
	content: "";
	display: block;
	width: 200px;
	height: 2px;
	background-color: #810404;
	margin: 20px auto 0 auto;
}

.how .content .item {
	display: flex;
}

.how .content .item > div {
	flex: 1;
	height: 40vh;
	padding: 40px;
	box-sizing: border-box;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	margin-bottom: 8vh;
}

.how .content .item > img {
	flex: 1;
	height: 40vh;
}

.how .content .item h2 {
	margin: 0;
	font-weight: normal;
	letter-spacing: 0.1em;
}

.how .content .item h2:after {
	content: "";
	display: block;
	width: 150px;
	height: 2px;
	background-color: #810404;
	margin: 10px auto 0 auto;
}

.how .content .item p {
	letter-spacing: 0.2em;
	text-indent: 2em;
	line-height: 2em;
	text-align: left;
	font-weight: lighter;
}
</style>
<template>
	<div class="container">
		<!--简介-->
		<div class="intro">
			<img src="@/assets/activity_publicity/personal_hygiene/4.jpg" alt="个人卫生简介" class="wow toRight" data-wow-duration="2s">
			<div class="wow toLeft" data-wow-duration="2s">
				<h1>个人卫生简介</h1>
				<p>
					生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好，或者没有健康饮食。个人卫生是需要自己注意并长期保持的一项事宜。个人卫生的保持与否，也与你个人的身体健康息息相关。
				</p>
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

		<!--图片文字-->
		<!--<div class="cards">
			<div class="card">
				<div class="img">
					<img src="@/assets/activity_publicity/11.jpg" alt="img">
				</div>
				<h3>生活中，我们常常会生病，而很多疾病，其实就是因为你平时做的卫生不够好</h3>
			</div>
		</div>-->
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
					title: '每天必洗漱',
					content: '常常会有这种情况，因为放假就一直宅在家里，过着颓废的日子。洗脸、刷牙什么的，都懒得动。这样的情况，很不利于个人卫生。要做到每天都能勤快地做好洗漱工作。',
					img: require('@/assets/activity_publicity/personal_hygiene/洗漱.jpg')
				},
				{
					title: '勤洗头、洗澡',
					content: '除了每天的洗漱，你还需保证勤洗头，洗澡。一般来说，洗头可以两三天洗一次，洗的太频繁对头皮不好。洗澡可以每天都洗，尤其是夏天，容易出汗。',
					img: require('@/assets/activity_publicity/personal_hygiene/洗澡.jpg')
				},
				{
					title: '饭前便后勤洗手',
					content: '相信便后洗手，很多人都能够做到。但是饭前洗手，那就不一定都能做到了。饭前便后都会沾染很多细菌，如果不注意，很容易就食入体内，引起疾病。所以，一定要注意饭前便后洗手。',
					img: require('@/assets/activity_publicity/personal_hygiene/洗手.jpg')
				},
				{
					title: '健康饮食',
					content: '饮食也是保证身体健康的一项很重要的事情。生活中很容易因为饮食不当，食入不健康的食品，引起食物中毒或者细菌感染。最好能够食用新鲜，安全的食品。',
					img: require('@/assets/activity_publicity/personal_hygiene/健康饮食.jpg')
				},
				{
					title: '勤快清洗自己的个人用品',
					content: '除了需要把自己清洗干净，对于你常常使用的个人用品也要勤清洗，尤其是一些贴身的物品，比如说浴巾，毛巾，内衣裤等等。这些物品的使用时间也有一定的限制，最好能够保证一段时间后更换。',
					img: require('@/assets/activity_publicity/personal_hygiene/清洗个人用品.jpg')
				},
				{
					title: '勤打扫卫生，常通风',
					content: '生活环境也是很重要的一块。最好能够经常清理，打扫自己的住所，尤其是卧室。一般呢，要保证卧室的通风，空气流通才能使卧室里有新鲜的空气，才能使人健康生活。',
					img: require('@/assets/activity_publicity/personal_hygiene/打扫卫生.jpg')
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
<template>
	<div class="container">
		<!--简介-->
		<div class="intro">
			<img src="@/assets/activity_publicity/disease_prevention/疾病预防.jpg" alt="疾病预防简介" class="wow toRight" data-wow-duration="2s">
			<div class="wow toLeft" data-wow-duration="2s">
				<h1>疾病预防简介</h1>
				<p>疾病预防即预防疾病(或伤害)和残疾发生，阻止或延缓其发展的一系列活动。预防的主要目的是消灭或消除疾病(或伤害)，或将疾病(或伤害)和残疾对生活质量的影响降到最低。</p>
			</div>
		</div>

		<div class="how">
			<h1><span  class="wow toDown" data-wow-duration="2s">如何预防疾病？</span></h1>
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
					title: '注意个人和环境卫生',
					content: '勤洗澡勤换衣物，经常清洗卧具洗具等与我们有高频率亲密接触的用具，保持环境和个人的干净卫生。',
					img: require('@/assets/activity_publicity/disease_prevention/注意个人和环境卫生.jpg')
				},
				{
					title: '饮食注重营养均衡、结构合理',
					content: '三餐定时定量，减少油腻、辛辣、生冷等刺激性食物，多吃水果蔬菜，注重维生素矿物质的摄入，需要时可以服用营养补充剂，全面补充所需营养素，如善存。',
					img: require('@/assets/activity_publicity/disease_prevention/饮食注重营养均衡.jpg')
				},
				{
					title: '保持愉悦的心情和积极乐观的心态',
					content: '面对难题和压力能及时进行舒缓和调节，良好的情绪能够起到正向的促进作用，对维持身体健康十分有益。',
					img: require('@/assets/activity_publicity/disease_prevention/保持愉悦的心情.jpg')
				},
				{
					title: '增加户外运动，增强体质',
					content: '上班的时候久坐、休息的时候宅是当前人们的常态，生命在于运动，长时间的缺乏运动身体容易虚弱，精神状态也会不佳，生病的概率也会升高。',
					img: require('@/assets/activity_publicity/disease_prevention/增加户外运动.jpg')
				},
				{
					title: '生活规律，早睡早起',
					content: '减少熬夜，每日保证足量充分的睡眠，固定睡觉时间和起床时间，使身体形成固有的生物钟，白天昏昏沉沉的现象就会减少许多。',
					img: require('@/assets/activity_publicity/disease_prevention/生活规律.jpg')
				},
				{
					title: '固定时间进行体检',
					content: '有很多疾病早期并没有明显的表现症状，到表现出症状时往往已经较为严重，治疗上的难度也大大增加了，因此提倡大家进行固定体检，早发现早治疗，通过及时的用药避免病情的恶化，也不失为是预防疾病的一个方法。',
					img: require('@/assets/activity_publicity/disease_prevention/固定时间进行体检.jpg')
				},
				{
					title: '培养兴趣爱好',
					content: '培养一两项兴趣爱好，如唱歌、养花、画画、阅读、舞蹈等均可，让生活变得充实起来，减少浑浑噩噩和胡思乱想，有利于养成积极的生活状态，对于预防疾病也是很有益处的。',
					img: require('@/assets/activity_publicity/disease_prevention/培养兴趣爱好.jpg')
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
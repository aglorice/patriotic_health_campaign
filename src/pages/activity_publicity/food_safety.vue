<template>
	<div class="container">
		<!--简介-->
		<div class="intro">
			<img src="@/assets/activity_publicity/food_safety/食品安全.jpg" alt="食品安全简介" class="wow toRight" data-wow-duration="2s">
			<div class="wow toLeft" data-wow-duration="2s">
				<h1>食品安全简介</h1>
				<p>食品安全指食品无毒、无害，符合应当有的营养要求，对人体健康不造成任何急性、亚急性或者慢性危害。根据倍诺食品安全定义，食品安全是“食物中有毒、有害物质对人体健康影响的公共卫生问题”。俗话说得好“民以食为天，食以安为先”，食品安全是指食品质量状况对食用者健康、安全的保证程度。</p>
			</div>
		</div>

		<div class="how">
			<h1><span  class="wow toDown" data-wow-duration="2s">如何保证食品安全？</span></h1>
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
	name: 'FoodSafety',
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
					title: '保持清洁',
					content: '接触食物之前都要洗手，洗手时要使用流动的水并坚持七步洗手法；清洗餐具和厨具时也要用流动的水一冲、二洗、三消毒；保持厨房空气流通，地面、洗菜池和冰箱内外要清洁；洗碗布、抹布用后，要及时彻底清洗消毒，并经常更换。',
					img: require('@/assets/activity_publicity/food_safety/保持清洁.jpg')
				},
				{
					title: '生熟分开',
					content: '冰箱中食物要生熟分开，避免交叉污染。生的肉、禽、蛋、海产品、蔬菜等要用适宜的容器装好后放在冷藏室或冷冻室底层；可以直接食用的乳制品、熟肉制品、罐头、饮料和水果等要放在冷藏室或冷冻室的上层；处理食物的案板、刀具也要生熟分开使用，用后分别清洗消毒。',
					img: require('@/assets/activity_publicity/food_safety/生熟分开.jpg')
				},
				{
					title: '食物要彻底煮熟烧透',
					content: '制作食物时一定要彻底煮熟烧透，剩饭剩菜，要分装放凉后装冰箱，并且保存食物不超过3天，再次食用时要彻底加热煮沸3~5分钟。',
					img: require('@/assets/activity_publicity/food_safety/食物要彻底煮熟烧透.jpg')
				},
				{
					title: '在安全的温度下保存食物',
					content: '安全的温度是指5℃以下，60℃以上的条件，在这个温度范围下，绝大多数微生物可减缓生长繁殖的速度，或者停止生长。这要求我们在室温下熟食存放的时间不得超过2小时，生肉类不要反复冻融，定期清理冰箱， 不买、不吃超过保质期的食品。',
					img: require('@/assets/activity_publicity/food_safety/在安全的温度下保存食物.jpg')
				},
				{
					title: '使用安全的水和食物原料',
					content: '选择新鲜的、没有霉变的粮食、薯类、豆类、坚果和果蔬等， 适当清洗、削皮，降低风险。食品制作的全过程要使用安全的水源。',
					img: require('@/assets/activity_publicity/food_safety/使用安全的水和食物原料.jpg')
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
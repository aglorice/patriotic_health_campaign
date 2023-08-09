<template>
	<div>
		<div class="swiper_home">
			<CarouselImg :images="images"/>
		</div>
		<div class="mid_box">
			<div class="bj_box">
				<div class="bj_box_title">
					<h1>背景介绍</h1>
					<DividerComponent>✨</DividerComponent>
					<p>爱国卫生运动（Patriotic Health
						Movement）是中国共产党把群众路线运用于卫生防病工作的成功实践。中国共产党在领导人民革命实践中，十分重视开展群众的卫生运动，以预防和减少疾病，保护人民健康。</p>
					<p>爱国卫生运动，是中国卫生工作的伟大创举，反映了中国卫生工作的鲜明特色。
						讲究卫生，预防、减少以至消灭疾病，提高健康水平。随着人们文化卫生素质的提高与文明卫生习惯的养成，对社会主义四化建设，必将起到巨大推动作用，为把中国建设成为一个文明、卫生、健康、幸福的现代化国家作出更大的贡献。</p>
					<router-link to="/activity_introduction">详细介绍 --></router-link>
				</div>
				<div class="bj_img">
					<div class="bj_img_items">
						<img src="@/assets/background/1.png" alt="">
						<img src="@/assets/background/1.png" alt="">
						<img src="@/assets/background/1.png" alt="">
					</div>
				</div>

			</div>
			<div class="xs_box">
				<div class="xs_box_title">
					<h1>几步洗手法</h1>
					<p>如何如何洗手如何洗手如何洗手如何洗手如何洗手如何洗手如何洗手如何洗手如何洗手洗手</p>
				</div>
				<div class="xs_box_content">
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
					<div class="xs_box_items">
						<div class="xs_title">1</div>
						<span>
							<img class="_img" src="@/assets/home/10.png" alt="">
						</span>
						<h4>洗手洗手洗手</h4>
					</div>
				</div>
			</div>
			<div class="xc_box">
				<div class="xc_box_img">
					<img src="@/assets/background/123.png">
				</div>
				<div class="xc_box_content">
					<h2>活动宣传</h2>
					<ul>
						<li>个人卫生</li>
						<li>个人卫生</li>
						<li>个人卫生</li>
						<li>个人卫生</li>
					</ul>
				</div>
			</div>
			<div class="result_show_box">
				<DividerComponent>成果展示</DividerComponent>
				<div class="show_items">
					<div class="show_item">
						<img src="@/assets/result_show/887.jpg" alt="">
						<div class="show_item_content">
							<h3>成果展示</h3>
							<p>除成果展示成果展示成果展示成果展示四害</p>
						</div>
					</div>
					<div class="show_item">
						<img src="@/assets/result_show/887.jpg" alt="">
						<div class="show_item_content">
							<h3>成果展示</h3>
							<p>成成果展示成果展示成果展示成果展示果展示</p>
						</div>
					</div>
					<div class="show_item">
						<img src="@/assets/result_show/887.jpg" alt="">
						<div class="show_item_content">
							<h3>成果展示</h3>
							<p>成果展成果展示成果成果展示成果展示展示成果展示示</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import CarouselImg from "@/components/carousel_img";
import DividerComponent from "@/components/divider";

export default {
	name: 'HomePage',
	data() {
		return {
			images: [
				require("@/assets/background/1.png"),
				require("@/assets/background/details.png"),
				require("@/assets/background/introduction.jpg"),
			]
		}
	},
	components: {
		DividerComponent,
		CarouselImg
	}
}
</script>

<style scoped>
.swiper_home {
	width: 100%;
	height: 100vh;
}
.mid_box {
	max-width: 80%;
	margin: 0 auto;
}
.bj_box_title {
	text-align: center;
	margin: 60px 0 60px 0;
}
.bj_box_title h1 {
	font-size: 2.2em;
	letter-spacing: 0.2em;
	font-weight: normal;
}
.bj_box_title p {
	font-size: 0.9em;
	line-height: 1.6em;
	letter-spacing: 0.1em;
	color: #666;
}
.bj_box_title a {
	text-decoration: none;
	margin-top: 40px;
	display: block;
	color: #a80202;
}
.bj_img_items {
	display: flex;
}
.bj_img_items img {
	width: calc(100% / 3);
}
.xs_box {
	background: #ffffff;
	padding: 60px 0;
}
.xs_box_title {
	text-align: center;
	margin-bottom: 60px;
}
.xs_box_title h1 {
	font-size: 2.2em;
	letter-spacing: 0.2em;
	font-weight: lighter;
}
.xs_box_title h1::after {
	content: "";
	display: block;
	width: 220px;
	height: 2px;
	background: #a80202;
	margin: 20px auto;
}
.xs_box_title p {
	font-size: 0.9em;
	line-height: 1.6em;
	letter-spacing: 0.1em;
	color: #666;
}
.xs_box_content {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
}
.xs_box_items {
	background: #F8F9FE;
	text-align: center;
	margin-top: 30px;
	position: relative;
	border-radius: 5px;
	padding: 20px;
	max-height: 225px;
	min-width: calc(100% / 5);
	box-shadow: 0 0 10px #ccc;
}
.xs_box_items span {
	background: #7a2121;
	display: inline-block;
	border: 5px solid #fff;
	border-radius: 100px;
	height: 100px;
	width: 100px;
	padding: 10px;
	margin: 20px;
	box-shadow: 0 0 10px #ccc;
}
._img {
	width: 100px;
	height: 100px;
}
.xs_title {
	position: absolute;
	top: 3px;
	left: 10px;
	background: #325c6e;
	color: #fff;
	padding: 5px 10px;
	border-radius: 50%;
	box-shadow: 0 0 10px #e04b4b;
}
.show_items {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.show_item {
	width: calc(100% / 3 - 5px);
	display: flex;
	margin-top: 30px;
	margin-bottom: 20px;
	flex-direction: column;
	position: relative;
	cursor: pointer;
}
.show_item:hover > img {
	filter: blur(2px);
}
.show_item:hover > .show_item_content{
	bottom: 0;
	transition: all 0.5s;
}
.show_item:nth-child(n+2) {
	margin-left: 5px;
}
.show_item img {
	width: 100%;
}
.show_item_content {
	width: 100%;
	background: #ffffff;
	position: absolute;
	bottom: -100%;

}
.show_item_content h3 {
	font-size: 1em;
	letter-spacing: 0.2em;
	text-align: center;
	color: #7c0202;
	padding: 10px;
}
.xc_box {
	display: flex;
	margin: 20px;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}
.xc_box_img {
	flex: 2;
}
.xc_box_img img {
	width: 100%;
}
.xc_box_content {
	flex: 1;
}
.xc_box_content h2 {
	font-size: 2.2em;
	letter-spacing: 0.2em;
	text-align: center;
	color: #7c0202;
	padding: 10px;
}
.xc_box_content ul {
	list-style: none;
	padding: 0;
}
.xc_box_content ul li {
	font-size: 1.3em;
	line-height: 1.6em;
	letter-spacing: 0.5em;
	color: #666;
	text-align: center;
}
.xc_box_content ul li::before {
	content: "•";
	margin-right: 20px;
	color: #830101;
}
.xc_box_content ul li:hover {
	color: #830101;
	cursor: pointer;
}
</style>

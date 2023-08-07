<template>
	<div class="app">
		<div class="introduction">
			<div class="content">
				<p class="content_p">活动简介</p>
				<span>
					爱国卫生运动是指强化全民健康意识，养成文明卫生习惯，改善卫生条件，减少健康危害因素，提高公民健康水平的社会性、群众性卫生活动。
				</span>
			</div>
		</div>
		<div class="mid_content">
			<div class="details_box">
				<div class="details_content">
					<div class="details_box_content">
						<div class="left">
							<h1>详细介绍</h1>
							<h4>动员起来，讲究卫生，减少疾病，提高健康水平，粉碎敌人的细菌战争<span> ---毛泽东</span></h4>
							<p>爱国卫生运动（Patriotic Health
								Movement）是中国共产党把群众路线运用于卫生防病工作的成功实践。中国共产党在领导人民革命实践中，十分重视开展群众的卫生运动，以预防和减少疾病，保护人民健康。</p>
							<p>爱国卫生运动，是中国卫生工作的伟大创举，反映了中国卫生工作的鲜明特色。
								讲究卫生，预防、减少以至消灭疾病，提高健康水平。随着人们文化卫生素质的提高与文明卫生习惯的养成，对社会主义四化建设，必将起到巨大推动作用，为把中国建设成为一个文明、卫生、健康、幸福的现代化国家作出更大的贡献。</p>
						</div>
						<div class="right">
						</div>
					</div>

				</div>

			</div>
			<div class="time_line_box">
				<div class="time_line">
					<h1 class="time_line_h1">发展历史</h1>
					<span class="time_icon"><img src="@/assets/icon/time.png" alt=""></span>
					<p>中国共产党在领导人民革命实践中，十分重视开展群众的卫生运动，以预防和减少疾病，保护人民健康。爱国卫生运动，是我国卫生工作的伟大创举，反映了中国卫生工作的鲜明特色。</p>
					<TimeLine :time-data-list="time_event"/>
				</div>
			</div>
			<div class="man">
				<div class="man_box">
					<div class="man_title">
						<h1>伟人参与</h1>
					</div>
					<div class="man_content">
						<div class="left_man">
							<div class="_man_box">
								<h1>毛泽东</h1>
								<h4></h4>
								<p>毛泽东强调，重视卫生、防疫和医疗工作，发展中国的医药科学，培养中国特色的医疗卫生队伍，是“一项重大的政治任务”，应极力发展这项工作。</p>
								<a href="">查看更多 ——></a>
							</div>
							<div class="man_icon">
								<img src="@/assets/icon/mzd.jpg" alt="">
							</div>
						</div>
						<div class="right_man">
							<div class="_man_box">
								<h1>周恩来</h1>
								<p>新中国成立后，周恩来在担任中央人民政府政务院（1954年9月后称国务院）总理期间，曾先后兼任多项领导职务，其中一项就是兼任中央爱国卫生运动委员会主任，领导全国的卫生防疫工作。</p>
								<a href="">查看更多 ——></a>
							</div>
							<div class="man_icon">
								<img src="@/assets/icon/zel.png" alt="">
							</div>
						</div>
					</div>

				</div>

			</div>
		</div>
	</div>
</template>

<script>
import TimeLine from "@/components/time_line";

export default {
	name: 'ActivityIntroduction',
	data() {
		return {
			time_event: [
				{
					time: "1949年",
					event: "1949年，贯彻预防为主卫生工作方针，继续开展群众性卫生运动。1952年春，美帝国主义在侵朝战争中，对朝鲜和我国发动了细菌战争。在保家卫国的浪潮中，推动了群众性卫生防疫运动的深入发展。人民群众把这项伟大的运动称之为“爱国卫生运动”。党中央肯定了这个名称并指示各级领导机构，以后统称为“爱国卫生运动委员会”。"
				},
				{
					time: "1949-1952年",
					event: "在1949-1952年，即国民经济恢复期间，为了改变旧中国不卫生状况和传染病严重流行的现实，在全国普遍开展了群众性卫生运动。在抗美援朝，粉碎美帝细菌战争期间，在中央防疫委员会的领导下，各地迅速掀起了群众性卫生运动的新高潮，即“除四害运动”。"
				},
				{
					time: "1953-1966年",
					event: "在1953-1966年，即社会主义改造和建设时期，当时政务院发出继续开展爱国卫生运动的指示，要求着重抓好城市厂矿，并把突击活动与经常保洁结合起来。随着工作的开展，不少厂矿建立了清洁队，卫生扫除日等各种制度；保持车间、居室、食堂、厕所的内、外环境清洁整齐，从而使职工患病率逐渐下降，健康水平有所提高，促进了生产任务的发展。"
				},
				{
					time: "1966-1976年",
					event: "1966-1976年，“文化大革命”时期，许多卫生防保，包括各级爱国卫生运动委员会和其办事机构被撤并，人员有的被裁减，有的被改行；有些工作被迫处于停顿状态，致使许多城乡的卫生面貌开始恶化，疫情回升。此种现象反映到党中央，当时，周恩来同志多次指示，要继续开展爱国卫生运动，并亲自组织指导防疫队和支援西北地区的巡回医疗队，控制传染病流行，改善缺医少药和不卫生的状况。"
				},
				{
					time: "1978-1995年",
					event: "1978-1995年，我国进入了改革开放时期。党的十一届三中全会以来，爱国卫生运动进入了一个新的历史时期。1978年4月，国务院发出《关于坚持开展爱国卫生运动的通知》，要求各地爱国卫生运动委员会及其办事机构，把卫生运动切实领导起来。通知指出，爱国卫生运动是移风易俗、改造国家的一场深刻革命。"
				},
				{
					time: "2015年",
					event: "1月13日电 国务院近日印发《关于进一步加强新时期爱国卫生工作的意见》（以下简称《意见》），就做好新形势下的爱国卫生工作提出明确要求。这是国务院时隔25年又一次专题印发指导开展爱国卫生工作的重要文件。"
				},
				{
					time: "2020年",
					event: "2020年3月2日习近平总书记在北京考察新冠肺炎防控科研攻关工作时强调：“坚持开展爱国卫生运动”；在浙江考察时强调：“要深入开展爱国卫生运动，推进城乡环境整治，完善公共卫生设施，提倡文明健康、绿色环保的生活方式”。爱国卫生运动是中国人民的一项伟大创举，是确保人民群众生命安全和身体健康的传家宝。新时代，我们要继续用好这一传家宝，把爱国卫生运动提高到新水平。"
				},
				{
					time: "2022年",
					event: "2022年是爱国卫生运动70周年。爱国卫生运动不是简单的清扫卫生，更多应该从人居环境改善、饮食习惯、社会心理健康、公共卫生设施等多个方面开展工作，提倡文明健康、绿色环保的生活方式。"
				}
			]
		}
	},
	components: {
		TimeLine,
	}
}
</script>

<style scoped>
/*顶部大图*/
.app {
	top: 0;
}

.introduction {
	position: relative;
	width: 100%;
	height: 80vh;
	color: white;
	/* 背景图不平铺 */
	/* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
	background: url("@/assets/background/1.png") no-repeat fixed top center;
	/* 让背景图基于容器大小伸缩 */
	background-size: cover;
}

.content {
	position: absolute;
	top: 75%;
	left: 100px;
	right: 50%;
	transform: translateY(-50%);
}

.content span {
	letter-spacing: 0.2em;
	text-indent: 2em;
}

.content_p {
	font-weight: lighter;
	letter-spacing: 0.3em;
	font-size: 2.4em;
	margin-bottom: 20px;
	padding-bottom: 10px;
	padding-left: 10px;
	border-bottom: 2px solid #ff0000;
	border-left: 15px solid #ff0000;
}

.time_line {
	/*transform: translate(50%, 0);    !* 50%为自身尺寸的一半 *!*/
	max-width: 80vw;
	margin: 0 auto;
	text-align: center;
}

.time_line_h1 {
	font-size: 2.4em;
	letter-spacing: 0.4em;
	font-weight: lighter;
	margin-bottom: 20px;
	padding-bottom: 10px;
}

.time_line p {
	font-size: 1em;
	letter-spacing: 0.2em;
	font-weight: lighter;
	margin-bottom: 20px;
	padding: 30px;
}

/*详细介绍*/
.details_box {
	margin-top: 40px;
	border-bottom: 1px salmon solid;
}

.details_content {
	max-width: 80vw;
	margin: 0 auto;
}

.right {
	flex: 1;
	background: url("@/assets/background/details.png") no-repeat top center;
	/* 让背景图基于容器大小伸缩 */
	background-size: cover;
}

.left {
	flex: 3;
}

.left h1 {
	font-weight: normal;
	letter-spacing: 0.2em;
}

.left h4 span {
	font-size: 1em;
	letter-spacing: 0.2em;
	font-weight: lighter;
}

.left h1::after {
	content: "";
	display: block;
	width: 5em;
	height: 4px;
	background: #ff0000;
	margin: 12px 0;
}

.left p {
	font-size: 1em;
	letter-spacing: 0.2em;
	font-weight: lighter;
	text-indent: 2em;
	line-height: 2em;
}

.details_box_content {
	display: flex;
	padding: 30px;
}

.time_icon {
	border-radius: 50%;
	border: 2px dashed #ff0000;
}

/*人物介绍*/
.man {
	background-color: #e7e7e7;
	padding-top: 20px;
}

.man_title {
	text-align: center;
}

.man_title h1 {
	letter-spacing: 0.3em;
	font-weight: lighter;
	margin: 0;
	padding: 10px;
}

.man_title h1::before {
	width: 100px;
	content: "";
	display: block;
	height: 3px;
	margin: 0 auto;
	background: #7c0202;
	transform: translateY(-30px);
}
.man_title h1::after {
	width: 200px;
	content: "";
	display: block;
	height: 3px;
	margin: 0 auto;
	background: #7c0202;
	transform: translateY(30px);
}

.man_content {
	padding-bottom: 50px;
	min-width: 80vw;
	margin: auto 0;
	display: flex;
}

.man_title {
	margin-bottom: 60px;
}
.left_man {
	flex: 1;
	display: flex;
	padding: 20px;
	border: 3px #960505 solid;
	border-right: 0;
}

.right_man {
	flex: 1;
	display: flex;
	padding: 20px;
	border: 3px #960505 solid;
}
._man_box h1{
	letter-spacing: 0.3em;
	font-size: 26px;
	margin-bottom: 30px;
}
._man_box h1::after {
	content: "";
	display: block;
	width: 4em;
	transform: translate(0, 10px);
	height: 3px;
	background: #ff0000;

}
._man_box p {
	font-weight: lighter;
	letter-spacing: 0.2em;
	margin-bottom: 40px;
}
.man_icon img{
	width: 200px;
}
._man_box a {
	text-decoration: none;
	color: #a10000;
}

</style>

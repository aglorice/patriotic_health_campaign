<template>
	<div class='footer'>
		<ul class="navigation_ul">
			<li class="li">
				<router-link to="/home">主页</router-link>
			</li>
			<li class="li">
				<router-link to="/activity_introduction">活动介绍</router-link>
			</li>
			<li class="li">
				<router-link to="/activity_publicity">活动宣传
				</router-link>
			</li>
			<li class="li">
				<router-link to="/interaction">互动交流</router-link>
			</li>
			<li class="li">
				<router-link to="/results_show">成果展示</router-link>
			</li>
		</ul>
		<DividerComponent contentPosition="center" />
		<div class="footer_mid">
			<div class="footer_img">
				<img src="@/assets/background/introduction.jpg" alt="">
			</div>
			<div class="footer_box">
				<div class="footer_box_1">
					<h4 class="footer_title">活动宣传</h4>
					<ul class="footer_ul">
						<li class="_li">
							<router-link to="/activity_publicity/personal_hygiene">个人卫生</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/environmental_hygiene">环境卫生</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/food_safety">食品安全</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/disease_prevention">疾病预防</router-link>
						</li>
					</ul>
				</div>
				<div class="footer_box_2">
					<h4 class="footer_title">活动宣传</h4>
					<ul class="footer_ul">
						<li class="_li">
							<router-link to="/activity_publicity/personal_hygiene">个人卫生</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/environmental_hygiene">环境卫生</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/food_safety">食品安全</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/disease_prevention">疾病预防</router-link>
						</li>
					</ul>
				</div>
				<div class="footer_box_2">
					<h4 class="footer_title">活动宣传</h4>
					<ul class="footer_ul">
						<li class="_li">
							<router-link to="/activity_publicity/personal_hygiene">个人卫生</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/environmental_hygiene">环境卫生</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/food_safety">食品安全</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/disease_prevention">疾病预防</router-link>
						</li>
					</ul>
				</div>
				<div class="footer_box_2">
					<h4 class="footer_title">活动宣传</h4>
					<ul class="footer_ul">
						<li class="_li">
							<router-link to="/activity_publicity/personal_hygiene">个人卫生</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/environmental_hygiene">环境卫生</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/food_safety">食品安全</router-link>
						</li>
						<li class="_li">
							<router-link to="/activity_publicity/disease_prevention">疾病预防</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer_bottom">
			<p>Copyright © 2023 by aglorice. All Rights Reserved.</p>
		</div>
	</div>
</template>

<script>
import DividerComponent from "@/components/divider";
export default {
	name: "FooterPage",
	components: {DividerComponent}
}
</script>

<style scoped>
.footer {
	height: 300px;
	text-align: center;
	font-size: 16px;
	padding: 0px 100px;
	position: relative;
	background-color: #e1e0e0;
}

.footer {
	cursor: pointer;
}

.navigation_ul {
	list-style: none;
	padding-top: 30px;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}

.li {
	padding: 0px 20px;
}

.li a {
	color: #000000;
	text-decoration: none;
	font-size: 16px;
	font-weight: bolder;
	letter-spacing: 0.2em;
}

.li a:hover {
	color: #790404;
}

.li:nth-child(n+2)::before {
	content: "";
	display: inline-block;
	margin-right: 36px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: #790404;
}
.footer_mid {
	transform: translateY(30px);
	margin: 0 auto;
	max-width: 70%;
	display: flex;
}
.footer_box {
	display: flex;
	flex: 7;
}
.footer_box_1 {
	flex: 1;
}
.footer_box_2 {
	flex: 1;
}
.footer_img {
	flex: 2;
}
.footer_img  img{
	width: 200px;
}
.footer_ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
._li a{
	color: #000000;
	text-decoration: none;
	font-size: 14px;
	letter-spacing: 0.2em;
}
._li a:hover {
	color: #790404;
}
/*._li a::before {*/
/*	content: "";*/
/*	display: inline-block;*/
/*	margin-right: 10px;*/
/*	width: 5px;*/
/*	height: 5px;*/
/*	border-radius: 50%;*/
/*	background-color: #6e0000;*/
/*}*/
._li {
	margin: 6px 0px;
}
.footer_title {
	font-size: 15px;
	letter-spacing: 0.1em;
	margin: 0 0 4px;
}
.footer_bottom {
	position: absolute;
	width: calc(100% - 200px);
	bottom: 0;
}
.footer_bottom p {
	font-size: 12px;
	color: #000000;
	margin: 0;
	padding: 10px 0px;
}
</style>

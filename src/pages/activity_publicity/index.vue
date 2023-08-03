<template>
	<!--活动宣传-->
	<div>
		<!--顶部导航栏-->
		<ul class="nav">
			<li>
				<router-link to="/activity_publicity/personal_hygiene" active-class="router-link-active">个人卫生</router-link>
			</li>
			<li>
				<router-link to="/activity_publicity/environmental_hygiene" active-class="router-link-active">环境卫生</router-link>
			</li>
			<li>
				<router-link to="/activity_publicity/food_safety" active-class="router-link-active">食品安全</router-link>
			</li>
			<li>
				<router-link to="/activity_publicity/disease_prevention" active-class="router-link-active">疾病预防</router-link>
			</li>
		</ul>

		<!--主要内容-->
		<div class="content">
			<transition :name="transitionName" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ActivityPublicity',
	data() {
		return {
			transitionName: 'slide-left'
		}
	},
}
</script>

<style scoped>
/*调整过渡动画的持续时间*/
/*
  页面进入的动画
*/
.slide-left-enter {
	opacity: 0;
	-webkit-transform: translate(0px, 30px);
	transform: translate(0px, 30px);
}
.slide-left-enter-active{
	transition: all .5s ease;
}
.slide-left-leave-to{
	opacity: 0;
	-webkit-transform: translate(0px, -30px);
	transform: translate(0px, -30px);
}
.slide-left-leave-active {
	transition: all .5s ease;
}

.nav {
	/*取消ul默认样式*/
	list-style: none;
	margin: 0;
	padding: 0;

	/*使导航栏居中*/
	display: flex;
	justify-content: center;
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

.nav a {
	/*取消a标签下划线*/
	text-decoration: none;

	/*修改字体颜色*/
	color: #333;

	/*设置字体大小*/
	font-size: 18px;

	/*设置过渡*/
	transition: font-size 0.1s linear;
}

.router-link-active {
	color: #01763a !important;
}

/*设置a标签划过样式*/
.nav a:hover {
	color: #01763a;
	font-size: 20px;
}
</style>

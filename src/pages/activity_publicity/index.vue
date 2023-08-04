<template>
	<!--活动宣传-->
	<div>
		<!--顶部导航栏-->
		<NavigationBar/>
		<ul class="nav">
			<li><span @click="activeFlag = 0" :class="{active:activeFlag === 0}">个人卫生</span></li>
			<li><span @click="activeFlag = 1" :class="{active:activeFlag === 1}">环境卫生</span></li>
			<li><span @click="activeFlag = 2" :class="{active:activeFlag === 2}">食品安全</span></li>
			<li><span @click="activeFlag = 3" :class="{active:activeFlag === 3}">疾病预防</span></li>
		</ul>

		<!--主要内容-->
		<div class="content">
			<transition :name="transitionName" mode="out-in">
				<div class="personal_hygiene" v-show="activeFlag === 0">
					<div class="container">
						<h1>个人卫生</h1>
					</div>
				</div>
			</transition>
			<transition :name="transitionName" mode="out-in">
				<div class="environmental_hygiene" v-show="activeFlag === 1">
					<div class="container">
						<h1>环境卫生</h1>
					</div>
				</div>
			</transition>
			<transition :name="transitionName" mode="out-in">
				<div class="food_safety" v-show="activeFlag === 2">
					<div class="container">
						<h1>食品安全</h1>
					</div>
				</div>
			</transition>
			<transition :name="transitionName" mode="out-in">
				<div class="disease_prevention" v-show="activeFlag === 3">
					<div class="container">
						<h1>疾病预防</h1>
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import NavigationBar from '@/components/navigation_bar.vue'
export default {
	name: 'ActivityPublicity',
	data() {
		return {
			transitionName: 'slide-left',

			//导航栏激活标志
			activeFlag: 0
		}
	},
	components: {
		NavigationBar
	},
}
</script>

<style scoped>
/*引入页面切换动画*/
@import "@/style/animation.css";

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

.nav li span {
	/*修改字体颜色*/
	color: #333;

	/*设置字体大小*/
	font-size: 18px;

	/*设置过渡*/
	transition: font-size 0.1s linear;

	cursor: pointer;
}

.active {
	color: #01763a !important;
}

/*设置a标签划过样式*/
.nav li span:hover {
	color: #01763a;
	font-size: 20px;
}
</style>

<template>
	<div id="app">
		<NavigationBar v-show="$route.path !== '/'" />
		<transition :name="transitionName" mode="out-in">
			<router-view></router-view>
		</transition>
		<Footer v-show="$route.path !== '/'" />
	</div>
</template>

<script>
import NavigationBar from "@/components/navigation_bar.vue";
import Footer from "@/components/footer.vue";

export default {
	name: 'App',
	components: {NavigationBar, Footer},
	data() {
		return {
			transitionName: 'slide-left'
		}
	},
}
</script>

<style>
/*引入初始化样式*/
@import "@/style/normalize.css";
/*引入页面切换动画*/
@import "@/style/animation.css";
/*全局字体样式*/
body {
	font-family: "SourceSansPro-Regular", "微软雅黑", "Microsoft Yahei", "Helvetica Neue", Helvetica, Arial,
	sans-serif;

	/*防止左右动画产生横向滚动条*/
	overflow-x: hidden;
}
</style>

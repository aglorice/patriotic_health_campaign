<template>
	<div id="app">
		<transition :name="transitionName" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'App',
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
.container {
	width: 1200px;
	margin: 0 auto;
}
</style>

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
@import "@/style/normalize.css";

.container {
	width: 1200px;
	margin: 0 auto;
}
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
</style>

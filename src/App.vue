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
</style>

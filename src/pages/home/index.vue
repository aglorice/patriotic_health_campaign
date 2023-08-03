<template>
	<div>
		<h1>HomePage</h1>
		<!--  导航栏-->
		<NavigationBar/>
	</div>
</template>

<script>
import NavigationBar from "@/components/navigation_bar";

export default {
	name: 'HomePage',
	components: {
		NavigationBar
	}
}
</script>

<style scoped>
a {
	margin: 5px;
}
</style>

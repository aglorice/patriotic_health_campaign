<template>
	<div>
		<NavigationBar/>
		<div class="test"></div>
	</div>
</template>

<script>
import NavigationBar from "@/components/navigation_bar";

export default {
	name: 'HomePage',
	components: {
		NavigationBar,
	}
}
</script>

<style scoped>
.test {
	height: 10000px;
}
</style>

<template>
	<div>
		<ul>
			<li>
				<router-link to="/">Home</router-link>
			</li>
			<li>
				<router-link to="/activity_introduction">ActivityIntroduction</router-link>
			</li>
			<li>
				<router-link to="/activity_publicity">ActivityPublicity</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "NavigationBar"
}
</script>

<style scoped>

</style>

<template>
	<div class="vote">
		<Vote :data="voteData" />
	</div>
</template>

<script>
import Vote from "@/components/vote.vue";

export default {
	name: "InteractionPage",
	components: {Vote},
	data() {
		return {
			voteData: {
				name: ['方案1', '方案2', '方案3', '方案4', '方案5'],
				value: [5, 20, 36, 10, 20]
			}
		}
	}
}
</script>

<style scoped>
.vote {
	width: 500px;
	height: 400px;
}
</style>

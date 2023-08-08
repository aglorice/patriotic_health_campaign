<template>
	<div ref="video" class="video"></div>
</template>

<script>
import DPlayer from "dplayer";

export default {
	name: 'VideoPage',
	props: ['videoSrc'],
	mounted() {
		new DPlayer({
			container: this.$refs.video,
			video: {
				url: this.videoSrc
			},
		});
	}
}
</script>

<style scoped>
.video {
	width: 100%;
	height: 100%;
}
</style>
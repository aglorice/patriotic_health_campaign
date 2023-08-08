<template>
	<div>
		<div class="swiper_home">
			<CarouselImg :images="images" />
		</div>
		<div class="mid_box">
			<div class="xs_box">
				<div class="xs_box_content">

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CarouselImg from "@/components/carousel_img";
export default {
	name: 'HomePage',
	data(){
		return{
			images:[
				require("@/assets/background/1.png"),
				require("@/assets/background/details.png"),
				require("@/assets/background/introduction.jpg"),
			]
		}
	},
	components: {
		CarouselImg
	}
}
</script>

<style scoped>
.swiper_home {
	width: 100%;
	height: 100vh;
}
</style>

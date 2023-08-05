<template>
	<div>
		<div class="swiper_home">
			<CarouselImg :images="images" />
		</div>
		<div>
			<h1>我是首页</h1>
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
					"https://aglorice.cn/img/index.97db8b1b.png",
					"https://aglorice.cn/img/category.629a2b54.png",
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
	width: 100vw;
	height: 80vh;
}
</style>

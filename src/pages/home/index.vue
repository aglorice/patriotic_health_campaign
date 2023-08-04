<template>
	<div>
		<NavigationBar/>
		<div class="swiper_home">
			<CarouselImg :images="images" />
		</div>
		<div>
			<h1>我是首页</h1>
		</div>
	</div>
</template>

<script>
import NavigationBar from "@/components/navigation_bar";
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
		NavigationBar,
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

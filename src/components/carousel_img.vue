<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<!--<div class="swiper-slide swiper-slide1">Slide 1</div>-->
			<!--<div class="swiper-slide swiper-slide2">Slide 2</div>-->
			<!--<div class="swiper-slide swiper-slide3">Slide 3</div>-->
			<div class="swiper-slide" v-for="(img, index) in images" :key="index">
				<img :src="img" alt="img">
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>

		<!-- 如果需要导航按钮 -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

export default {
	name: 'CarouselImg',
	props: ['images'],
	mounted() {
		new Swiper ('.swiper-container', {
			loop: true, // 循环模式选项
			autoplay: true,

			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			},

			// 如果需要前进后退按钮
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			// 如果需要滚动条
			scrollbar: {
				el: '.swiper-scrollbar',
			},
		})
	}
}
</script>

<style scoped>
.swiper-container {
	width: 500px;
	height: 400px;
}

.swiper-slide {
	text-align: center;
	line-height: 400px;
	color: #b0b0b0;
}
</style>
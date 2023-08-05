<template>
	<div id="navigation" class="navigation_bar">
		<div class="logo">
			<img src="@/assets/logo.png" alt="">
		</div>
		<ul class="navigation_ul">
			<li class="li">
				<router-link to="/home">主页</router-link>
			</li>
			<li class="li">
				<router-link to="/activity_introduction">活动介绍</router-link>
			</li>
			<li class="li">
				<router-link to="/activity_publicity">活动宣传</router-link>
				<div class="items">
					<div class="item">
						<a href="javascript:void(0);">个人卫生</a>
					</div>
					<div class="item">
						<a href="javascript:void(0);">环境卫生</a>
					</div>
					<div class="item">
						<a href="javascript:void(0);">食品安全</a>
					</div>
					<div class="item">
						<a href="javascript:void(0);">疾病预防</a>
					</div>
				</div>
			</li>
			<li class="li">
				<router-link to="/interaction">互动交流</router-link>
			</li>
			<li class="li">
				<router-link to="/results_show">成果展示</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "NavigationBar",
	data() {
		return {
			oldScrollTop: 0,
		}
	},
	mounted() {
		// 监听页面滚动事件
		window.addEventListener("scroll", this.scrolling)
	},
	beforeDestroy() {
		// 移除页面滚动事件
		window.removeEventListener("scroll", this.scrolling)
	},
	methods: {
		scrolling() {
			// 滚动条距文档顶部的距离
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
					document.body.scrollTop
			// 滚动条滚动的距离
			let scrollStep = scrollTop - this.oldScrollTop;
			// 更新——滚动前，滚动条距文档顶部的距离
			this.oldScrollTop = scrollTop;
			if (scrollStep < 0) {
				document.getElementById('navigation').style.top = '0'
			} else {
				document.getElementById('navigation').style.top = '-8vh'
			}
		}
	}
}
</script>

<style scoped>
/*导航栏*/
#navigation {
	transition: 1s;
}

.navigation_bar {
	z-index: 100;
	top: 0;
	position: absolute;
	display: flex;
	width: 100%;
	height: 8vh;
	background-color: #ffffff;
	border-bottom: 1px #d3d0d0 solid;
	opacity: .9;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
}

.logo {
	flex: 3;
}

.logo img {
	width: 6vh;
	height: 6vh;
	margin-top: 1vh;
	margin-left: 100px;
}

.navigation_ul {
	flex: 7;
	list-style: none;
	display: inline-block;
	padding: 0;
}

.li {
	display: inline-block;
	margin-right: 30px;
	position: relative;
}

.li > a {
	width: 150px;
	height: 39.3px;
	text-decoration: none;
	line-height: 39.3px;
	color: #333333;
	font-weight: bolder;
	letter-spacing: 0.2em;
	transition: 0.8s;
	display: inline-block;
	border-radius: 20px;
	text-align: center;
	background-color: #ffffff;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, .1),
	0 2px 4px rgba(0, 0, 0, .1);
}

.li > a:hover {
	color: white;
	letter-spacing: 0.3em !important;
	background-color: #4593a4;
}

/*活动宣传下的子目录*/
.items {
	width: 150px;
	background-color: #ffffff;
	border-radius: 20px;
	position: absolute;
	top: 40px;
	left: 0;
	display: none;
	transition: .5s;
	padding: 10px;
	box-sizing: border-box;
}
.li:hover .items {
	display: block;
}

.items .item {
	height: 30px;
	text-align: center;
}

.items a {
	/*修改字体颜色*/
	color: #333;

	/*设置字体大小*/
	font-size: 18px;

	/*设置过渡*/
	transition: font-size 0.1s linear;

	text-decoration: none;
}

.items a:hover {
	color: #01763a;
	font-size: 20px;
}
</style>

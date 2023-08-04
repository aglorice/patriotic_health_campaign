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
	top:0;
	position: absolute;
	display: flex;
	width: 100%;
	height: 8vh;
	background-color: #ffffff;
	border-bottom: 1px #d3d0d0 solid;
	opacity: .9;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, .1) ;
}

.logo {
	margin-left: 200px;
	display: inline-block;
}

.logo img {
	width: 6vh;
	height: 6vh;
	margin-top: 1vh;
}

.navigation_ul {
	flex: 1;
	list-style: none;
	display: inline-block;
	padding: 0;
}

/*选中第一个子元素*/
.li:nth-child(1) {
	margin-left: 100px;
}

.li {
	display: inline-block;
	width: 150px;
	height: 39.3px;
	text-align: center;
	background-color: #ffffff;
	margin-right: 20px;
	border-radius: 15px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, .1),
	0 2px 4px rgba(0, 0, 0, .1);

}

.li:hover {
	background-color: #addcee;
}

.li a {
	text-decoration: none;
	line-height: 39.3px;
	color: #333333;
	font-weight: bolder;
	letter-spacing: 0.2em;
}

li a:hover {
	color: white;
}
</style>

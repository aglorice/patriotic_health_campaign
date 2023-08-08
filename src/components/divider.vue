<template>
	<div class="divider">
		<div class="divider_line">
			<div :class="divider_content">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DividerComponent",
	props: {
		// 位置
		contentPosition: {
			type: String,
			values: ["left", "center", "right"],
			default: "center",
		}
	},
	computed: {
		divider_content() {
			return "divider_content " + this.contentPosition;
		}
	}
}
</script>

<style scoped>
.divider {
	width: 100%;
	margin: 20px 0 20px 0;
}
.divider_line {
	width: 100%;
	height: 1px;
	position: relative;
	background-color: #930000;
}
.divider_content {
	position: absolute;
	top: -10px;
	background-color: #ffffff;
	padding: 0 10px;
	font-size: 14px;
	letter-spacing: 3px;
	color: #c00000;
	left: 0;
	transform: translateX(-50%);
}
.left {
	left: 20%;
	transform: translateX(0);
}
.right {
	right: 20%;
	transform: translateX(0);
}
.center {
	left: 50%;
}
</style>

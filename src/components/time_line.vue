<template>
	<div class="bigBox">
		<div class="items">
			<template v-for="(item, index) in timeDataList">
				<div :key="index" class="itembox">
					<div class="item">
						<div class="line">
							<div class="gardenbox">
								<div class="garden">
									<div class="garden2"></div>
								</div>
							</div>
						</div>
						<div class="value-box">
							<h4>{{ item.time }}</h4>
							<p>{{item.event}}</p>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TimeLine',
	props: {
		timeDataList: {
			type: Array,
			default: () => {
				return [
					{
						id: 1,
						value: '2022',
					},
					{
						id: 2,
						value: '2021',
					},
					{
						id: 3,
						value: '2020',
					},
					{
						id: 4,
						value: '2019',
					},
					{
						id: 5,
						value: '2018',
					},
				]
			},
		},
	},
}
</script>

<style scoped>
div {
	box-sizing: border-box;
}
.bigBox {
	width: 100%;
}
.items {
	display: flex;
	flex-wrap: wrap;
}
.itembox {
	width: 50%;
	border-right: 4px solid #a20101;
	position: relative;
	padding-right: 70px;
}
.items .itembox:nth-child(even) {
	border-right: none;
	padding-right: 0px;
	padding-left: 70px;
	margin-top: 100px;
	padding-bottom: 0px;
}
.items .itembox:last-child {
	padding-bottom: 100px;
}
.line {
	position: absolute;
	top: 20%;
	right: -70px;
	z-index: -2;
	width: 80px;
	border-bottom: 4px solid rgba(0, 107, 165, 0.22);
}
.line .gardenbox {
	height: 100%;
	position: relative;
}
.line .garden {
	position: absolute;
	bottom: 0;
	right: 0px;
	width: 30px;
	height: 30px;
	background: rgba(0, 61, 165, 0.22);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translate(55%, 55%);
}

.line .garden2 {
	width: 16px;
	height: 16px;
	background: #a20101;
	border-radius: 50%;
}

.items .itembox:nth-child(even) .line {
	right: inherit;
	left: -70px;
	text-align: left;
}
.items .itembox:nth-child(even) .line .garden {
	right: inherit;
	left: 0px;
	transform: translate(-55%, 55%);
}
.item {
	background: #ffffff;
	box-shadow: 8px 7px 20px 0px #dae5f6;
	border-radius: 4px;
	position: relative;
}
.item:nth-child(even) {
	background: #ffffff;
	box-shadow: 1px 1px 20px 0px #ffffff;
	border-radius: 4px;
	position: relative;
}
.item .value-box {
	padding: 20px 30px;
}
.value-box {
	text-align: center;
}
.value-box h4 {
	font-size: 24px;
	color: #a40202;
	margin-top: 10px;
	margin-bottom: 10px;
}
.value-box p {
	font-size: 16px;
	color: #666666;
	text-indent: 2em;
	letter-spacing: 0.2em;
}
</style>

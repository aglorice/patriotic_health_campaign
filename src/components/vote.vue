<template>
	<div id="vote"></div>
</template>

<script>
//按需引入
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import {BarChart} from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器，图例组件
import {
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	LegendComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import {LabelLayout, UniversalTransition} from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';

console.log('测试');

// 注册必须的组件
echarts.use([
	TitleComponent,
	TooltipComponent,
	GridComponent,
	DatasetComponent,
	TransformComponent,
	BarChart,
	LabelLayout,
	UniversalTransition,
	CanvasRenderer,
	LegendComponent
]);

export default {
	name: 'VoteComponent',
	props: ['data'],
	data() {
		return {
			name: this.data.name,
			value: this.data.value
		}
	},
	mounted() {
		// 基于准备好的dom，初始化echarts实例
		let myChart = echarts.init(document.getElementById('vote'));

		// 指定图表的配置项和数据
		let option = {
			/* 图表名称 */
			title: {
				text: '方案投票'
			},

			/* 鼠标悬浮提示 */
			tooltip: {},

			/* 图例 */
			legend: {
				data: ['当前票数']
			},

			/* x轴 */
			xAxis: {
				data: this.name
			},

			/* y轴 */
			yAxis: {},

			/* 数据 */
			series: [
				{
					name: '当前票数',
					type: 'bar',
					data: this.value
				}
			]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		// 绑定单击事件
		myChart.on('click', (params) => {
			if (confirm('确认给该方案投票？')) {
				this.value[params.dataIndex]++;
				myChart.setOption(option);
			}
		});
	}
}
</script>

<style scoped>
#vote {
	width: 100%;
	height: 100%;
}
</style>
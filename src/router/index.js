import Vue from "vue";
import VueRouter from "vue-router";
// 主页
const Home = () => import ("@/pages/home");
// 活动介绍页
const ActivityIntroduction = () => import ("@/pages/activity_introduction");
// 活动宣传页
// 个人卫生页
const PersonalHygiene = () => import ("@/pages/activity_publicity/personal_hygiene.vue");
// 环境卫生页
const EnvironmentalHygiene = () => import ("@/pages/activity_publicity/environmental_hygiene.vue");
// 食品安全页
const FoodSafety = () => import ("@/pages/activity_publicity/food_safety.vue");
// 疾病预防页
const DiseasePrevention = () => import ("@/pages/activity_publicity/disease_prevention.vue");
// 导航页面
const RootPage = () => import ("@/pages/root_page");
// 互动页面
const  InteractionPage = () => import ("@/pages/interaction");
// 成果展示页面
const ResultShow = () => import ("@/pages/results_show");
Vue.use(VueRouter);

const routes = [
	{
		path: '',
		component: RootPage,
		meta: {
			title: '爱国卫生运动'
		}
	},
	{
		path: '/home',
		component: Home,
		meta: {
			title: '首页'
		}
	},
	{
		path: '/activity_introduction',
		component: ActivityIntroduction,
		meta: {
			title: '活动介绍'
		}
	},
	{
		path: '/activity_publicity',
		redirect: '/activity_publicity/personal_hygiene'
	},
	{
		path: '/activity_publicity/personal_hygiene',
		component: PersonalHygiene,
		meta: {
			title: '个人卫生'
		}
	},
	{
		path: '/activity_publicity/environmental_hygiene',
		component: EnvironmentalHygiene,
		meta: {
			title: '环境卫生'
		}
	},
	{
		path: '/activity_publicity/food_safety',
		component: FoodSafety,
		meta: {
			title: '食品安全'
		}
	},
	{
		path: '/activity_publicity/disease_prevention',
		component: DiseasePrevention,
		meta: {
			title: '疾病预防'
		}
	},
	{
		path: '/interaction',
		component: InteractionPage,
		meta: {
			title: '互动页面'
		}
	},
	{
		path: '/results_show',
		component: ResultShow,
		meta: {
			title: '成果展示'
		}
	}
]


const router = new VueRouter({
	mode: 'history',
	routes,
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
	return originalPush.call(this, location).catch(err => {
		err
	})
};

// vue的路由守卫()
router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
})
export default router;

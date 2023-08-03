import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import ("@/pages/home");
const ActivityIntroduction = () => import ("@/pages/activity_introduction");
const ActivityPublicity = () => import ("@/pages/activity_publicity");
const PersonalHygiene = () => import ("@/pages/activity_publicity/components/personal_hygiene.vue");
const EnvironmentalHygiene = () => import ("@/pages/activity_publicity/components/environmental_hygiene.vue");
const FoodSafety = () => import ("@/pages/activity_publicity/components/food_safety.vue");
const DiseasePrevention = () => import ("@/pages/activity_publicity/components/disease_prevention.vue");
Vue.use(VueRouter);

const routes = [
	{
		path: '',
		redirect: '/home',
	},
	{
		path: '/home',
		component: Home,
		mate: {
			title: '首页'
		}
	},
	{
		path: '/activity_introduction',
		component: ActivityIntroduction,
		mate: {
			title: '活动介绍'
		}
	},
	{
		path: '/activity_publicity',
		component: ActivityPublicity,
		redirect: '/activity_publicity/personal_hygiene',
		mate: {
			title: '活动宣传'
		},
		children: [
			{
				path: 'personal_hygiene',
				component: PersonalHygiene,
				mate: {
					title: '个人卫生'
				}
			},
			{
				path: 'environmental_hygiene',
				component: EnvironmentalHygiene,
				mate: {
					title: '环境卫生'
				}
			},
			{
				path: 'food_safety',
				component: FoodSafety,
				mate: {
					title: '食品安全'
				}
			},
			{
				path: 'disease_prevention',
				component: DiseasePrevention,
				mate: {
					title: '疾病预防'
				}
			}
		]
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

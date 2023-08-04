import Vue from "vue";
import VueRouter from "vue-router";
// 主页
const Home = () => import ("@/pages/home");
// 活动介绍页
const ActivityIntroduction = () => import ("@/pages/activity_introduction");
// 活动宣传页
const ActivityPublicity = () => import ("@/pages/activity_publicity");
// 导航页面
const RootPage = () => import ("@/pages/root_page");
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
		component: ActivityPublicity,
		meta: {
			title: '活动宣传'
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

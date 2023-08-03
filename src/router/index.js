import Vue from "vue";
import VueRouter from "vue-router";

const ActivityIntroduction = ()=> import ("@/pages/activity_introduction");
const Home = ()=> import ("@/pages/home/home_page");
Vue.use(VueRouter);

const routes = [
	{
		path: '',
		redirect: '/home',
	},
	{
		path: '/home',
		component: Home,
		mate:{
			title: '首页'
		}
	},
	{
		path: '/activity_introduction',
		component: ActivityIntroduction,
		mate:{
			title: '活动介绍'
		}
	}
]


const router =  new VueRouter({
	mode: 'history',
	routes,
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
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

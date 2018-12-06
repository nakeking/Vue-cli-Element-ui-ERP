import Vue from 'vue';
import Router from 'vue-router';

//视窗
const Views = (resolve) => {
	import('components/Views/Views').then(module => {
		resolve(module);
	})
}

//人事管理
//员工管理
const Staff = (resolve) => {
	import('views/Person/Staff').then(module => {
		resolve(module);
	})
}

const Everyday = (resolve) => {
	import('views/Person/Everyday').then(module => {
		resolve(module);
	})
}

const Achievements = (resolve) => {
	import('views/Person/Achievements').then(module => {
		resolve(module);
	})
}

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/staff'
		},
		{
			path: '/',
			component: Views,
			meta: '视窗',
			children: [
				{
					path: '/staff',
					component: Staff,
					meta: {title: '员工管理'}
				},
				{
					path: '/everyday',
					component: Everyday,
					meta: {title: '每日绩效'}
				},
				{
					path: '/achievements',
					component: Achievements,
					meta: {title: '绩效管理'}
				}
			]
		}
	]
})

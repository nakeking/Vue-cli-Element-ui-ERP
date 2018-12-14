import Vue from 'vue';
import Router from 'vue-router';

//视窗
const Views = (resolve) => {
	import('components/Views/Views').then(module => {
		resolve(module);
	})
} 

//登入
const Login = resolve => {
	import('views/Login').then(module => {
		resolve(module);
	})
}

//首页
const Index = resolve => {
	import('views/Index').then(module => {
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

const Table = (resolve) => {
	import('views/Table').then(module => {
		resolve(module);
	})
}

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/index'
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
					path: '/table',
					component: Table,
					meta: {title: '绩效管理'}
				},
				{
					path: '/index',
					component: Index,
					meta: {title: '首页'},
					name: 'index'
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			meta: '登入',
			component: Login
		}
	]
})

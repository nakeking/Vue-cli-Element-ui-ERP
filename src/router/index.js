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

//表单相关
const BasicForm = (resolve) => {
	import('views/Person/BasicForm').then(module => {
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

//拖拽
const Draggable = resolve => {
	import('views/Draggable/Draggable').then(module => {
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
					path: '/basicform',
					component: BasicForm,
					meta: {title: '基本表单'}
				},
				{
					path: '/everyday',
					component: Everyday,
					meta: {title: '每日绩效'}
				},
				{
					path: '/table',
					component: Table,
					meta: {title: '基本表格'}
				},
				{
					path: '/index',
					component: Index,
					meta: {title: '首页'},
					name: 'index'
				},
				{
					path: '/draggable',
					name: 'draggable',
					meta: {title: '模块拖拽'},
					component: Draggable
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

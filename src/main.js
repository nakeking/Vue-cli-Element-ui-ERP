// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import {Axios} from 'api/api';
Vue.prototype.$axios = Axios;

//路由判断是否登入
router.beforeEach((to,  form, next) => {
	let role = localStorage.getItem('username');
	if(!role && to.path !== '/login'){
		next('/login')
	}else{
		next();
	}
});

Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

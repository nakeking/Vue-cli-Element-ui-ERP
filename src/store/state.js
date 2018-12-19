import modular from './base/modular'
import control from './base/control'
const state = {
	pages: 'index',			//当前页面名
	pageList: [],			//页面列表
	currPage: {},			//当前页面
	navList: [],			//导航列表
	currModular: {},		//当前模块
	//默认
	modular: modular,		//所以模块		
	control: control,		//所以控件
	editModel: false		//编辑
}

export default state
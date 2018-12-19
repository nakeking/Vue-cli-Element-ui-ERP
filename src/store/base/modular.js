const modular = {
	default: [
		{id: 0, title: '添加模块', icon: '', name: 'DefaultModular', parent: null, children:[]}
	],
	basic: [
		{id: 1, title: '文本', icon: 'el-icon-document', name: 'TextModular', parent: 'ContainerModular', children:[]},
		{id: 2, title: '图片', icon: 'el-icon-picture-outline', name: 'ImgModular', parent: 'ContainerModular', children:[]},
		{id: 3, title: '按钮', icon: 'el-icon-star-on', name: 'ButtonModular', parent: 'ContainerModular', children:[]},
		{id: 4, title: '自由容器', icon: 'el-icon-star-on', name: 'ContainerModular', parent: null, children:[]},
		{id: 5, title: '多图文', icon: 'el-icon-tickets', name: 'ImgsModular', parent: null, children:[]},
		{id: 6, title: '文章列表', icon: 'el-icon-tickets', name: 'ArticlesModular', parent: null, children:[]},
		{id: 7, title: '服务列表', icon: 'el-icon-star-on', name: 'ServersModular', parent: null, children:[]},
		{id: 8, title: '魔方导航', icon: 'el-icon-menu', name: 'NavsModular', parent: null, children:[]},
		{id: 9, title: '名片列表', icon: 'el-icon-star-on', name: 'VisitModular', parent: null, children:[]}
	],
	interaction: [
		{id: 10, title: '视频', icon: 'el-icon-star-on', name: 'ViewsModular', parent: null, children:[]},
		{id: 11, title: '表单', icon: 'el-icon-star-on', name: 'FormModular', parent: null, children:[]},
		{id: 12, title: '关注公众号', icon: 'el-icon-star-on', name: 'FollowModular', parent: null, children:[]}
	],
	senior:[
		{id: 13, title: '搜索', icon: 'el-icon-star-on', name: 'SearchModular', parent: null, children:[]}
	]
}

export default modular
const modular = {
	default: [
		{id: 0, title: '添加模块', name: 'DefaultModular', parent: null}
	],
	basic: [
		{id: 1, title: '文本', name: 'TextModular', parent: 3},
		{id: 2, title: '图片', name: 'ImgModular', parent: 3},
		{id: 3, title: '按钮', name: 'ButtonModular', parent: 3},
		{id: 4, title: '自由容器', name: 'ContainerModular', parent: null},
		{id: 5, title: '多图文', name: 'ImgsModular', parent: null},
		{id: 6, title: '文章列表', name: 'ArticlesModular', parent: null},
		{id: 7, title: '服务列表', name: 'ServersModular', parent: null},
		{id: 8, title: '魔方导航', name: 'NavsModular', parent: null},
		{id: 9, title: '名片列表', name: 'VisitModular', parent: null}
	],
	interaction: [
		{id: 10, title: '视频', naem: 'ViewsModular', parent: null},
		{id: 11, title: '表单', name: 'FormModular', parent: null},
		{id: 12, title: '关注公众号', name: 'FollowModular', parent: null}
	],
	senior:[
		{id: 13, title: '搜索', name: 'SearchModular', parent: null}
	]
}

export default modular
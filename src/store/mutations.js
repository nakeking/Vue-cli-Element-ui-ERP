const mutations = {
	setPages(state, pages){
		state.pages = pages
	},
	setPageList(state, list){
		if(state.pageList.length === 0){
			state.pageList = list
		}else{
			state.pageList.push(list)
		}
	},
	setCurrPage(state, obj){
		state.currPage = obj
	},
	setNavList(state, list){
		state.navList = list
	},
	setEditModel(state, boolean){
		state.editModel = boolean
	}
}

export default mutations
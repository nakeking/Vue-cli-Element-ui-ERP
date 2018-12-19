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
	setCurrPageBody(state, obj){
		if(obj.item){
			obj.parent.children.push(obj.item);
			state.currPage.body.push(obj.parent);
		}else{
			state.currPage.body.push(obj);
		}
	},
	setNavList(state, list){
		state.navList = list
	},
	setEditModel(state, boolean){
		state.editModel = boolean
	},
	setCurrModular(state, obj){
		state.currModular = obj
	}
}

export default mutations
<template>
  <div class="addpages">
	  <ul>
      <li v-for="(item, index) in pageList" :key="item.id" class="pages-item" :class="{active: pages === item.path}" @click="gotoPages(item.path)">
		    <p>{{item.title}}</p>
		    <i class="el-icon-close"></i>
      </li>
    </ul>
    <div class="add" @click="addPages()">
      <i class="el-icon-plus"></i>
      <span>添加页面</span>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  export default{
  	name: 'Pages',
  	data(){
  	  return {
  	  	page: 'index'
  	  }
  	},
    computed:{
      ...mapGetters([
        'pages',
        'pageList',
        'currPage'
      ])
    },
  	methods:{
  	  gotoPages(path){
        var page = this.pageList.find((item) => {
          return item.path === path
        });
        this.setCurrPage(page);
  	  	this.setPages(path);
  	  },
      addPages(){
        this.setPageList({path: `${this.pageList.length + 1}`, title: '自定义', name: 'custom', type: 2, body:{}});
      },
      ...mapMutations({
        setPages: 'setPages',
        setCurrPage: 'setCurrPage',
        setPageList: 'setPageList'
      })
  	}
  }
</script>

<style scoped lang="less">
.addpages{
  position: relative;
  padding: 15px 15px;
  .pages-item{
    background: rgba(200,200,200,0.1);
    border: 1px solid rgba(200,200,200,0.2);
    height: 46px;
    line-height: 46px;
    padding: 0 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    color: #333;
    p{
    	flex: 1;
    }
    i{
    	flex: 0 0 20px;
    	text-align: center;
    }
  }
  .active{
  	color: #409EFF;
  }
  .add{
    background: rgba(200,200,200,0.1);
    border: 1px solid rgba(200,200,200,0.2);
    height: 46px;
    line-height: 46px;
    padding: 0 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
    text-align: center;
  }
}
</style>
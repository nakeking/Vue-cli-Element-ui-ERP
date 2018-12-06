<template>
  <div class="tags" v-if="showTags">
  	<ul>
  	  <li class="tags-li" v-for="(item,index) of tagsList" :class="{active: isActive(item.path)}" :key="index">
  	  	<router-link :to="item.path" class="tags-li-title">
  	  	  {{item.title}}
  	  	</router-link>
  	  	<span class="tags-li-icon" @click="closeTags(index)">
  	  	  <i class="el-icon-close"></i>
  	  	</span>
  	  </li>
  	</ul>
  	<div class="tags-close-box">
  	  <el-button></el-button>
  	</div>
  </div>
</template>

<script>
  import bus from 'components/bus'
  export default {
  	name: 'Tags',
  	data(){
  	  return {
  	  	tagsList: []
  	  }
  	},
  	computed:{
  	  showTags(){
  	  	return this.tagsList.length > 0
  	  }
  	},
  	watch:{
  	  $route(newPath,oldPath){
  	  	this.setTags(newPath);
  	  }
  	},
  	created(){
  	  this.setTags(this.$route);
  	},
  	methods:{
  	  isActive(path){
  	  	return path === this.$route.fullPath;
  	  },
  	  setTags(route){
  	  	const isExist = this.tagsList.some(item => {
  	  		return item.path === route.fullPath;
  	  	})
  	  	!isExist && this.tagsList.push({
  	  	  title: route.meta.title,
  	  	  path: route.fullPath,
  	  	  name: route.matched[1].components.default.name
  	  	})
  	  	bus.$emit('tags', this.tagsList);
  	  },
  	  closeTags(index){
  	  	let delItem = this.tagsList.splice(index, 1)[0];
  	  	let item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
  	  	if(item){
  	  		delItem.path === this.$route.fullPath && this.$router.push({
  	  			path: item.path
  	  		})
  	  	}else{
  	  		this.$router.push('/');
  	  	}
  	  }
  	}
  }
</script>

<style lang="less" scoped>
.tags{
  position: relative;
  height: 30px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .tags-li {
	    float: left;
	    margin: 3px 5px 2px 3px;
	    border-radius: 3px;
	    font-size: 12px;
	    overflow: hidden;
	    cursor: pointer;
	    height: 23px;
	    line-height: 23px;
	    border: 1px solid #e9eaec;
	    background: rgba(84, 92, 100, 0.6);
	    padding: 0 5px 0 12px;
	    vertical-align: middle;
	    color: #666;
	    -webkit-transition: all .3s ease-in;
	    -moz-transition: all .3s ease-in;
	    transition: all .3s ease-in;
	    .tags-li-title {
		    float: left;
		    max-width: 80px;
		    overflow: hidden;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    margin-right: 5px;
		    color: #fff;
		}
		.tags-li-icon{
			color: #fff;
		}
	}
	.tags-li.active .tags-li-title {
	    color: #fff;
	}
	.active{
		border: 1px solid rgb(67,74,80);
    	background-color: rgb(67,74,80);
	}
  }
}
</style>
<template>
  <div class="nav">
  	<ul :style="{background: navList.background}">
  	  <li class="nav-item" v-for="(item, index) in navList.nav" :key="item.id" @click="editNav()">
  		<a @click.stop="gotoNavPage(item.path)"><i v-if="currPage.path === item.path" :class="item.active"></i>
  		<i v-else :class="item.icon"></i>
  		<p class="text">{{item.title}}</p></a>
  	  </li>
  	</ul>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  export default{
  	name: 'Nav',
  	data(){
  	  return {

  	  }
  	},
  	computed:{
  	  ...mapGetters([
  	  	'navList',
  	  	'pageList',
  	  	'currPage',
  	  	'editModel'
  	  ])
  	},
  	methods:{
  	  editNav(){
  	  	this.setEditModel(!this.editModel);
  	  },
  	  gotoNavPage(path){
  	  	let page = this.pageList.find((item) => {
  	  		return item.path === path
  	  	});
  	  	this.setCurrPage(page);
  	  },
  	  ...mapMutations({
  	  	setCurrPage: 'setCurrPage',
  	  	setEditModel: 'setEditModel'
  	  })
  	}
  }
</script>

<style scoped lang="less">
.nav{
  position: relative;
  ul{
  	display: flex;
  	flex-direction: row;
  	align-items: center;
	.nav-item{
	  flex: 1;
	  text-align: center;
	  height: 50px;
	  a{
	  	width: 60px;
	  	display: inline-block;
	  	position: relative;
		i:before{
		  font-size: 24px;
		  line-height: 28px;
		}
		p{
		  line-height: 22px;
		  font-size: 14px;
		}
	  }
	}
  }
}
</style>
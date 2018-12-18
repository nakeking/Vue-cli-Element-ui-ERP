<template>
  <div class="pages">
	<div class="header">
	  <i class="el-icon-arrow-left" v-if="currPage.type === 2"></i>
	  <p class="title">{{currPage.title}}</p>
	</div>
	<div class="main" :class="{isnav: currPage.isnav}">
	  <drag :modular="currPage.body">
		<div class="body-item" :key="item.id" v-for="(item, index) in currPage.body">
		  <component :is="item.name"></component>
		</div>
		<div class="body-item" :key="0" v-if="!currPage.body.length">
		  <component is="default-modular"></component>
		</div>
	  </drag>
	</div>
	<div class="footer" v-if="currPage.type">
	  <control-nav v-if="currPage.isnav"></control-nav>
	</div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import ControlNav from 'views/Draggable/Control/Nav';
  import Drag from 'views/Draggable/Drag/Drag';

  //引入所以modular
  import DefaultModular from 'views/Draggable/Modular/DefaultModular/DefaultModular'
  import TextModular from 'views/Draggable/Modular/TextModular/TextModular'
  import ImgModular from 'views/Draggable/Modular/ImgModular/ImgModular'
  export default {
  	name: 'pages',
  	components:{
  	  ControlNav,
  	  Drag,
  	  DefaultModular,
  	  TextModular,
  	  ImgModular
  	},
  	data(){
  	  return {

  	  }	
  	},
  	computed:{
  	  ...mapGetters([
  	  	'currPage',
  	  ])
  	}
  }
</script>

<style scoped lang="less">
.pages{
	position: relative;
	cursor: pointer;
	height: 100%;
	overflow: hidden;
	.header{
		height: 50px;
		line-height: 50px;
		background: #fff;
		text-align: center;
		border-bottom: 1px solid #eee;
		i{
			position: absolute;
			top: 0;
			left: 0;
			height: 50px;
			line-height: 50px;
			width: 50px;
		}
		i:before{
			font-size: 18px;
			font-weight: bold;
		}
	}
	.main{
	  position: absolute;
	  height: calc(100% - 51px);
	  height: -webkit-calc(100% - 51px);
	  height: -moz-calc(100% - 51px);
	  height: -ms-calc(100% - 51px);
	  height: -o-calc(100% - 51px);
	  left: 0;
	  right: -17px;
	  overflow-x: hidden;
	  overflow-y: scroll;
	}
	.main::-webkit-scrollbar{
		display: none;
	}
	.isnav{
	  height: calc(100% - 51px - 50px);
	  height: -webkit-calc(100% - 51px - 50px);
	  height: -moz-calc(100% - 51px - 50px);
	  height: -ms-calc(100% - 51px - 50px);
	  height: -o-calc(100% - 51px - 50px);
	}
	.footer{
		position: absolute;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    height: 50px;
	    z-index: 999;
	}
}
</style>
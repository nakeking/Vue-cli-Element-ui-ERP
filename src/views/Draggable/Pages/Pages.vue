<template>
  <div class="pages">
	<div class="header">
	  <i class="el-icon-arrow-left" v-if="currPage.type === 2"></i>
	  <p class="title">{{currPage.title}}</p>
	</div>
	<div class="main" :class="{isnav: currPage.isnav}">
	  <drag :modular="currPage.body">
		<div class="body-item" :key="index" v-for="(item, index) in currPage.body">
		  <component :data-item="item" :data-index="index" :is="item.name">
			<component v-for="(citem, cindex) in item.children" :key="cindex" :is="citem.name" :data-item="citem" :data-index="cindex"></component>
		  </component>
		</div>
		<div class="defalut-item" :key="0" v-if="!currPage.body.length">
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
  import ContainerModular from 'views/Draggable/Modular/ContainerModular/ContainerModular'
  import TextModular from 'views/Draggable/Modular/TextModular/TextModular'
  import ImgModular from 'views/Draggable/Modular/ImgModular/ImgModular'
  export default {
  	name: 'pages',
  	components:{
  	  ControlNav,
  	  Drag,
  	  DefaultModular,
  	  TextModular,
  	  ImgModular,
  	  ContainerModular
  	},
  	data(){
  	  return {

  	  }	
  	},
  	computed:{
  	  ...mapGetters([
  	  	'currPage',
  	  	'currModular'
  	  ])
  	},
  	methods:{
  		...mapMutations({
  			setCurrModular: 'setCurrModular'
  		})
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
	  width: 100%;
	  height: calc(100% - 51px - 0px) !important;
	  height: -webkit-calc(100% - 51px - 0px);
	  height: -moz-calc(100% - 51px - 0px);
	  height: -ms-calc(100% - 51px - 0px);
	  height: -o-calc(100% - 51px - 0px);
	  left: 0;
	  right: -17px;
	  overflow-x: hidden;
	  overflow-y: scroll;
	  .body-item{
	  	width: 100%;
	  	margin-bottom: 8px;
	  }
	  .body-item:last-child{
	  	margin-bottom: 0;
	  }
	  .defalut-item{
	  	position: absolute;
	  	left: 0;
	  	right: 0;
	  	height: 100%;
	  	overflow: hidden;
	  }
	}
	.main::-webkit-scrollbar{
		display: none;
	}
	.isnav{
	  height: calc(100% - 51px - 50px) !important;
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
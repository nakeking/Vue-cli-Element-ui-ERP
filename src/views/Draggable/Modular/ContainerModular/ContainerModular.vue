<template>
  <div class="container" @mouseenter="selectCurrModular()">
  	<div class="title">
  	  <span>—</span>
  	  <p>自由容器模块</p>
  	  <span>—</span>
  	</div>
  	<div class="container-main">
  	  <div class="default" v-if="!dataItem.children.length">
		<p>自由容器可添加文本、图片、按钮模块</p>
		<button type="button" @click="addModular()">添加模块</button>
  	  </div>
	  <slot></slot>
  	</div>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  export default {
  	name: 'ContainerModular',
  	props:{
  		dataItem:{
  			type: Object,
  			default: () => {}
  		},
  		dataIndex:{
  			type: Number,
  			default: -1
  		}
  	},
  	data(){
  	  return {

  	  }
  	},
  	computed: {
  		...mapGetters([
  			'currPage',
  			'currModular'
  		])
  	},
  	methods:{
  		selectCurrModular(){
  			this.setCurrModular(this.currPage.body[this.dataIndex]);
  		},
  		addModular(){

  		},
  		...mapMutations({
  			setCurrModular: 'setCurrModular'
  		})
  	}
  }
</script>

<style scoped lang="less">
.container{
	position: relative;
	width: 100%;
	height: 290px;
	padding: 0;
	border: 0;
	border-radius: 0;
	margin: 0 auto;
	.title{
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #eee;
		text-align: center;
		p{
			display: inline-block;
		}
		span{
			margin:0 10px;
			color: #ccc;
		}
	}
	&:hover{
		border: 1px dashed #666;
		width: calc(100% - 2px);
		height: 288px;
	}
	.container-main{
		.default{
			text-align: center;
			color: #666;
			font-size: 14px;
			margin-top: 20%;
			line-height: 24px;
			button{
				border: 0;
			  	background: #5874d8;
			  	padding: 8px 20px;
			  	color: #fff;
			  	margin-top: 10px;
			  	cursor: pointer;
			}
		}
	}
}
</style>
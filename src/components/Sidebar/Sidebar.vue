<template>
  <div class="sidebar">
  	<el-menu class="sidebar-el-menu" :collapse="collapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :default-active="onRoutes" unique-opened router>
  	  <template v-for="item in items">
  	  	<template v-if="item.subs">
  	  	  <el-submenu :index='item.index' :key="item.index">
  	  	  	<template slot="title">
  	  	  	  <i :class="item.icon"></i>
  	  	  	  <span slot="title">{{item.title}}</span>
  	  	  	</template>
  	  	  	<el-menu-item v-for="(subItem, i) in item.subs" :key="i" :index="subItem.index">
  	  	  	  {{subItem.title}}
  	  	  	</el-menu-item>
  	  	  </el-submenu>
  	  	</template>
  	  	<template v-else>
  	  	  <el-menu-item :index="item.index" :key="item.index">
  	  	  	<i :class="item.icon"></i>
  	  	  	<span slot="title">
  	  	  	  {{item.title}}
  	  	  	</span>
  	  	  </el-menu-item>
  	  	</template>
  	  </template>
  	</el-menu>
  </div>
</template>

<script>
  import bus from 'components/bus'; 
  export default {
  	name: 'Sidebal',
  	data(){
  	  return {
  	  	collapse: false,
  	  	items:[
          {
            icon: 'el-icon-setting',
            index: 'index',
            title: '系统首页'
          },
          {
            icon: 'el-icon-setting',
            index: 'table',
            title: '基本表格'
          },
          {
            icon: 'el-icon-setting',
            index: 'draggable',
            title: '轻站小程序'
          },
  	  	  {
  	  	  	icon: 'el-icon-setting',
  	  	  	index: '1',
  	  	  	title: '表单相关',
  	  	  	subs:[
  	  	  	  {
  	  	  	  	index: 'basicform',
  	  	  	  	title: '基本表单'
  	  	  	  },
  	  	  	  {
  	  	  	  	index: 'everyday',
  	  	  	  	title: '富文本编辑器'
  	  	  	  },
              {
                index: 'markdown',
                title: 'markdown编辑器'
              },
              {
                index: 'upload',
                title: '上传文件'
              }
  	  	  	]
  	  	  }
  	  	]
  	  }
  	},
  	computed:{
  	  onRoutes(){
  	  	return this.$route.path.replace('/','');
  	  }
  	},
  	created(){
  	  bus.$on('collapse', msg => {
  	  	this.collapse = msg;
  	  })
  	}
  }
</script>

<style lang="less" scoped>
.sidebar{
  display: block;
  position: absolute;
  top: 70px;
  left: 0;
  bottom: 0;
  overflow-y: scroll;
  .sidebar-el-menu:not(.el-menu--collapse){
  	width: 250px;
  }
  ul{
  	height: 100%;
  }
}
.sidebar::-webkit-scrollbar{
	width: 0;
}
</style>
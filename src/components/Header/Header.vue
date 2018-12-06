<template>
  <div class="header">
  	<div class="collapse-btn" @click="collapseChange">
  		<i class="el-icon-menu"></i>
  	</div>
  	<div class="logo">ERP后台管理系统</div>
  	<div class="header-right">
	  	<div class="header-user-con">
	  	  <div class="user-avator">
	  	  	<img src="static/img/img.jpg"/>
	  	  </div>
	  	  <el-dropdown class="user-name" trigger="click" @command="handleCommand">
	  	  	<span class="el-dropdown-link">
	  	  	  {{username}} <i class="el-icon-caret-bottom"></i>
	  	  	</span>
	  	  	<el-dropdown-menu slot="dropdown">
	  	  	  <el-dropdown-item command="loginout">退出登入</el-dropdown-item>
	  	  	</el-dropdown-menu>
	  	  </el-dropdown>
	  	</div>
  	</div>
  </div>
</template>

<script>
  import bus from 'components/bus'; 
  export default {
  	name: 'Header',
  	data(){
  	  return {
  	  	collapse: false,
  	  	username: 'snake皮'
  	  }
  	},
  	methods:{
  	  handleCommand(command){
  	  	if(command === 'loginout'){
  	  	  sessionStorage.removeItem('username');
  	  	  this.$router.push('/login')
  	  	}
  	  },
  	  collapseChange(){
  	  	this.collapse = !this.collapse;
  	  	bus.$emit('collapse', this.collapse);
  	  }
  	}
  }
</script>

<style lang="less" scoped>
.header{
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  .collapse-btn{
  	float: left;
  	padding: 0 21px;
  	cursor: pointer;
  	line-height: 70px;
  }
  .logo{
  	float: left;
  	line-height: 70px;
  }
  .header-right{
  	float: right;
  	width: 250px;
  	height: 70px;
  	line-height: 70px;
  	display: flex;
  	.header-user-con{
  	  display: flex;
      height: 70px;
      align-items: center;
  	}
  	.user-avator{
  	  margin-left: 90px;
  	  img{
  	  	display: block;
  	  	width: 40px;
  	  	height: 40px;
  	  	border-radius: 50%; 
  	  }
  	}
  	.user-name{
  	  margin-left: 10px;
  	  .el-dropdown-link{
  	  	color: #fff;
  	  	cursor: pointer;
  	  }
  	}
  }
}
</style>
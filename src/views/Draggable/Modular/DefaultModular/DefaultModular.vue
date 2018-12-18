<template>
  <div class="default">
	<div class="img"></div>
	<p class="text">点击模块, 马上设计您的专属小程序!</p>
	<button type="button">添加模块</button>
  </div>
</template>

<script>
  export default{
  	name: 'DefaultModular',
  	data(){
  	  return {

  	  }
  	}
  }
</script>

<style scoped lang="less">
.default{
  position: absolute;
  left: 0;
  right: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  .img{
  	display: inline-block;
  	width: 156px;
  	height: 220px;
  	background: url('./default.png');
  	background-repeat: no-repeat;
  	background-size: 156px 220px;
  	background-position: center;
  	margin-top: 28%;
  }
  .text{
	line-height: 24px;
	margin: 10px 0;
  }
  button{
  	border: 0;
  	background: #5874d8;
  	padding: 8px 20px;
  	color: #fff;
  }
}
</style>
<template>
  <div class="staff">
  <div class="table" :class="{'table-right': gxshow}">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i>每日绩效</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-input v-model="select_name" placeholder="姓名查询" class="handle-input"></el-input>
                <el-button icon="search" class="handle-del" @click="search">搜索</el-button>
            </div>
            <el-table :data="achievementsList" border style="width: 100%" ref="multipleTable">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="cjsj" label="日期" width="240">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="gxsl" label="工序" width="320">
                </el-table-column>
                <el-table-column prop="je" label="工资" width="160" :formatter="formatterTotal">
                </el-table-column>
                <el-table-column prop="bz" label="备注">
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="10">
                </el-pagination>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'Staff',
  	data(){
  	  return {

  	  }
  	},
  	mounted(){
  	  this.getStaff()
  	},
  	methods:{
  	  getStaff(){

  	  },
  	  search(){

  	  }
  	}
  }
</script>

<style scoped lang="less">
	.handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 200px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }

    .moduleBox .title{
        padding-bottom: 5px;
        margin-bottom: 10px;
        color: #409EFF;
        border-bottom: 1px solid #409EFF;
    }

    .experience-item {
        list-style: none;
        outline-style: none;
        display: flex;
        align-items: center;
        margin: 20px 0;  
    }

    .experience-item img{
        flex: 0 0 40px;
        height: 40px;
        padding-right: 10px;
    }

    .experience .workTime{
        display: inline-block;
        width: 100px;
        color: #fff;
        background: rgb(67,74,80);
        text-align: center;
        height: 28px;
        line-height: 28px;
        margin: 10px 0 5px 10px;
    }

    .experience-item .detail p{
        margin-bottom: 10px;
    }
    .experience-item .detail span:first-child {
        font-size: 16px;
        color: #333;
    }

    .experience-item .detail span:last-child {
        font-size: 16px;
        color: #666;
    }

    .employee-info-list span:last-child {
        flex: 1;
    }
    .employee-info-list span:first-child {
        flex:0 0 100px;
    }
    .handle-del{
    	background: rgb(67,74,80);
    	color: #fff;
    }
    .number{
    	color: #fff !important;
    	color: rgb(255, 208, 75)
    }
</style>
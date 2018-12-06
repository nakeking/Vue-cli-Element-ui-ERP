<template>
  <div class="achievements">
  	<!--表格-->
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
                <el-table-column prop="cjsj" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="100">
                </el-table-column>
                <el-table-column prop="gxsl" label="工序(事件名称) 数量 * 单价" width="380">
                  <template slot-scope="scope">
                  	<ul>
                  	  <li class="gxsl-item" v-for="(item, index) in scope.row.gxsl">
                  	  	<div v-if="item.name"><span>{{item.name}}</span><span><el-input placeholder="事件名称" v-model="item.sjmc"></el-input></span><span><el-input placeholder="数量" v-model="item.number" style="display: inline-block;width: 60px" @input="inputTotal(scope.$index, index)" @blur="gxConfirm($event)"></el-input></span><i>x</i><span>{{item.gj}}￥</span><i class="el-icon-delete" @click="delGxsl(scope.$index, index)"></i></div>
                  	  	<div v-else>
                  	  	  <span><el-button @click="showGx(scope.$index, index)">工序</el-button></button></span>
                  	  	  <span><el-input placeholder="事件名称" v-model="item.sjmc"></el-input></span>
                          <span><el-input placeholder="数量" v-model="item.number" style="display: inline-block;width: 60px" @input="inputTotal(scope.$index, index)" @blur="gxConfirm($event)"></el-input></span><i>x</i><span>{{item.gj}}￥</span>
                          <i class="el-icon-delete" @click="delGxsl(scope.$index, index)"></i>
                  	  	</div>
                  	  </li>
                  	  <p style="text-align:right; padding-right: 4px;"><i class="el-icon-plus" style="cursor: pointer;" @click="addGxsl(scope.$index)"></i></p>
                  	</ul>
                  </template>
                </el-table-column>
                <el-table-column prop="je" label="工资" width="120" :formatter="formatterTotal">
                </el-table-column>
                <el-table-column prop="bz" label="备注">
                  <template slot-scope="scope">
                  	<el-input v-model="scope.row.bz" placeholder="备注"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="120">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">提交</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                 layout="prev, pager, next"
                 :page-size="pageNum" 
                 @current-change="handleCurrentChange" @size-change="handleSizeChange" 
                 :total="totalPage">
                </el-pagination>
            </div>
            <div class="total-wrapper">
            	<div class="total">
            		<span>总计: {{totalje}}￥</span>
            	</div>
            </div>
        </div>
    </div>
    <!--表格结束-->
    <div class="gxList" :class="{gxshow: gxshow}">
      <i class="el-icon-d-arrow-left" :class="{iright: gxshow}" @click="gxshow = !gxshow"></i>
      <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="selectGx">
      <el-menu-item v-for="(item, index) in gxList" :key="item.id" :index="String(index)" >
        <i class="el-icon-setting"></i>
        <span slot="title">{{item.gxmc}}</span>
        <span class="jg">{{item.gxjg}}￥</span>
      </el-menu-item>
    </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'Everyday',
  	data(){
  	  return {
  	  	gxshow: false,
  	  	select_name: '',
  	  	achievementsList:[],
        gxList:[],
        currentpage: 1,
        totalPage: 1,
        pageNum: 8,
        aI:-1,
        gI:-1,
        addGxisconfirm: false
  	  }
  	},
  	computed:{
  		boxCol(){
  			return this.col;
  		},
  		totalje(){
  			let total = 0;
  			for(let i=0; i<this.achievementsList.length; i++){
	  			total += this.achievementsList[i].je
  			}
  			return total;
  		}
  	},
  	watch:{
  		currentpage(){

  		}
  	},
  	mounted(){
  	  this.getGxList();
      this.getAchievements();
  	},
  	methods:{
      getAchievements(){
      	var _this = this;
        this.$axios('getYgList').then((res) => {
          this.totalPage = Math.ceil(res.length / this.pageNum) * 10 - 10;
          for(let i = 0; i<res.length; i++){
      		_this.achievementsList.push({
          		id: res[i].id,
          		name: res[i].ygmc,
          		gxsl: [],
          		je: 0,
          		bz: '',
          		cjsj: `${new Date().getFullYear()}-${((new Date().getMonth() + 1).toString()).padStart(2, '0')}-${((new Date().getDate()).toString()).padStart(2, '0')}`
          	})
          }
        }).catch(err => {
          console.log(err);
        })
      },
  	  getGxList(){
  	  	this.$axios('getGxList').then((res) => {
  	  		this.gxList = res;
  	  	}).catch(err => {
          console.log(err);
        })
  	  },
  	  //计算金额
  	  formatterTotal(row, column){
  	  	let total = 0;
  	  	for(let i=0; i<row.gxsl.length; i++){
  	  		if(row.gxsl[i].number){
  	  			total += row.gxsl[i].number * row.gxsl[i].gj;
  	  		}else{
  	  			continue;
  	  		}
  	  	}
  	  	return total + '￥';
  	  },
      inputTotal(index, i){
        let total = 0;
        for(let i=0; i<this.achievementsList[index].gxsl.length; i++){
          if(this.achievementsList[index].gxsl[i].number){
            total += parseInt(this.achievementsList[index].gxsl[i].number) * this.achievementsList[index].gxsl[i].gj;
          }else{
            continue;
          }
        }
        this.$set(this.achievementsList[index], "je", total);
      },
  	  showGx(index, i){
  	  	this.gxshow = !this.gxshow;
  	  	this.aI = index;
  	  	this.gI = i;
  	  },
  	  selectGx(index){
  	  	if(this.aI !== -1 && this.gI !== -1){
  	  		this.$set(this.achievementsList[this.aI].gxsl[this.gI], "name", this.gxList[index].gxmc);
  	  		this.$set(this.achievementsList[this.aI].gxsl[this.gI], "gj", this.gxList[index].gxjg)
  	  	}
  	  },
  	  gxConfirm(event){
  	  	if(parseInt(event.currentTarget.value) !== 0){
  	  		this.addGxisconfirm = true;
  	  	}
  	  },
  	  //添加gxsl
  	  addGxsl(index){
  	  	if(this.aI === index){
  	  		this.gI += 1;
  	  	}else{
			this.aI = index;
  	  		this.gI = this.achievementsList[index].gxsl.length;
  	  	}
  	  	this.achievementsList[index].gxsl.push({name:'',sjmc:'', number:0, gj: 0});
  	  	this.$set(this.achievementsList[index], "gxsl", this.achievementsList[index].gxsl);
  	  },
  	  //删除gxsl
  	  delGxsl(index, i){
  	  	this.gxshow = false;
  	  	this.achievementsList[index].je = this.achievementsList[index].je - (this.achievementsList[index].gxsl[i].number * this.achievementsList[index].gxsl[i].gj);
  	  	this.achievementsList[index].gxsl.splice(i, 1);
  	  	this.$set(this.achievementsList[index], "gxsl", this.achievementsList[index].gxsl);
  	  },
  	  handleEdit(index, row){
  	  	console.log(index, row);
  	  },
  	  search(){

  	  },
	  handleCurrentChange(currentPage){
	  	this.currentpage = currentPage;
	  },
	  handleSizeChange(pnum){
	  	this.pageNum = pnum;
	  }
  	}
  }
</script>

<style scoped>
	.table{
		transition: margin-right 0.3s ease-in-out;
	}
	.table-right{
		margin-right: 320px;
	}
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
    .gxsl-item div{
    	position: relative;
    	display: flex;
    	flex-direction: row;
    	align-items: center;
    	font-size: 12px;
    	line-height: 24px;
    }
    .gxsl-item span{
    	flex: 1;
    	text-align: center;
    }
    .gxsl-item i{
    	font-style: normal;
    	flex: 0 0 20px;
    	text-align: center;
    }
    .gxsl-item i:last-child{
    	cursor: pointer;
    }

    .gxList{
    	position: absolute;
    	top: 32px;
    	right: -320px;
    	bottom: 0;
    	width: 320px;
    	background: #fff;
    	transition: right 0.3s ease-in-out;
    	box-shadow: -3px 0 10px #ddd;
    }
    .gxshow{
    	right: 0;
    }
    .total-wrapper{
    	line-height: 46px;
    	text-align: right;
    }

    .total-wrapper .total{
    	color: #FFB640;
    	font-weight: 600;
    }

    .gxList ul{
      height: 100%
    }

    .gxList >i{
      position: absolute;
      top: 50%;
      left: -20px;
      width: 40px;
      z-index: 100;
      cursor: pointer;
      transition: left 0.3s ease-in-out;
    }

    .jg{
      position: absolute;
      height: 56px;
      line-height: 56px;
      right: 30px;
    }
</style>
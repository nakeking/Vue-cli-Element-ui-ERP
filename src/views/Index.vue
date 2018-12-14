<template>
  <div class="index">
	  <div class="head">
      <el-row :gutter="20">
        <el-col :span = "8">
          <el-card shadow="hover" :body-style="{padding: 0}">
            <div class="grid-content grid-con-1">
              <img src="static/img/img.jpg" class="el-icon-view grid-con-icon" />
              <div class="grid-cont-right">
                <p class="grid-num">admin</p>
                <p>超级管理员</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span = "16">
          <el-row :gutter="20">
            <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: 0}">
              <div class="grid-content grid-con-1">
                <i class="el-icon-view grid-con-icon"></i>
                <div class="grid-cont-right">
                  <p class="grid-num">1234</p>
                  <p>用户访问量</p>
                </div>
              </div>
            </el-card>
            </el-col>
            <el-col :span="8">
            <el-card shadow="hover" :body-style="{padding: 0}">
              <div class="grid-content grid-con-2">
                <i class="el-icon-view grid-con-icon"></i>
                <div class="grid-cont-right">
                  <p class="grid-num">1234</p>
                  <p>用户访问量</p>
                </div>
              </div>
            </el-card>
            </el-col>
            <el-col :span="8" :body-style="{padding: 0}">
            <el-card shadow="hover" :body-style="{padding: 0}">
              <div class="grid-content grid-con-3">
                <i class="el-icon-view grid-con-icon"></i>
                <div class="grid-cont-right">
                  <p class="grid-num">1234</p>
                  <p>用户访问量</p>
                </div>
              </div>
            </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="schart">
      <el-card shadow="hover">
        <chart-line class="chartline" :data="chartLineData" :settings="chartSettingLine"></chart-line>
      </el-card>
      <el-card shadow="hover">
        <chart-histogram class="chartHistogram" :data="chartHistogramData" :settings="chartSettingHistogram"></chart-histogram>
      </el-card>
      <el-card shadow="hover">
        <chart-pie class="chartPie" :data="chartPieData" :settings="chartSettingPie"></chart-pie>
      </el-card>
    </div>
  </div>
</template>

<script>
  import chartLine from 'v-charts/lib/line';
  import chartHistogram from 'v-charts/lib/histogram';
  import chartPie from 'v-charts/lib/pie';
  export default {
  	name: 'Index',
    components: {
      chartLine,
      chartHistogram,
      chartPie
    },
  	data(){
  	  return {
        //折线图数据
        chartLineData:{
          columns: ['日期', '销售量'],
          rows: [
            {'日期': '1月1日','成本': 10, '销售量': 50},
            {'日期': '1月2日','成本': 10, '销售量': 100},
            {'日期': '1月3日','成本': 15, '销售量': 150},
            {'日期': '1月4日','成本': 15, '销售量': 120},
            {'日期': '1月5日','成本': 10, '销售量': 89},
            {'日期': '1月6日','成本': 20, '销售量': 110}
          ]
        },
        chartSettingLine: {
          metrics: ['成本', '销售量'],
          dimension: ['日期']
        },
        //柱状图数据
        chartHistogramData:{
          columns: ['日期', '销售量'],
          rows: [
            {'日期': '1月1日','成本': 10, '销售量': 50},
            {'日期': '1月2日','成本': 10, '销售量': 100},
            {'日期': '1月3日','成本': 15, '销售量': 150},
            {'日期': '1月4日','成本': 15, '销售量': 120},
            {'日期': '1月5日','成本': 10, '销售量': 89},
            {'日期': '1月6日','成本': 20, '销售量': 110}
          ]
        },
        chartSettingHistogram: {
          metrics: ['成本', '销售量'],
          stack: {'单价': ['成本', '销售量']}
        },
        //饼图
        chartPieData: {
          columns: ['日期', '销售量'],
          rows: [
            {'日期': '1月1日','成本': 10, '销售量': 50},
            {'日期': '1月2日','成本': 10, '销售量': 100},
            {'日期': '1月3日','成本': 15, '销售量': 150},
            {'日期': '1月4日','成本': 15, '销售量': 120},
            {'日期': '1月5日','成本': 10, '销售量': 89},
            {'日期': '1月6日','成本': 20, '销售量': 110}
          ]
        },
        chartSettingPie:{
          limitShowNum: 5
        }
  	  }
  	},
    created(){

    }
  }
</script>

<style scoped>
.head{
  margin-bottom: 20px;
}
.el-row{
  margin-bottom: 20px;
}
.grid-content{
  display: flex;
  align-items: center;
  height: 100px;
}
.grid-con-icon{
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  color: #fff;
  font-size: 36px;
}
.grid-cont-right{
  flex: 1;
  text-align: center;
  color: #999;
  font-size: 12px;
}
.grid-num{
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: rgb(45, 140, 240);
}
.grid-con-1 .grid-con-icon{
  background: rgb(45, 140, 240);
}
.grid-con-2 .grid-con-icon{
  background: rgb(100, 213, 114);
}
.grid-con-3 .grid-con-icon{
  background: rgb(242, 94, 67);
}

.schart .el-card{
  margin-bottom: 40px;
}
</style>
<template>
  <div class="basicform">
    <div class="crumbs">
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/basicform'}">表单相关</el-breadcrumb-item>
        <el-breadcrumb-item>基本表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="form-box">
        <el-form ref="form" :model="result" label-width="80px">
          <el-form-item label="头像">
            <el-upload class="upload-demo" action="#" :auto-upload="false" list-type="picture" :on-success="onSuccess" :before-upload="beforeAvatarUpload" :limit="1">
              <el-button size="small" type="primary">选择图片</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item label="表单名称"><el-input v-model="result.name" placeholder="表单名称"></el-input></el-form-item>
          <el-form-item label="选择器">
            <el-select v-model="result.region" placeholder="请选择">
              <el-option v-for="item in basicform.select" :key="item.id" :label="item.value" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="日期时间">
            <el-col :span="11">
              <el-date-picker type="date" v-model="result.date" placeholder="选择日期"></el-date-picker>
            </el-col>
            <el-col style="text-align:center" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker v-model="result.time" placeholder="选择时间"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="城市级联">
            <el-cascader :options="basicform.city" v-model="result.city"></el-cascader>
          </el-form-item>
          <el-form-item label="选择开关">
            <el-switch v-model="result.switch"></el-switch>
          </el-form-item>
          <el-form-item label="多选框">
            <el-checkbox-group v-model="result.checkbox">
              <el-checkbox label="选择1" name="checkbox"></el-checkbox>
              <el-checkbox label="选择2" name="checkbox"></el-checkbox>
              <el-checkbox label="选择3" name="checkbox"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="单选框">
            <el-radio-group v-model="result.radio">
              <el-radio label="选择1"></el-radio>
              <el-radio label="选择2"></el-radio>
              <el-radio label="选择3"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文本框">
            <el-input type="textarea" :rows="5" placeholder="文本框" v-model="result.textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'BasicForm',
  	data(){
  	  return {
        basicform:{
          select: [
            {id: 0, value: '选择1'},
            {id: 1, value: '选择2'},
            {id: 2, value: '选择3'}
          ],
          city: [
            {value: 'guangdong', label: '广东省',children: [{value: 'guangzhou', label: '广州市', children:[{value: 'tianhe', label: '天河区'},{value: 'haizhu', label: '海珠区'},{value: 'baiyun', label: '白云区'},{value: 'yuexiu', label: '越秀区'},{value: 'luogan', label: '萝岗区'}]},{value: 'shenzhen', label: '深圳市', children:[{value: 'luohu', label: '罗湖区'}, {value: 'futian', label: '福田区'}, {value: 'baoan', label: '宝安区'}, {value: 'longgan', label: '龙岗区'}, {value: 'longhua', label: '龙华区'}, {value: 'nanshan', label: '南山区'}]}]},
            {value: 'hunan', label: '湖南省', children: [{value: 'changsha', label: '长沙市', children: [{value: 'yuelu', label: '岳麓区'}]}]}
          ]
        },
        result: {
          name: '',
          region: '',
          date: '',
          time: '',
          city: [],
          switch: false,
          checkbox:[],
          radio: '',
          textarea: ''
        },
        param: "",
        src: ''
  	  }
  	},
  	mounted(){
  	  
  	},
  	methods:{
  	  onSuccess(file){
        console.log(file)
      },
      beforeAvatarUpload(file){

      },
      onSubmit(){
        console.log(this.result);
      }
  	}
  }
</script>

<style scoped lang="less">
.crumbs{
  margin-bottom: 20px;
}
.container{
  padding: 20px 20px;
  background: #fff;
  border:1px solid #ddd;
  border-radius: 5px;
}
</style>
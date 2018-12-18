<template>
  <div class="addcontrol">
    <ul>
      <li class="control-item">
		    <el-checkbox v-model="control.header">头部</el-checkbox>
      </li>
      <li class="control-item">
		    <el-checkbox v-model="control.nav" @click="toggleNav()">导航</el-checkbox>
        <i class="el-icon-edit-outline" @click="editNav()"></i>
      </li>
      <li class="control-item">
		    <el-checkbox v-model="control.customer">侧停客服</el-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  export default {
  	name: 'AddControl',
  	data(){
  	  return {
  	  	control:{
  	  		header: false,
  	  		nav: true,
  	  		customer: false
  	  	}
  	  }
  	},
    computed:{
      ...mapGetters([
        'navList',
        'editModel',
        'isNavControl'
      ])
    },
    watch:{
      control:{
        handler(curVal, oldVal){
          console.log(curVal, oldVal)
        },
        deep: true
      }
    },
  	methods:{
      editNav(){
        this.setEditModel(true);
      },
      toggleNav(){
        console.log(this.control.nav);
      },
      ...mapMutations({
        setEditModel: 'setEditModel'
      })
  	}
  }
</script>

<style scoped lang="less">
.addcontrol{
  position: relative;
  padding: 15px 15px;
  .control-item{
    position: relative;
    background: rgba(200,200,200,0.1);
    border: 1px solid rgba(200,200,200,0.2);
    height: 46px;
    line-height: 46px;
    padding: 0 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    i{
      position: absolute;
      right: 0;
      width: 50px;
      text-align: center;
      height: 46px;
      line-height: 46px;
      cursor: pointer;
    }
  }
}
</style>
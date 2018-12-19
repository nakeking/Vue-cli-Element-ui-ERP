<template>
  <div class="addmodular">
  	<ul>
      <li class="modular-list">
        <div class="head">
          <i class="el-icon-caret-right"></i>
          <p>常用模块</p>
        </div>
        <div class="modularBox">
          <ul>
            <!-- <drag :modular="modular.basic"> -->
              <li :key="item.id" v-for="(item, index) in modular.basic" class="item" :data-model="item.name" @click="addModular(item)">
                <i :class="item.icon"></i>
                <p>{{item.title}}</p>
              </li>
            <!-- </drag> -->
          </ul>
        </div>
      </li>
      <li class="modular-list">
        <div class="head">
          <i class="el-icon-caret-right"></i>
          <p>互动模块</p>
        </div>
        <div class="modularBox">
          <ul>
            <!-- <drag :modular="modular.interaction"> -->
              <li :key="item.id" v-for="(item, index) in modular.interaction" class="item" :data-control="item.name">
                <i :class="item.icon"></i>
                <p>{{item.title}}</p>
              </li>
            <!-- </drag> -->
          </ul>
        </div>
      </li>
      <li class="modular-list">
        <div class="head">
          <i class="el-icon-caret-right"></i>
          <p>高级模块</p>
        </div>
        <div class="modularBox">
          <ul>
            <!-- <drag :modular="modular.senior"> -->
              <li :key="item.id" v-for="(item, index) in modular.senior" class="item" :data-senior="item.name">
                <i :class="item.icon"></i>
                <p>{{item.title}}</p>
              </li>
            <!-- </drag> -->
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapMutations} from 'vuex';
  // import Drag from 'views/Draggable/Drag/Drag';
  export default{
  	name: "AddModular",
    // components:{
    //   Drag
    // },
  	data(){
  	  return {
        
  	  }
  	},
    computed:{
      ...mapState([
        'modular',
        'currPage'
      ])
    },
    methods:{
      addModular(item){
        if(item.parent){
          var parent = Object.assign({}, this.modular.basic.find((mitem) => {
            return mitem.name === item.parent
          }))
          parent.children = new Array();
          this.setCurrPageBody({parent, item});
        }else{
          this.setCurrPageBody(item);
        }
      },
      ...mapMutations({
        setCurrPageBody: 'setCurrPageBody'
      })
    }
  }
</script>

<style scoped lang="less">
.addmodular{
  position: relative;
  .modular-list{
    border-bottom: 1px solid #eee;
    cursor: pointer;
    overflow: hidden;
    .head{
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      i{
        flex: 0 0 40px;
        text-align: center;
      }
      p{
        flex: 1;
      }
    }
    .modularBox{
      overflow: hidden;
      font-size: 14px;
      line-height: 24px;
      color: #798288;
      overflow-x: hidden;
      .item{
        /*box-sizing: border-box;*/
        text-align: center;
        float: left;
        width: 33%;
        height: 86px;
        border: 1px dashed #eee;
        margin: 0 0 -1px -1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        i:before{
          font-size:22px;
        }
        &:hover{
          color: #5874d8;
        }
      }
      .hover{
        color: #5874d8;
      }
    }
    .modularBox::-webkit-scrollbar{
      width: 0;
    }
  }
}
</style>
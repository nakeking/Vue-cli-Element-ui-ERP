<template>
  <div class="draggable">
    <div class="modular">
      <div class="select">
        <ul>
          <li class="item" :class="{active: type === 'modular'}" @click="type = 'modular'">
            <i class="el-icon-edit-outline"></i>
            <p>模块</p>
          </li>
          <li class="item" :class="{active: type === 'control'}"  @click="type = 'control'">
            <i class="el-icon-menu"></i>
            <p>控件</p>
          </li>
          <li class="item" :class="{active: type === 'pages'}"  @click="type = 'pages'">
            <i class="el-icon-tickets"></i>
            <p>页面</p>
          </li>
        </ul>
      </div>
      <div class="select-box">
        <add-modular v-show="type === 'modular'"></add-modular>
        <add-control v-show="type === 'control'"></add-control>
        <add-pages v-show="type === 'pages'"></add-pages>
      </div>
    </div>
    <div class="main">
      <pages></pages>
    </div>
    <transition name="editModel">
      <div class="edit" v-show="editModel">
      </div>
    </transition>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex';
  import bus from 'components/bus';
  import AddModular from 'views/Draggable/Modular/AddModular';
  import AddControl from 'views/Draggable/Control/AddControl';
  import AddPages from 'views/Draggable/Pages/AddPages';
  import Pages from 'views/Draggable/Pages/Pages'
  export default {
  	name: 'Draggable',
    components: {
      AddModular,
      AddControl,
      AddPages,
      Pages
    },
  	data(){
  	  return {
        type: 'modular',
        obj: {
          pages:[
            {
              path: 'index',
              title: '首页',
              name: 'index',
              type: 1,
              isnav: true,
              body:[]
            },
            {
              path: 'home',
              title: '我的',
              name: 'home',
              type: 2,
              isnav: true,
              body:[]
            },
            {
              path: 'booking',
              title: '预约',
              name: 'booking',
              type: 2,
              isnav: false,
              body:[]
            },
            {
              path: 'news',
              title: '新闻资讯',
              name: 'news',
              type: 2,
              isnav: false,
              body:[]
            },
            {
              path: 'cardlist',
              title: '名片列表',
              name: 'cardlist',
              type: 2,
              isnav: false,
              body:[]
            }
          ],
          navList:{
            nav:[
              {id: 0, icon: 'el-icon-erp-shouye-xianxing', active: 'el-icon-erp-shouye-xianxing', path: 'index', title: '首页'},
              {id: 1, icon: 'el-icon-erp-wo', active: 'el-icon-erp-wo2', path: 'home', title: '我的'}
            ],
            color: '#ccc',
            activeColor: '#333',
            background: '#fff'
          }
        }
  	  }
  	},
    computed:{
      ...mapGetters([
        'pages',
        'currPage',
        'pageList',
        'navList',
        'editModel'
      ])
    },
    created(){
      bus.$emit('collapse', true);
      this.setCurrPage(this.obj.pages[0]);
      this.setPageList(this.obj.pages);
      this.setNavList(this.obj.navList);
    },
  	methods:{
      ...mapMutations({
        setCurrPage: 'setCurrPage',
        setPageList: 'setPageList',
        setNavList: 'setNavList',
        setEditModel: 'setEditModel'
      })
  	}
  }
</script>

<style scoped lang="less">
.modular{
  position: absolute;
  left: 0;
  top: 30px;
  bottom: 0;
  width: 380px;
  background: #fff;
  box-shadow: 2px 0 5px #ddd;
  .select{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgb(84, 92, 100);
    width: 65px;
    z-index: 1000;
    cursor: pointer;
    .item{
      text-align: center;
      padding: 20px 0;
      border-bottom: 1px solid rgba(200,200,200,0.2);
      color: rgba(0, 0, 0, 0.3);
      i:before{
        font-size: 32px;
      }
      p{
        font-size: 14px;
        line-height: 24px;
      }
    }
    .active{
      color: #fff !important;
    }
  }
  .select-box{
    position: absolute;
    left: 65px;
    width: 315px;
    top: 0;
    bottom: 0;

  }
}
.main{
  position: relative;
  width: 375px;
  height: 667px;
  box-shadow: 0 5px 10px #ccc;
  margin: 0 auto;
}
.edit{
  position: absolute;
  right: 0;
  top: 30px;
  bottom: 0;
  width: 405px;
  background: #fff;
  box-shadow: -2px 0 5px #ddd;
}
.switch-enter-active, .switch-leave-active{
  transition: opacity 0.3s;
}
.switch-enter, .switch-leave-to{
  opacity: 0;
}
.editModel-enter-active, .editModel-leave-active{
  transition: all 0.4s ease;
}
.editModel-enter, .editModel-leave-to{
  transform: translate3d(405px, 0, 0);
  opacity: 0;
}
</style>
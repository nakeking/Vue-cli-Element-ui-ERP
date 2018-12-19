<template>
  <div class="drag">
    <draggable :v-model="modular" @remove="removeHandle()" :options="dragOptions">
      <transition-group tag="div" class="drag-ul">
        <slot></slot>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default{
  	name: 'drag',
    props:{
      modular:{
        type: Array,
        default: () => []
      }
    },
  	components: {
  	  draggable
  	},
  	data(){
  	  return {
  	  	dragOptions:{
  	  	  animation: 200,
  	  	  scroll: true,
          group: 'sortlist',
          ghostClass: 'ghost-style'
  	  	}
  	  }
  	},
  	methods:{
      removeHandle(event){
        console.log(event)
      }
  	}
  }
</script>

<style scoped lang="less">
.drag{
  position: relative;
  width: 100%;
  height: 100%;
  div{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    .drag-ul{
      width: 100%;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
      padding-right: -17px;
    }
    .drag-ul::-webkit-scrollbar{
        width: 0;
    }
  }
  .ghost-style{
    color: transparent;
    border-style: dashed;
  }
}
</style>

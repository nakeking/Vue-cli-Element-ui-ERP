<template>
  <div class="drag">
    <draggable :v-model="modular" @remove="removeHandle()" :options="dragOptions">
      <transition-group>
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
  	  	  animation: 120,
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
    overflow: scroll;
    overflow-x: hidden;
    span{
      display: block;
      width: calc(100% + 17px);
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
    }
  }
}
</style>

<template>
  <div class="text" @mouseenter="selectCurrModular()">
  	<div class="text-input" :contenteditable="contenteditable" @dblclick.native="editText()">双击输入内容...</div>
  </div>
</template>

<script>
  export default{
  	name: "TextModular",
    props:{
      dataItem:{
        type: Object,
        default: () => {}
      },
      dataIndex:{
        type: Number,
        default: -1
      }
    },
  	data(){
  	  return {
        contenteditable: false
  	  }
  	},
    methods:{
      selectCurrModular(){
        console.log(this.dataItem)
      },
      editText(){
        console.log(1)
      }
    }
  }
</script>

<style scoped lang="less">
.text{
  width: 160px;
  padding: 10px 10px;
  line-height: 24px;
}
.text:hover{
  border: 1px dashed #666;
}
</style>
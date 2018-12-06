<template>
  <div class="view">
  	<v-header></v-header>
  	<v-sidebar></v-sidebar>
  	<div class="content-box" :class="{'content-collapse': collapse}">
  	  <v-tags></v-tags>
  	  <div class="content">
  	  	<transition name='move' mode="out-in">
  	  	  <keep-alive>
  	  	  	<router-view></router-view>
  	  	  </keep-alive>
  	  	</transition>
  	  </div>
  	</div>
  </div>
</template>

<script>
  import vHeader from 'components/Header/Header'
  import vSidebar from 'components/Sidebar/Sidebar'
  import vTags from 'components/Tags/Tags'
  import bus from 'components/bus'
  export default {
  	name: 'Views',
  	components: {
  		vHeader,
  		vSidebar,
  		vTags
  	},
  	data(){
  	  return {
  	  	collapse: false
  	  }
  	},
  	created(){
  		bus.$on('collapse', msg => {
  			this.collapse = msg
  		})

  		bus.$on('tags', msg => {
  			let arr = [];
  			for(let i = 0; i < msg.length; i++){
  				msg[i].name && arr.push(msg[i].name)
  			}
  			this.tagsList = arr;
  		})
  	}
  }
</script>

<style lang="less" scoped>
</style>
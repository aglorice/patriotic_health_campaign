<template>
	<div id="app">
<!--    <home_page></home_page>-->
    <transition :name="transitionName" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
	</div>
</template>

<script>
// import home_page from "@/pages/home/home_page.vue";

export default {

	name: 'App',
  data(){
    return{
      transitionName:'slide-left'
    }
  },
	// components: {home_page}
}
</script>

<style>
@import "@/style/normalize.css";
</style>

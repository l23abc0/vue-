<template>
  <div id="app">
    <router-view></router-view>
    <Maintabbar></Maintabbar>
  </div>
</template>

<script>
	import Maintabbar from 'components/content/mainTabar/Maintabbar';
  export default {
    name: 'App',
    components: {
      Maintabbar
    }
  }
</script>

<style>
	@import url("assets/css/base.css");
</style>

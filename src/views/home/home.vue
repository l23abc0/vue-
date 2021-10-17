<template>
	<div>
    <NavBar class="navhome">
      <div slot="center">
        购物街
      </div>
    </NavBar>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/NavBar';
export default {
		name:'home',
    components:{
      NavBar,
    }
	}
</script>

<style>
  .navhome{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>

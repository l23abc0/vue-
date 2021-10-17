<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'tabbar'
	}
</script>

<style>
	#tab-bar{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 49px;
		display: flex;
		background-color: #f6f6f6;
		box-shadow: 0 -1px 10px rgb(246,246,246,.9);
	}
</style>

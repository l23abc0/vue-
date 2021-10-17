<template>
		<tab-bar>
			<items path="/home" :activecolor="acolor">
				<span slot="item_icon" class="iconfont icon-Home" ></span>
				<p slot="item_text" class="item-text">首页</p>
			</items>
			<items path="/cgy" :activecolor="acolor">
				<span slot="item_icon" class="iconfont icon-Category"></span>
				<p slot="item_text" class="item-text">分类</p>
			</items>
			<items path="/star" :activecolor="acolor">
				<span slot="item_icon" class="iconfont icon-Star"></span>
				<p slot="item_text" class="item-text">收藏</p>
			</items>
			<items path="/pfile" :activecolor="acolor">
				<span slot="item_icon" class="iconfont icon-Profile"></span>
				<p slot="item_text" class="item-text">我的</p>
			</items>
		</tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar';
	import items from 'components/common/tabbar/items';
export default {
  name: 'Maintabbar',
  data () {
    return {
    }
  },
	components:{
		TabBar,
		items,
	},
}
</script>

<style scoped>

</style>

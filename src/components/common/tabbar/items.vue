<template>
	<div :style="activestyle" class="tab-bar-item" @click="itemCli">
		<slot name="item_icon"></slot>
		<slot name="item_text"></slot>
	</div>
</template>

<script>
export default {
		name:'items',
		props:{
			path:String,
			activecolor:{
				type:String,
				// 默认值：default
				default:'#ec4141'
			}
		},
		computed:{
			isActive() {
				//  /home -> items(/home) == true
				//  /home -> items(/cgy) == false
				//  /home -> items(/star) == false
				//  /home -> items(/pfile) == false
				return this.$route.path.indexOf(this.path) !== -1
			},
			activestyle(){
				return this.isActive ? {color: this.activecolor} : {}
			}

		},
		methods:{
			itemCli(){
				// this.$route.push(this.path);
				this.$router.replace(this.path);
			}
		}
	}
</script>

<style>
	/* 在其他文件里用 import 引用可以不用加@ 符号，但在这里一定要 */
	@import url("~assets/font_cions/iconfont.css");

	.tab-bar-item{
		flex: 1;
		text-align: center;
		padding-top: 2px;
	}
	.iconfont{
		font-size: 22px;
	}
	.item-text{
		font-size: 12px;
    margin-top: -3px;
	}
/* 	.active{
		color: #EC4141;
	} */
</style>

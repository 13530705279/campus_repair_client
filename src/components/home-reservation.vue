<template>
	<div content>
		<transition name="fade">
			<div class="popup-mask" v-show="isMask"></div>
		</transition>
		<div class="title-text">我要报修</div>
		<div class="tab-content">
			<cube-scroll ref="scroll" :options="options" @pulling-down="onPullingDown" :data="data">
				<div style="height:1000px">
					<ul>
						<li v-for="(item,index) of data" :key="index">{{item.text}}</li>
					</ul>
				</div>
			</cube-scroll>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				text: "测试",
				options: {
					observeDOM: true,
					click: true,
					probeType: 1,
					scrollbar: false,
					pullUpLoad: false,
					pullDownRefresh: {
						threshold: 50,
						stop: 50,
						txt:'刷新成功'
					}
				},
				isMask: false,
				data: [
					{
						id: "1",
						text: "1"
					},
					{
						id: "1",
						text: "1"
					},
					{
						id: "1",
						text: "1"
					},
					{
						id: "1",
						text: "1"
					},
					{
						id: "1",
						text: "1"
					},
					{
						id: "1",
						text: "1"
					}
				],
				data2: [
					{
						id: "2",
						text: 1
					},
					{
						id: "2",
						text: "2"
					},
					{
						id: "2",
						text: "2"
					},
					{
						id: "2",
						text: "2"
					},
					{
						id: "2",
						text: "2"
					},
					{
						id: "2",
						text: "2"
					},
					{
						id: "2",
						text: Math.random()
					}
				]
			};
		},
		mounted() {},
		methods: {
			onPullingDown() {
				// this.isMask = true;
				setTimeout(() => {
					this.text = "策划实施";
					// this.$refs.scroll.forceUpdate();
					this.data2[0].text = Math.random();
					let arr = this.data2;
					this.data = JSON.parse(JSON.stringify(this.data2));
					// this.isMask = false;
				}, 1000);
			}
		}
	};
</script>

<style lang='scss' scoped>
	// @import "../assets/style/mixin.scss";
	.popup-mask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		background-color: #25262d;
		opacity: 0.4;
		pointer-events: auto;
		z-index: 2019;
	}
	.title-text {
		height: px2rem(45);
		font-size: px2rem(16);
		border-bottom: 1px solid #c7c7c9;
		text-align: center;
		line-height: px2rem(45);
		background: #fff;
	}
	.tab-content {
		height: calc(100% - 1.2rem);
		font-size: px2rem(16);
		@include scroll;
	}
</style>
<style>
	.tab-content >>> .cube-pulldown-loaded {
		font-size: 16px !important;
	}
</style>


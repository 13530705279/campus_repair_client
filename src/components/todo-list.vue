<template>
	<div content>
		<div class="title-text">我的报修</div>
		<div class="message-bg">
			<div class="message-icon">
				<img src="@/assets/message.svg" alt>
			</div>
		</div>
		<div class="repair-list" ref="wrapper">
			<!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
			<!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad"> -->
			<scroll
				class="wrapper"
				:data="data"
				:pulldown="pulldown"
				@pulldown="loadData"
				@listenScroll="test"
			>
				<ul>
					<li class="list-item" v-for="item in list" :key="item">
						<div class="repair-status" :class="{'待接单':'not-received','已处理':'is-received'}['已处理']">已处理</div>
						<div class="repair-tag">
							<div class="repair-content">
								<div class="repair-title">
									<h3>
										<span>莉莉</span>
										<span>[设备报修]</span>
									</h3>
									<span class="repair-time">2019-3-15</span>
								</div>
								<div class="repair-problem">
									<p>南四136</p>
									<p>浴室故障</p>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</scroll>
			<!-- </van-list> -->
			<!-- </van-pull-refresh> -->
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import scroll from "./better-scroll.vue";
	import { Button, Uploader, Icon, PullRefresh, Toast, List, Cell } from "vant";
	const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	Vue.use(Button)
		.use(Uploader)
		.use(Icon)
		.use(PullRefresh)
		.use(Toast)
		.use(List)
		.use(Cell);
	export default {
		components: { scroll },
		data() {
			return {
				isLoading: false,
				count: 0,
				loading: false,
				finished: false,
				list: test,
				status: "待接单",
				data: [],
				pulldown: true
			};
		},
		created() {
			this.loadData();
		},
		methods: {
			onRead(file) {
				// console.log(file);
			},
			onRefresh() {
				setTimeout(() => {
					this.$toast("刷新成功");
					this.isLoading = false;
					this.count++;
				}, 500);
			},
			test(d) {
				console.log(d);
			},
			onLoad() {
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list.push(this.list.length + 1);
					}
					// 加载状态结束
					this.loading = false;

					// 数据全部加载完成
					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 500);
			},
			loadData() {
				// this.statsT = true;
			}
		}
	};
</script>

<style lang='scss' scoped>
	@import "../assets/style/mixin.scss";
	@import "../assets/style/keyframe.scss";
	.title-text {
		height: px2rem(45);
		font-size: px2rem(16);
		border-bottom: 1px solid #c7c7c9;
		text-align: center;
		line-height: px2rem(45);
		background: #fff;
	}
	.message-bg {
		position: relative;
		height: px2rem(140);
		background: url("../assets/home-bg.jpg") no-repeat;
		background-size: cover;
		.message-icon {
			position: absolute;
			top: px2rem(20);
			left: px2rem(20);
			width: px2rem(42);
			height: px2rem(42);
			@include bounceIn;
			img {
				height: 100%;
				width: 100%;
			}
		}
	}
	.repair-list {
		// position: relative;
		padding: 10px 5px 0 5px;
		height: calc(100% - 4.93333rem);
		@include scroll;
		ul {
			.list-item {
				.repair-status {
					line-height: px2rem(24);
					font-size: px2rem(14);
					color: #fff;
					width: px2rem(50);
					border-radius: px2rem(4);
					text-align: center;
					margin-bottom: 5px;
				}
				.repair-tag {
					width: 100%;
					padding: 0 10px 10px 10px;
					border-radius: px2rem(4);
					.repair-content {
						width: 100%;
						border: 1px solid #dddfe1;
						border-radius: px2rem(6);
						background: #fff;
						.repair-title {
							display: flex;
							justify-content: space-between;
							padding: px2rem(5) px2rem(10);
							position: relative;
							&::after{
								content:'';
								width: 100%;
								position: absolute;
								border-bottom: 1px solid #e9ebee;
								transform: translateY(.5);
								bottom: 0;
								left: 0;
							}
							h3{
								font-size: px2rem(18);
								font-weight: 500;
								color: #000;
							}
							.repair-time{
								font-size: px2rem(16);
								color: #81858f;
							}
						}
						.repair-problem{
							padding:px2rem(5) px2rem(10);
							font-size: px2rem(16);
							color:#485060;
							p{
								line-height: px2rem(25)
							}
						}
					}
				}
			}
			.not-received {
				background: #ff9900;
			}
			.is-received {
				background: #18bf6a;
			}
			.is-repair{
				background: #2c8df2;
			}
		}
	}
</style>

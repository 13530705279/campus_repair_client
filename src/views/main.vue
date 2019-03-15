<template>
	<div content>
		<transition :name="animation" mode="out-in">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				exclude: "task-detail,task-handle",
				animation: ""
			};
		},
		watch: {
			$route(to, from) {
				if (!from.meta.index) {
					this.animation = "";
					return;
				}
				//如果to索引大于from索引,判断为前进状态,反之则为后退状态
				if (to.meta.index > from.meta.index) {
					//设置动画名称
					this.animation = "slide-left";
				} else {
					this.animation = "slide-right";
				}
			}
		}
	};
</script>

<style lang='scss'>
	.slide-left-enter,
	.slide-right-leave-to {
		transform: translate3d(100%, 0, 0);
		opacity: 0;
	}
	.slide-left-leave-to,
	.slide-right-enter {
		transform: translate3d(-100%, 0, 0);
		opacity: 0;
	}
	.slide-left-enter-active,
	.slide-left-leave-active {
		transition: all 0.1s linear;
	}
</style>

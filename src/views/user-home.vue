<template>
	<div content>
		<div class="home-content">
			<!-- <cube-slide
        ref="slide"
        :showDots="false"
        :loop='false'
        :autoPlay="false"
        @change="getSlideIndex"
        :initial-index="initialIndex"
        :options="options"
      >
        <cube-slide-item>
          <todo-list></todo-list>
        </cube-slide-item>
        <cube-slide-item>
          <home-reservation></home-reservation>
        </cube-slide-item>
        <cube-slide-item>
          <person-list></person-list>
        </cube-slide-item>
			</cube-slide>-->
			<cube-tab-panels v-model="selectedLabel" content>
				<cube-tab-panel label="我的报修" content>
           <todo-list></todo-list>
				</cube-tab-panel>
        <cube-tab-panel label="我要报修" content>
           <home-reservation></home-reservation>
				</cube-tab-panel>
        <cube-tab-panel label="个人中心" content>
           <person-list></person-list>
				</cube-tab-panel>
			</cube-tab-panels>
		</div>
		<div class="bottom-bar">
			<cube-tab-bar v-model="selectedLabel" :data="tabs" @change="changeHandler"></cube-tab-bar>
		</div>
	</div>
</template>

<script>
	import TodoList from "@/components/todo-list.vue";
	import HomeReservation from "@/components/home-reservation.vue";
	import PersonList from "@/components/person-list.vue";
	import { mapState } from "vuex";
	export default {
		components: { TodoList, HomeReservation, PersonList },
		data() {
			return {
				currentComponent: "TodoList",
				selectedLabel: "我的报修",
				initialIndex: 0,
				options: {
					momentum: false,
					click: true,
					observeDOM: false
				},
				tabs: [
					{
						label: "我的报修",
						icon: "cubeic-notification"
					},
					{
						label: "我要报修",
						icon: "cubeic-calendar"
					},
					{
						label: "个人中心",
						icon: "cubeic-person"
					}
				]
			};
		},
		computed: {
			...mapState(["userInfo"])
		},
		mounted() {
			const toast = this.$createToast({
				txt: "登陆成功",
				type: "correct"
			});
			toast.show();
		},
		methods: {
			exit() {
				this.$router.push({ path: "/login" });
			},
			// getSlideIndex(index) {
			// 	if (this.selectedLabel == this.tabs[index].label) return;
			// 	this.selectedLabel = this.tabs[index].label;
			// },
			changeHandler(label) {
				// if you clicked different tab, this methods can be emitted
				this.selectedLabel = label;
			}
		}
	};
</script>

<style lang='scss'>
	@import "../assets/style/mixin.scss";
	.home-content {
		height: calc(100% - 50px);
    // background: #efeef3;
    .cube-tab-panels{
      .cube-tab-panels-group{
        height: 100%;
        width: 100%;
      }
    }
	}
	.bottom-bar {
		position: relative;
		height: 50px;
		font-size: px2rem(16);
		.cube-tab-bar {
			.cube-tab_active {
				color: $baseColor !important;
			}
		}
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			border: 1px solid #c7c7c9;
			width: 100%;
			transform: scaleY(0.5);
		}
	}
</style>


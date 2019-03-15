<template>
	<div content>
		<div class="title-text">个人中心</div>
		<div class="user-bg"></div>
		<ul class="person-list" style="margin-bottom:45px;">
			<router-link to="/person-list/1">
				<li>
					<div class="item-icon">
						<i class="cubeic-phone"></i>
					</div>
					<div class="noborder-top">
						<span>联系方式</span>
						<i class="cubeic-arrow"></i>
					</div>
				</li>
			</router-link>
			<li>
				<div class="item-icon">
					<i class="cubeic-message"></i>
				</div>
				<div>
					<span>预约记录</span>
					<i class="cubeic-arrow"></i>
				</div>
			</li>
			<li>
				<div class="item-icon">
					<i class="cubeic-smile"></i>
				</div>
				<div>
					<span>个人信用</span>
					<i class="cubeic-arrow"></i>
				</div>
			</li>
		</ul>
		<ul class="person-list">
			<li>
				<div class="item-icon">
					<i class="cubeic-question"></i>
				</div>
				<div class="noborder-top">
					<span>使用帮助</span>
					<i class="cubeic-arrow"></i>
				</div>
			</li>
			<li>
				<div class="item-icon">
					<i class="cubeic-close"></i>
				</div>
				<div>
					<span>退出</span>
					<i class="cubeic-arrow"></i>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		}
	};
</script>

<style lang='scss' scoped>
	@import "../assets/style/mixin.scss";
	.title-text {
		height: px2rem(45);
		font-size: px2rem(16);
		border-bottom: 1px solid #c7c7c9;
		text-align: center;
		line-height: px2rem(45);
		background: #fff;
	}
	.user-bg {
		height: px2rem(140);
		background: url("../assets/user-bg.jpg") no-repeat;
		background-size: cover;
	}
	.person-list {
		background: #fff;
		position: relative;
		font-size: px2rem(16);
		li {
			line-height: px2rem(45);
			color: $baseColor !important;
			div:nth-child(1) {
				width: px2rem(50);
				text-align: center;
			}
			div:nth-child(2) {
				display: flex;
				justify-content: space-between;
				flex-grow: 1;
				position: relative;
				padding: 0 10px;
				&::after {
					content: "";
					width: 100%;
					border: 1px solid #c7c7c9;
					transform: scaleY(0.5);
					position: absolute;
					top: 0;
					left: 0;
				}
			}
			.noborder-top {
				&::after {
					content: "";
					border: 0px;
				}
			}
      @include left;
      &:active{
        background: #c7c7c9;
      }
		}
		&::after {
			content: "";
			width: 100%;
			border: 1px solid #c7c7c9;
			transform: scaleY(0.5);
			position: absolute;
			bottom: 0;
			left: 0;
		}
		&::before {
			content: "";
			width: 100%;
			border: 1px solid #c7c7c9;
			transform: scaleY(0.5);
			position: absolute;
			top: 0;
			left: 0;
		}
	}
</style>

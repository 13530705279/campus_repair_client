<template>
  <div content>
    <div class="user-register">
      <p class="register-title">用户注册</p>
      <ul>
        <li>
          <cube-input v-model="value1" :clearable="clearable">
            <span class="register-label" slot="prepend">账号</span>
          </cube-input>
        </li>
        <li>
          <cube-input v-model="value2" :clearable="clearable">
            <span class="register-label" slot="prepend">用户名</span>
          </cube-input>
        </li>
        <li>
          <cube-input v-model="value3" :clearable="clearable">
            <span class="register-label" slot="prepend">密码</span>
          </cube-input>
        </li>
        <li>
          <cube-input v-model="value4" :clearable="clearable">
            <span class="register-label" slot="prepend">确认密码</span>
          </cube-input>
        </li>
      </ul>
      <cube-button :primary="true" style="margin-bottom:10px">注册</cube-button>
      <cube-button :primary="true">重置</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      clearable: {
        visible: true,
        blurHidden: true
      }
    };
  }
};
</script>

<style lang='scss' scoped>
@import "../assets/style/mixin.scss";
.user-register {
  position: absolute;
  width: 90%;
  padding: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba($color: #ccc, $alpha: 0.5);
  border-radius: px2rem(10);
  .register-title {
    text-align: center;
    line-height: px2rem(50);
    margin-bottom: 10px;
  }
  ul {
    li {
      margin-bottom: 10px;
      .register-label {
        width: px2rem(60);
        text-align: center;
      }
    }
  }
  .cube-btn {
    line-height: 0 !important;
  }
}
</style>

<template>
  <div content style="background: #7d8188;">
    <div class="user-login">
      <div class="login-logo">
        <img src="@/assets/logo.png" alt>
      </div>
      <ul>
        <li class="user-input">
          <cube-input
            v-model="form.account"
            placeholder="请输入账号"
            :clearable="clearable_1"
            :autocomplete="true"
          >
            <span class="login-label" slot="prepend">账号</span>
          </cube-input>
        </li>
        <li class="user-input">
          <cube-input
            v-model="form.password"
            placeholder="请输入密码"
            :type="type"
            :maxlength="maxlength"
            :autofocus="autofocus"
            :autocomplete="autocomplete"
            :eye="eye"
          >
            <span class="login-label" slot="prepend">密码</span>
          </cube-input>
        </li>
      </ul>
      <cube-button :primary="true" style="margin-bottom:10px" @click="login">登陆</cube-button>
      <cube-button :primary="true" @click="register">注册</cube-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: "",
        password: ""
      },
      clearable_1: {
        visible: true,
        blurHidden: false
      },
      type: "password",
      readonly: true,
      maxlength: 100,
      disabled: true,
      autofocus: true,
      autocomplete: true,
      eye: {
        open: true,
        reverse: true
      }
    };
  },
  methods: {
    login() {
      const toast = this.$createToast({
        time: 0,
        txt: "正在登陆...",
        mask: true
      });
      toast.show();
      setTimeout(() => {
        toast.hide();
        this.$router.push({ path: "/user-home" });
      }, 2000);
    },
    register() {
      this.$router.push({ path: "/user-register" });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "../assets/style/mixin.scss";
.user-login {
  position: absolute;
  width: 90%;
  padding: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba($color: #ccc, $alpha: 0.5);
  border-radius: px2rem(10);
  .login-logo {
    width: 100%;
    @include center;
    img {
      max-width: 100%;
      height: px2rem(100);
    }
  }
  .user-input {
    margin-bottom: px2rem(10);
    .login-label {
      width: px2rem(100);
      font-size: px2rem(20);
      text-align: center;
    }
  }
  .cube-btn {
    line-height: 0 !important;
  }
}
</style>

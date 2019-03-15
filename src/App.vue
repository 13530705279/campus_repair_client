<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
    let fontSize = window.innerWidth / 10
    fontSize = fontSize > 50 ? 50 : fontSize
    const html = document.querySelector('html')
    html.style.fontSize = fontSize + 'px'
  })
export default {
  name: 'app',
}
</script>

<style lang='scss'>
@import "./assets/style/mixin.scss";
@import './assets/style/reset.scss';
@import './assets/style/tools.scss';
html,body{
  height: 100%;
  width: 100%;
}
 #app {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>

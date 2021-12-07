<template>
  <div class="container">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Vue 3 - setup + Vite + Vant" />
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/random-img" icon="search">随机图片</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

let active = ref(0)

</script>

<style lang="scss">
  #app {
    text-align: center;
  }

  .logo {
    width: 100px;
  }

</style>
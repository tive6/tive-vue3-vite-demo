<template>
  <img class="logo" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Vue 3 - setup + Vite + Vant" />
  <div>
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

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="scss">
  #app {
    text-align: center;
  }

  .logo {
    width: 100px;
  }

</style>
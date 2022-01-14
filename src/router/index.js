import {createRouter, createWebHistory} from 'vue-router'
import { defineAsyncComponent } from 'vue'
// const path = require('path')

const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/tive-vue3-vite-demo/' : '/'

const router = createRouter({
    history: createWebHistory(basePath), // 如果是根目录部署请配置为 /
    routes: [
        // route -> routes
        {
            path: '/',
            name: 'index',
            component: defineAsyncComponent(() => import(`../views/index.vue`)),
        },
        {
            path: '/random-img',
            name: 'random-img',
            component: defineAsyncComponent(() => import(`../views/randomImg.vue`)),
        },
        {
            path: '/wasm',
            name: 'wasm',
            component: defineAsyncComponent(() => import(`../views/wasm.vue`)),
        },
        {
            path: '/*',
            redirect: '/',
        },
    ],
})
router.beforeEach((to, from, next)=>{
    // console.log(to, from)
    next()
})
router.afterEach((to, from)=>{
    // console.log('afterEach')
})

export default router
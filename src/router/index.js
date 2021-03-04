import {createRouter, createWebHistory} from 'vue-router'
// const path = require('path')

const _import = (path) => () => import(`../views/${path}.vue`);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // route -> routes
        {
            path: '/',
            name: 'index',
            component: _import('index'),
        },
        {
            path: '/random-img',
            name: 'random-img',
            component: _import('randomImg'),
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
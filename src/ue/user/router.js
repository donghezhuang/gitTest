import Vue from "vue"
import VueRouter from "vue-router"

import Login from './sheets/Login.vue'
import Failure from './sheets/Failure.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/ue/user/login', name: 'login', component: Login, props: true },
    { path: '/ue/user/*', name: 'failure', component: Failure, props: true }
]

const router = new VueRouter({ mode: 'history', routes })

export default router
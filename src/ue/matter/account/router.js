import Vue from "vue"
import VueRouter from "vue-router"

import Info from './sheets/Info.vue'

import Failure from './sheets/Failure.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/ue/matter/account/info', name: 'info', component: Info, props: true },
    { path: '/ue/matter/console/*', name: 'failure', component: Failure, props: true }
]

const router = new VueRouter({ mode: 'history', routes })

export default router
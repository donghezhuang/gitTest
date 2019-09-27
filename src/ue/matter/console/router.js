import Vue from "vue"
import VueRouter from "vue-router"

import Tel from './sheets/Tel.vue'
import Cdr from './sheets/Cdr.vue'
import Order from './sheets/Order.vue'
import Task from './sheets/Task.vue'

import Failure from './sheets/Failure.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/ue/matter/console/tel', name: 'tel', component: Tel, props: true },
    { path: '/ue/matter/console/cdr', name: 'cdr', component: Cdr, props: true },
    { path: '/ue/matter/console/order', name: 'order', component: Order, props: true },
    { path: '/ue/matter/console/task', name: 'task', component: Task, props: true },
    { path: '/ue/matter/console/*', name: 'failure', component: Failure, props: true }
]

const router = new VueRouter({ mode: 'history', routes })

export default router
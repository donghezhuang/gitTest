import Vue from "vue"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Message from '@/tms/components/message'

import Main from "./Main.vue"
import router from "./router.js"

Vue.config.productionTip = false

Vue.prototype.$message = Message
Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(Main)
}).$mount("#user")
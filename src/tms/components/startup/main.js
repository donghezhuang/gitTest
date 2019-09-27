import Vue from "vue"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { TmsEventPlugin, TmsAxiosPlugin } from "tms-vue"
import Message from '@/tms/components/message'

function onFailure() {
    this.$tmsEmit('main-failed')
}

function getCached() {
    let item = sessionStorage.getItem('access_token')
    if (item) {
        let [accessToken, expireAt] = item.split(':')
        if (expireAt * 1000 < new Date) {
            return false
        }
        return accessToken
    }
    return false
}

const oDefaultOptions = {
    mounted() {
        let myAccessToken = getCached();
        if(!myAccessToken) {
            onFailure.call(this)
        } else {
            let rule = Vue.TmsAxios.newInterceptorRule({
                requestParams: new Map([
                    ['access_token', myAccessToken]
                ]),
                onRetryAttempt: (res) => {
                    if (res.data.code === 20001) {
                       
                        return false
                    }
                    return Promise.resolve(false)
                }
            })
            Vue.TmsAxios({ name: 'api-ue', rules: [rule], config: { baseURL: '/api/ue/' } })
            this.$tmsEmit('main-loaded')
        }
    }
}

Vue.config.productionTip = false

Vue.prototype.$message = Message

// 全局的事件广播接收机制
Vue.use(TmsEventPlugin)
Vue.use(TmsAxiosPlugin)
Vue.use(ElementUI)

class TmsVue extends Vue {
    constructor(oAppOptions) {
        let oOptions = {}
        Object.assign(oOptions, oDefaultOptions, oAppOptions)
        super(oOptions)
    }
}

export default TmsVue
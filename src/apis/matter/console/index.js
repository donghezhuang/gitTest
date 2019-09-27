import { TmsAxios } from 'tms-vue'

export default {
    /**
     * 获取话单列表
     ** 
     * @param {String} appId 
     */
    getList() {
        return TmsAxios.ins({name: 'pin'}).get("/ue/captcha/")
            .then(rst => rst.data.result)
            .catch(err => Promise.reject(err))
    },
}
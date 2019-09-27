import { TmsAxios } from 'tms-vue'

export default {
    /**
     * 获取账号信息
     *
     * @returns
     */
    getAccountInfo() {
        return TmsAxios.ins('api-ue').get('/account')
            .then(rst => rst.data.result)
            .catch(err => Promise.reject(err))
    }
}
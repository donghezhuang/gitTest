import { TmsAxios } from 'tms-vue'

export default {
    /**
     * 获取验证码
     *
     * @returns
     */
    getPin() {
        return TmsAxios.ins({name: 'pin', config: {baseURL: '/ctp/ue/'}}).get("/captcha")
            .then(rst => rst.data.result)
            .catch(err => Promise.reject(err))
    },
    getToken(userArg) {
        return TmsAxios.ins({name: 'token', config: {baseURL: '/ctp/ue/auth'}}).post("/token", userArg)
            .then(rst => rst.data.result)
            .catch(err => Promise.reject(err))
    }
}
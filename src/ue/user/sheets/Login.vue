<template>
    <div id="login">
        <div class="login-topbar"></div>
        <div class="login-wrap">
            <el-row>
                <el-col lg="6" xl="6" offset="6">
                    <div class="login-account">
                        <div class="login-account-iframe">
                            <h3>密码登录</h3>
                            <el-input placeholder="用户名" v-model="user.account" clearable></el-input><br/>
                            <el-input placeholder="密码" v-model="user.pwd" show-password></el-input><br/>
                            <!-- <el-input placeholder="验证码" v-model="user.captcha">
                                <template slot="prepend"><img :src="codeImgUrl" alt="点击更换" @click="refreshpin()"></template>
                            </el-input><br/> -->
                            <el-button size="medium" @click="submit(user)">登录</el-button>
                            <div class="login-account-link">
                                    <mu-flex justify-content="center"><a href="#" class="text-muted">忘记密码</a></mu-flex>
                                <mu-flex class="flex-wrapper" justify-content="end">
                                </mu-flex>
                            </div>
                        </div>
                        <div class="login-account-third"></div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import apis from '@/apis/user'

export default {
    data() {
        return {
            user: {},
            codeImgUrl: ""
        }
    },
    mounted() {
        let result = apis.getPin()
        this.codeImgUrl = result.url
    },
    methods: {
        submit(userArg) {
            try {
                if (Object.keys(userArg).length !== 0) {
                    apis.getToken(userArg).then((res) => {
                        let { access_token: accessToken, expire_in } = res.data.result
                        // 保留获取的数据
                        sessionStorage.setItem('access_token', `${accessToken}`)
                        this.$router.push("/ue/matter/console/order")
                    })
                }
            } catch (e) {
                this.$message({
                    message: e,
                    type: 'error',
                    duration: 60000,
                    showClose: true
                })
            } 
        },
        refreshpin() {
            let result = apis.getPin()
            this.codeImgUrl = result.url
        }
    }
};
</script>

<style>
.login-topbar {
    width: 100%;
    height: 80px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    position: relative;
    z-index: 1000;
    clear: both;
}
.login-wrap {
    max-width: 1200px;
    height: 700px;
    box-sizing: border-box;
    background: #f5f5f6;
    padding: 60px 0 80px;
    margin: 0 auto;
    clear: both;
}
.login-account {
    width: 100%;
    height: 560px;
    box-shadow: 0 2px 15px rgba(0,0,0,.15);
    background-color: #fff;
}
.login-iframe {
    width: 330px;
    height: 340px;
    margin: 0 auto;
    margin-top: 120px;
}
</style>
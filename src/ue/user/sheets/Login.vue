<template>
    <div id="login">
        <div class="login-topbar"></div>
        <div class="login-wrap">
            <el-row>
                <el-col :span="12" :offset="12">
                    <div class="login-account">
                        <div class="login-account-iframe">
                            <h3>密码登录</h3>
                            <el-form>
                                <el-form-item>
                                    <el-input placeholder="用户名" v-model="user.uname" clearable></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-input placeholder="密码" v-model="user.password" show-password></el-input>
                                </el-form-item>
                            </el-form>
                            <el-button size="medium" type="primary" @click="submit(user)" class="login-btn">登录</el-button>
                            <div class="login-link"><el-link type="info">忘记密码</el-link></div>
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
            user: {}
        }
    },
    mounted() {},
    methods: {
        submit(userArg) {
            try {
                if (Object.keys(userArg).length !== 0) {
                    apis.getToken(userArg).then((res) => {
                        let { access_token: accessToken, expire_in } = res
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
    padding: 60px 0 80px;
    margin: 0 auto;
    clear: both;
}
.login-account {
    width: 100%;
    height: 560px;
    box-shadow: 0 2px 15px rgba(0,0,0,.15);
    background-color: #fff;
    position: relative;
}
.login-account-iframe {
    width: 330px;
    height: 340px;
    border: none;
    position: absolute;
    left: 50%;
    top: 126px;
    transform: translate(-50%);
}
.login-account-iframe h3{
    margin-bottom: 20px;
}
.login-btn {
    width: 100%;
    margin-bottom: 10px;
}
.login-link {
    text-align: right;
}
</style>
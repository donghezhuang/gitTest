<template>
    <div id="console">
        <div class="loading" v-if="loading">
            <div>Loading...</div>
        </div>
        <div v-else>
            <el-row :gutter="10" class="console-wrap">
                <el-col :lg="4" :xl="4">
                    <div class="console-aside">
                        <h5>能力开放平台</h5>
                        <el-menu class="console-aside-menu" @open="handleOpen" @close="handleClose"  text-color="#fff" active-text-color="#ffd04b">
                            <el-submenu index="1">
                                <el-menu-item-group>
                                    <template slot="title"><i class="el-icon-location"></i><span>主要业务</span></template>
                                    <el-menu-item index="1-1"><router-link :to="{name:'order'}">订单</router-link></el-menu-item>
                                    <el-menu-item index="1-2"><router-link :to="{name:'bill'}">话单</router-link></el-menu-item>
                                    <el-menu-item index="1-2"><router-link :to="{name:'numbers'}">号码</router-link></el-menu-item>
                                    <el-menu-item index="1-2"><router-link :to="{name:'task'}">任务</router-link></el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </div>
                </el-col>
                <el-col :lg="20" :xl="20">
                    <div class="console-main-header"></div>
                    <div class="console-main-link">箭头导航</div>
                    <div class="console-main-content">
                        <router-view :cstDictionay="cst_dictionay"></router-view>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            loading: true,
            cst_dictionay: DataDictionay    
        }
    },
    mounted() {
        this.$eventHub.$on('main-mounted', () => {
            this.loading = true
        })
        this.$eventHub.$on('main-failed', () => {
            this.loading = false
        })
    },
    methods: {}
};
</script>

<style>
.console-wrap {
    width: 100%;
    height: 100%;
}
.console-aside {
    width: 100%;
    background-color: #000;
} 
.console-main-header {
    height: 50px;
    background-color: #000;
}
.console-main-link {
    height: 20px;
    background-color: #909399;
}
</style>

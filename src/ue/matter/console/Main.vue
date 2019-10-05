<template>
  <div id="console">
    <div class="loading" v-if="loading">
      <div>Loading...</div>
    </div>
    <div v-else>
      <!-- <el-row :gutter="10" class="console-wrap">
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
      </el-row>-->
      <el-container>
        <el-header>
            <div class="fl">能力开放平台</div>
            <div class="fr">sssss</div>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu :default-openeds="['1', '3']">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-message"></i>订单
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                  <el-menu-item index="1-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>号码
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                  <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-setting"></i>话单
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                  <el-menu-item index="3-3">选项3</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
const DataDictionay = {
  tel: {},
  cdr: {},
  order: {},
  products: [{ "1": "云录音" }]
};
export default {
  data() {
    return {
      loading: true,
      cst_dictionay: DataDictionay
    };
  },
  mounted() {
    this.$tmsOn("main-mounted", () => {
      this.loading = true;
    });
    this.$tmsOn("main-failed", () => {
      this.loading = false;
    });
  },
  methods: {}
};
</script>

<style>
html, body, #console{
    height: 100%;
    
}
.el-submenu{
    text-align: left
}
#console{
    background-color: #e9eef3
}
.is-vertical{
    display: flex;
    flex-direction: column;
}
.is-vertical > .el-container{
    flex-grow: 1;
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
button,
textarea,
p,
blockquote,
th,
td {
  margin: 0;
  padding: 0;
}

body {
  background: #fff;
  color: #555;
  font-size: 14px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

td,
th,
caption {
  font-size: 14px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}

address,
caption,
cite,
code,
dfn,
em,
strong,
th,
i,
b,
strong {
  font-style: normal;
  font-weight: normal;
}

a {
  color: #555;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

img {
  border: none;
  vertical-align: middle;
}

ol,
ul,
li {
  list-style: none;
}

input,
textarea,
select,
button {
  font: 14px Verdana, Helvetica, Arial, sans-serif;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html {
  overflow-y: scroll;
}

.clearfix:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  *zoom: 1;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-header{
    display: flex;
    padding: 0
}

.el-header .fl{
    width: 200px;
}

.el-header .fr{
    flex: 1;
}
</style>

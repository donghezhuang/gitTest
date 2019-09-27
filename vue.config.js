module.exports = {
    // 基本路径
    publicPath: "/ue/",

    // 输出文件目录
    outputDir: "back/public/ue",

    // 生成的静态资源在它们的文件名中包含hash
    filenameHashing: true,

    // 在 multi-page 模式下构建应用
    pages: {
        index: {
            // page 的入口
            entry: "src/main.js",
            // 模板来源
            template: "public/index.html",
            // 在 dist/index.html 的输出
            filename: "./index.html",
            // 当使用 title 选项时，
            title: "能力平台",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        "user": {
            entry: "src/ue/user/main.js",
            template: "public/index.html",
            filename: "./user/main.html",
            title: "用户管理",
            chunks: ["chunk-vendors", "chunk-common", "user"]
        },
        "matter.console": {
            entry: "src/ue/matter/console/main.js",
            template: "public/index.html",
            filename: "./matter/console/main.html",
            title: "工作台",
            chunks: ["chunk-vendors", "chunk-common", "matter.console"]
        }
    },
    // enabled by default if the machine has more than 1 cores
    parallel: require("os").cpus().length > 1,
    // 是否使用包含运行时编译器的 Vue 构建版本。
    runtimeCompiler: true
}
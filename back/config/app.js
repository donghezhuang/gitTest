module.exports = {
    port: 3000,
    name: "project-nlpt",
    router: {
        auth: {
            prefix: "/ue"
        },
        controllers: {
            prefix: "/api"
        }
    }
}
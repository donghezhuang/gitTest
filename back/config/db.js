module.exports = {
    master: {
        connectionLimit: 2,
        waitForConnections: false,
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "xxt"
    },
    write: {
        connectionLimit: 1,
        waitForConnections: false,
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "xxt"
    }
}
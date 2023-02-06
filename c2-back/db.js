import mysql from "mysql"

export const db = mysql.createConnection({
    host: "host",
    user: "xxx",
    password: "xxx",
    database: "xxx"
})


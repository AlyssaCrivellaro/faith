import mysql from "mysql"

export const db = mysql.createConnection({
    host: "faith.cluster-ro-cag67pfpsk2z.sa-east-1.rds.amazonaws.com",
    user: "faith",
    password: "faith123",
    database: "Faith"
})


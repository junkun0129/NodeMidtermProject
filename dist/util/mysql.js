const mysql = require("mysql2");
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DBNAME,
    port: process.env.MYSQL_PORT
});
const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Users8'`;
pool.query(sql, (err, data) => {
    if (err) {
        return console.error(err.message);
    }
    if (data.length === 0) {
        console.log(`Table 'User' does not exist`);
        seedDB();
    }
    else {
        console.log("Table 'User' exists");
    }
});
const sql2 = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='ReportBook50'`;
pool.query(sql2, (err, data) => {
    if (err) {
        return console.error(err.message);
    }
    if (data.length === 0) {
        console.log(`Table 'ReportBook50' does not exist`);
        seedDBforBook();
    }
    else {
        console.log("table 'ReportBook50' exists");
    }
});
const seedDB = () => {
    pool.query("DROP TABLE IF EXISTS Users8");
    pool.query(`CREATE TABLE Users8 (
            User_ID INT PRIMARY KEY AUTO_INCREMENT,
            Email VARCHAR(100) NOT NULL,
            Password VARCHAR(100) NOT NULL,
            Username VARCHAR(100) NOT NULL,
            LoginStatus BOOLEAN
        )`, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successful creation of the 'Users' table");
    });
    pool.query(`
            INSERT INTO Users8 (User_ID, Email, Password, Username, LoginStatus) VALUES
            (1, 'penpenetai@icloud.com', 'santaclaus', 'jumchan', true);`, (err) => {
        if (err) {
            return console.error("you couldnt insert value");
        }
        console.log("Successful creation of 1 user");
    });
};
const seedDBforBook = () => {
    pool.query("DROP TABLE IF EXISTS ReportBook50");
    pool.query(`CREATE TABLE ReportBook50 (
            Report_ID INT PRIMARY KEY AUTO_INCREMENT,
            Date VARCHAR(100) NOT NULL,
            Username VARCHAR(100) NOT NULL,
            Title VARCHAR(100) NOT NULL,
            Text TEXT NOT NULL,
            Liked JSON
        )`, (err) => {
        if (err) {
            return console.error("you count insert data");
        }
        console.log("Successful creation of the 'ReportBook50' table");
    });
};
module.exports = pool.promise();
//# sourceMappingURL=mysql.js.map
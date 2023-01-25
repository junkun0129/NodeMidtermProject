const mysql = require("mysql2");
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DBNAME,
    port: process.env.MYSQL_PORT
});
const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Users7'`;
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
const seedDB = () => {
    pool.query("DROP TABLE IF EXISTS Users7");
    pool.query(`CREATE TABLE Users7 (
            User_ID INT PRIMARY KEY AUTO_INCREMENT,
            Email VARCHAR(100) NOT NULL,
            Password VARCHAR(100) NOT NULL,
            Username VARCHAR(100) NOT NULL,
            LoginStatus BIT
        )`, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successful creation of the 'Users' table");
    });
    pool.query(`
            INSERT INTO Users7 (User_ID, Email, Password, Username, LoginStatus) VALUES
            (1, 'penpenetai@icloud.com', 'santaclaus', 'jumchan', 0);`, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Successful creation of 1 user");
    });
};
module.exports = pool.promise();
//# sourceMappingURL=mysql.js.map
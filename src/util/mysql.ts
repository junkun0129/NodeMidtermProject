const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "containers-us-west-143.railway.app",
    user: "root", 
    password: "4yXElxZ416ltqRMMcB9t", 
    database: "railway", 
    port: 6288
});

const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='railway' AND TABLE_NAME='Users'`

pool.query(sql, (err, data)=>{
    if(err){
        return console.error(err.message);
    }
    
    if(data.length === 0){
        console.log("Table 'User' does not exist");
        seedDB();
    }else{
        console.log("Table 'User' exists")
    }
})

const seedDB = ()=>{
    pool.query("DROP TABLE IF EXISTS Users");

    pool.query(
        `CREATE TABLE Users (
            User_ID INT PRIMARY KEY AUTO_INCREMENT,
            Email VARCHAR(100) NOT NULL, 
            Password VARCHAR(100) NOT NULL, 
            Username VARHAR(100) NOT NULL,
        )`,
        (err)=>{
            if(err){
                return console.error(err.message);
            }
            console.log("Successful creation of the 'Users' table");
        }
    )

    pool.query(
        `
            INSERT INTO Users (User_ID, Email, Password, Username) VALUES
            (1, "penpenetai@icloud.com", "santaclaus", "jumchan")`,
        (err) =>{
            if(err){
                return console.error(err.message);
            }
            console.log("Successful creation of 1 user");
        }
    );
};

module.exports = pool.promise();
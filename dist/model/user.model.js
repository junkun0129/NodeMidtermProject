const db = require("../util/mysql");
module.exports = class User {
    constructor(Email, Password, Username) {
        this.Email = Email;
        this.Password = Password;
        this.Username = Username;
    }
    create() {
        const sql = "INSERT INTO Users8 (Email, Password, Username, LoginStatus) VALUES (?,?,?,?)";
        const params = [this.Email, this.Password, this.Username, 0];
        return db.execute(sql, params);
    }
    find() {
        const sql = "SELECT * FROM Users8 WHERE Email = ?";
        return db.query(sql, [this.Email]);
    }
    static findLogin(email) {
        const sql = "SELECT * FROM Users8 WHERE Email = ?";
        return db.query(sql, [email]);
    }
};
//# sourceMappingURL=user.model.js.map
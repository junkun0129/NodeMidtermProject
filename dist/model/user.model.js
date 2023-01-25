const db = require("../util/mysql");
module.exports = class User {
    constructor(Email, Password, Username) {
        this.Email = Email;
        this.Password = Password;
        this.Username = Username;
    }
    create() {
        const sql = "INSERT INTO Users2 (Email, Password, Comments) VALUES (?,?,?)";
        const params = [this.Email, this.Password, this.Username];
        return db.execute(sql, params);
    }
    find() {
        const sql = "SELECT Email FROM Users2 WHERE Email = ?";
        return db.query(sql, [this.Email]);
    }
};
//# sourceMappingURL=user.model.js.map
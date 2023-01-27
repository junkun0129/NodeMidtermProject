const db2 = require("../util/mysql");
module.exports = class Book {
    constructor(Username, Title, Text) {
        this.Username = Username;
        this.Title = Title;
        this.Text = Text;
    }
    static get() {
        const sql = "SELECT * FROM ReportBook7 ORDER BY Report_ID DESC";
        return db2.query(sql);
    }
    save() {
        const iwatani = new Date();
        const nowTime = `${iwatani.getFullYear()}.${iwatani.getMonth()}.${iwatani.getDay()}`;
        const sql = "INSERT INTO ReportBook7 (Date, Username, Title, Text) VALUE (?,?,?,?)";
        const params = [nowTime, this.Username, this.Title, this.Text];
        return db2.execute(sql, params);
    }
};
//# sourceMappingURL=book.model.js.map
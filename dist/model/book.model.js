const db2 = require("../util/mysql");
module.exports = class Book {
    constructor(Username, Text) {
        this.Username = Username;
        this.Text = Text;
    }
    static get() {
        const sql = "SELECT * FROM ReportBook6 ORDER BY Report_ID DESC";
        return db2.query(sql);
    }
};
//# sourceMappingURL=book.model.js.map
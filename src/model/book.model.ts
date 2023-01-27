const db2 = require("../util/mysql")
module.exports = class Book{
    Username:string;
    Text:string;
    constructor(Username:string, Text:string){
        this.Username = Username;
        this.Text = Text;
    }

    static get(){
        const sql = "SELECT * FROM ReportBook6 ORDER BY Report_ID DESC";
        return db2.query(sql);
    }
}
const db2 = require("../util/mysql")
module.exports = class Book{
    Username:string;
    Title:string;
    Text:string;
    constructor(Username:string, Title:string, Text:string){
        this.Username = Username;
        this.Title = Title;
        this.Text = Text;
    }

    static get(){
        const sql = "SELECT * FROM ReportBook7 ORDER BY Report_ID DESC";
        return db2.query(sql);
    }

    save(){

        const iwatani = new Date();
        const nowTime = `${iwatani.getFullYear()}.${iwatani.getMonth()}.${iwatani.getDay()}`
        const sql = "INSERT INTO ReportBook7 (Date, Username, Title, Text) VALUE (?,?,?,?)";
        const params = [nowTime, this.Username, this.Title, this.Text];
        return db2.execute(sql, params);
    }
}
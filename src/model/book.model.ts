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
        const sql = "SELECT * FROM ReportBook50 ORDER BY Report_ID DESC";
        return db2.query(sql);
    }

    
    static deletee(id){
        const sql = "DELETE FROM ReportBook50 WHERE Report_ID = ?";
        return db2.execute(sql, [id]);
    }

    static updatee(id, title, text){
        const sql = "UPDATE ReportBook50 SET Title = ?, Text = ?  WHERE (Report_ID = ?)";
        const params = [title, text, id]
        return db2.execute(sql, params);
    }

    save(){

        const iwatani = new Date();
        const nowTime = `${iwatani.getFullYear()}.${iwatani.getMonth()}.${iwatani.getDay()}`
        const sql = "INSERT INTO ReportBook50 (Date, Username, Title, Text) VALUE (?,?,?,?)";
        const params = [nowTime, this.Username, this.Title, this.Text];
        return db2.execute(sql, params);
    }

    static getbyID(id){
        const sql = "SELECT * FROM ReportBook50 WHERE Report_ID = ?";
        return db2.query(sql, [id]);
    }

    static good(toWhich, arr){
        const sql = "UPDATE ReportBook50 SET Liked = ? WHERE (Report_ID = ?)";
        
        const params = [JSON.stringify(arr), toWhich]
        return db2.execute(sql, params)
    }

    static mu(towhich){
        const sql = "UPDATE ReportBook50 SET Liked = ? WHERE (Report_ID = ?)";
        const params = [null, towhich]
        return db2.execute(sql, params);

    }

    
}
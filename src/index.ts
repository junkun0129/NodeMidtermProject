require('dotenv').config();
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const app = express();
// import { getGameScreen } from "./controller/game.controller";
const {getGameScreen, getTitleScreen, getCreateScreen, postCreateScreen, getLoginScreen} = require("./controller/game.controller")
const dbConnection = require("./util/mysql");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static(path.join(__dirname, "../asset")))
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", "src/views");

app.get("/game", getGameScreen)

app.get("/home", getTitleScreen)

app.get("/create", getCreateScreen)

app.post("/create", postCreateScreen)

app.get("/login", getLoginScreen)

const port = 9000;
app.listen(port, async()=>{
    const [data] = await dbConnection.query("SELECT 5");
    if(data) console.log("Successful connection to the MySQL database!");

});

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");
// import { getGameScreen } from "./controller/game.controller";
const { getGameScreen, getTitleScreen, getCreateScreen, postCreateScreen, getLoginScreen, postLoginScreen, getBookScreen, postBookScreen, deleteBookScreen, updateBookScreen, goodBookScreen, dropBookScreen } = require("./controller/game.controller");
const dbConnection = require("./util/mysql");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../asset")));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(cookieParser());
const oneDay = 24 * 60 * 60 * 1000;
app.use(session({
    secret: "thisismysecretdonttellanyone!",
    cookie: { maxAge: oneDay },
    resave: true,
    saveUninitialized: true
}));
app.set("view engine", "ejs");
app.set("views", "src/views");
app.get("/game", getGameScreen);
app.get("/home", getTitleScreen);
app.get("/create", getCreateScreen);
app.post("/create", postCreateScreen);
app.get("/login", getLoginScreen);
app.post("/login", postLoginScreen);
app.get("/book", getBookScreen);
app.post("/book", postBookScreen);
app.post("/delete", deleteBookScreen);
app.post("/update", updateBookScreen);
app.post("/good", goodBookScreen);
app.post("/drop", dropBookScreen);
const port = 9000;
app.listen(port, () => __awaiter(this, void 0, void 0, function* () {
    const [data] = yield dbConnection.query("SELECT 5");
    if (data)
        console.log("Successful connection to the MySQL database!");
}));
//# sourceMappingURL=index.js.map
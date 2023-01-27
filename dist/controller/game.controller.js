const Book = require("../model/book.model");
const User = require("../model/user.model");
// if (typeof localStorage === "undefined" || localStorage === null) {
//     var LocalStorage = requletocalstorage').LocalStorage;
//     localStorage = new LocalStorage('./scratch');
//  }
exports.getGameScreen = (req, res, next) => {
    if (req.session.authorized) {
        //console.log(req.cookie, ";lkj;lk;klsj;dlfkja;sdkfljasd;kfj;")
        res.render("game");
    }
    else {
        res.render("login", { letter: "" });
    }
};
exports.getTitleScreen = (req, res, next) => {
    res.render("home");
};
exports.getCreateScreen = (req, res, next) => {
    res.render("create", { sign: "" });
};
exports.postCreateScreen = (req, res, next) => {
    const { email, password, username } = req.body;
    const newUser = new User(email, password, username);
    newUser.find()
        .then((data) => {
        //console.log(data[0][0].LoginStatus, "this is it");
        res.render("create", { sign: `this account ${data[0][0].Email} exists` });
    }).catch(() => {
        newUser.create()
            .then((data) => {
            console.log(data);
            return res.redirect("/login");
        })
            .catch((err) => {
            console.log("fail to create account");
        });
    });
};
exports.getLoginScreen = (req, res, next) => {
    res.render("login", { letter: "" });
};
exports.postLoginScreen = (req, res, next) => {
    const { email, password } = req.body;
    User.findLogin(email)
        .then((data) => {
        console.log(data[0][0].Email);
        console.log(password);
        if (data[0][0].Password === password) {
            // localStorage.setItem("UserEmail", "jum")
            req.session.useraccount = data[0][0].Email;
            req.session.authorized = true;
            console.log(data[0][0].Email);
            res.cookie("currentAccount", data[0][0]);
            res.render("game");
        }
        else {
            res.render("login", { letter: "you typed wrong password" });
        }
    }).catch((err) => console.error(err.message));
};
exports.getBookScreen = (req, res, next) => {
    Book.get()
        .then((data) => {
        console.log("this is bookkkkkkkkkkkk", data[0]);
        res.render("book", { reports: data[0] });
    }).catch((err) => {
        console.error(err.message);
    });
    // res.render("book");
};
//# sourceMappingURL=game.controller.js.map
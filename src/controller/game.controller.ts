const User = require("../model/user.model")


exports.getGameScreen = (req, res, next)=>{
    res.render("game");
}

exports.getTitleScreen = (req, res, next)=>{
    res.render("home");
}

exports.getCreateScreen = (req, res, next)=>{
    res.render("create", {sign: ""});
}

exports.postCreateScreen = (req, res, next)=>{
   
    const {email, password, username} = req.body;
    const newUser = new User(email, password, username);

    newUser.find()
    .then((data)=>{
        
        res.render("create", {sign:`this account ${data[0][0].Email} exists`})

    }).catch(()=>{
        newUser.create()
        .then((data)=>{
            console.log(data)
            return res.redirect("/game"); 
        })
        .catch((err)=>{
            console.log("fail to create account")
        });
    })

    
}

exports.getLoginScreen = (req, res, next)=>{
    res.render("login");
}


exports.getGameScreen = (req, res, next)=>{
    res.render("game");
}

exports.getTitleScreen = (req, res, next)=>{
    res.render("home");
}

exports.getCreateScreen = (req, res, next)=>{
    res.render("create");
}

exports.postCreateScreen = (req, res, next)=>{
    let data = [{email:"jumpei", password:"jum", username:"jum"}];
    const {email, password, username} = req.body;
    data.push(req.body);
    console.log(data);
    res.redirect("/game"); 
}

exports.getLoginScreen = (req, res, next)=>{
    res.render("login");
}
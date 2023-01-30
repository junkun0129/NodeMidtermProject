const Book = require("../model/book.model")

const User = require("../model/user.model")
// if (typeof localStorage === "undefined" || localStorage === null) {
//     var LocalStorage = requletocalstorage').LocalStorage;
//     localStorage = new LocalStorage('./scratch');
//  }

exports.getGameScreen = (req, res, next)=>{
    if(req.session.authorized){
        //console.log(req.cookie, ";lkj;lk;klsj;dlfkja;sdkfljasd;kfj;")
        res.render("game");
    }else{
        res.render("login", {letter:""})
    }
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
        //console.log(data[0][0].LoginStatus, "this is it");
        
        res.render("create", {sign:`this account ${data[0][0].Email} exists`})

    }).catch(()=>{
        newUser.create()
        .then((data)=>{
            console.log(data)
            return res.redirect("/login"); 
        })
        .catch((err)=>{
            console.log("fail to create account")
        });
    })

    
}

exports.getLoginScreen = (req, res, next)=>{
    res.render("login", {letter:""});
}


exports.postLoginScreen = (req, res, next)=>{
    const {email, password} = req.body;
    User.findLogin(email)
    .then((data)=>{
        console.log(data[0][0].Email)
        console.log(password)
        if(data[0][0].Password===password){
            // localStorage.setItem("UserEmail", "jum")
            console.log(data[0][0].Username, ";lkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
            req.session.useraccount = data[0][0].Email;
            req.session.username = data[0][0].Username
            req.session.authorized = true;
            console.log(data[0][0].Email)
            res.cookie("currentAccount", data[0][0])
            res.render("game")
        }else{
            res.render("login", {letter:"you typed wrong password"});
        }
    }).catch((err)=>console.error(err.message))
}

exports.getBookScreen = (req, res, next)=>{

    Book.get()
    .then((data)=>{
        data[0].push(req.session.username);
        //console.log("this is bookkkkkkkkkkkk",data[0])
        // console.log(data[0].Liked.length)
        // console.log(req.session.username, "l;kjjjjjjjjjjjjjjjjjjjjjjjjl;kjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjssssss")
        res.cookie("currentaccount", req.session.username);
        // console.log(data[0])
        res.render("book", {reports:data[0]});
    }).catch((err)=>{
        console.error(err.message);
    })
    // res.render("book");
}

exports.postBookScreen = (req, res, next)=>{
    const {Title, Text}  = req.body
    
    const newBook = new Book(req.session.username, Title, Text)
    newBook.save()
    .then((data)=>{
        // console.log(data[0])
        res.redirect("book")
    }).catch((err)=>console.error(err.message));

}

exports.deleteBookScreen = (req, res, next)=>{
    
    // console.log(req.body.delete, "jjjjjjjjjjjjjjjjjjjjjjjjj")
    // console.log(";lskdfj;asldkf;aslkdfj;alskdfj;a")
    Book.deletee(req.body.delete)
    .then((data)=>{
        
        res.redirect("book");

    }).catch((err)=>console.error(err.message))

}

exports.updateBookScreen = (req, res, next)=>{
    const {Title, Text, ID} = req.body;
    Book.updatee(ID, Title, Text)
    .then((data)=>{
        // console.log(data, "thisssssssssssss");
        res.redirect("book");
    }).catch((err)=>console.error(err.message))
}

exports.goodBookScreen = (req, res, next)=>{
    const {fromWho, toWhich} = req.body

    //console.log(toWhich, ";lk;lkl;k;lkj;kj;k")
    const arr = []
    Book.getbyID(toWhich)
    .then((data)=>{
        // console.log(data[0][0], ";lk;lkj;lkj;lkj;")
        if(data[0][0].Liked === null){
        
            
            arr.push(fromWho)
            Book.good(toWhich, arr)
            .then((data)=>{
                // console.log(data[0]);
                res.redirect("book");
            }).catch((err)=>console.error(err.message))
        }else{
               const whoArr = data[0][0].Liked;
            
            whoArr.push(fromWho);
            
            Book.good(toWhich, whoArr)
            .then((data)=>{
                
                res.redirect("book");
            }).catch((err)=>console.error(err.message))

            
        }
    })
    // console.log(fromWho, toWhich)
}

exports.dropBookScreen=(req, res, next)=>{
    const {fromWhodrop, toWhichdrop} = req.body;
    console.log("this is which", toWhichdrop)
    
    Book.getbyID(toWhichdrop)
    .then((data)=>{
            const whoArr = data[0][0].Liked;
            // console.log(data[0])

            if(data[0][0].Liked[0] === fromWhodrop&&data[0][0].Liked.length === 1){
                Book.mu(toWhichdrop)
                .then((data)=>{
                    console.log(data);
                    res.redirect("book")
                }).catch((err)=>console.error(err.message))
            }else{

                const newArr = whoArr.splice(fromWhodrop, 1);
                Book.good(toWhichdrop, newArr)
                .then((data)=>{
                    console.log(data[0], "korekore")
                    res.redirect("book")
                    
                }).catch((err)=>console.error(err.message))
            }
                
        }
    ).catch((err)=>console.error(err.message))

}
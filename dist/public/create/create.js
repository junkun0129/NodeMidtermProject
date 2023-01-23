let email = document.querySelector(".input");
let password = document.querySelector(".input2");
let username = document.querySelector(".input3");
let button = document.querySelector(".button");
let form = document.querySelector("form");
let forcusState = 1;
let stage = 1;
let level1 = 1;
let level2 = 2;
let level3 = 3;
email.focus();
email.readOnly = true;
window.addEventListener("keydown", (e) => {
    if (stage === 1) {
        if (e.key === "s") {
            // input.focus()
            // input.readOnly = true;
            // window.addEventListener("keydown",(e)=>{
            //     if(e.key === "e"){
            //         forcusState = level2
            //         console.log(forcusState)
            //         console.log("go to level2")
            //     }
            // })
            if (forcusState < 4) {
                forcusState++;
            }
            console.log(forcusState);
        }
        if (e.key === "w") {
            // input2.focus()
            // input2.readOnly = true;
            // window.addEventListener("keydown",(e)=>{
            //     if(e.key === "e"){
            //         forcusState = level2
            //         console.log(forcusState)
            //         console.log("go to level2")
            //     }
            // })
            if (forcusState > 1) {
                forcusState--;
            }
            console.log(forcusState);
        }
        if (forcusState === 1) {
            email.focus();
            email.readOnly = true;
            nextStage();
        }
        if (forcusState === 2) {
            password.focus();
            password.readOnly = true;
            nextStage();
        }
        if (forcusState === 3) {
            username.focus();
            username.readOnly = true;
            nextStage();
        }
        if (forcusState === 4) {
            button.focus();
            if (e.key === "Enter") {
                console.log("enter");
                form.submit();
            }
        }
    }
    if (stage === 2) {
        setInterval(() => {
            email.readOnly = false;
            password.readOnly = false;
            username.readOnly = false;
        }, 100);
        if (e.key === "Enter") {
            email.readOnly = true;
            password.readOnly = true;
            username.readOnly = true;
            stage = 1;
            console.log("goto level1");
        }
    }
    // if(e.key === "c"){
    //     console.log(forcusState)
    //     console.log(input.readOnly)
    //     console.log(input2.readOnly)
    // }
    // if(e.key === "k"){
    //     input.readOnly = true;
    //     input2.readOnly = true;
    //     console.log(input.readOnly)
    //     console.log(input2.readOnly)
    // }
    // if(e.key === "a"){
    //     console.log("left")
    //     input.focus();
    //     input.readOnly = true;
    //     input.addEventListener("keydown", (e)=>{
    //         if(e.key === "e"){
    //             input.readOnly = false;
    //             inputLock = true;
    //             input.addEventListener("keydown", (e)=>{
    //                 if(e.key === "e"){
    //                     input.readOnly = true;
    //                     inputLock = false;
    //                 }
    //             })
    //         }
    //     })
    // }
    // if(!inputLock){
    //     if(e.key === "d"){
    //         console.log("right");
    //         input2.focus();
    //         input2.readOnly = true
    //     }
    // }
});
function nextStage() {
    window.addEventListener("keydown", (e) => {
        if (e.key === "e") {
            stage = 2;
        }
    });
}
// switch(forcusState){
//     case 1: email.focus(); break;
//     case 2: password.focus(); break;
//     case 3: username.focus(); break;
//     case 4: button.focus(); break;
//   }
//# sourceMappingURL=create.js.map
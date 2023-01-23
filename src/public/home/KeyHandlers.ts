import { HomePanel } from "./HomePanel.js";

export class KeyHandler{
    hp: HomePanel;
    // upPressed:boolean = false;
    // downPressed:boolean = false;
    // leftPressed:boolean = false;
    // rightPressed:boolean = false;

    constructor(hp:HomePanel){
        this.hp = hp;
        this.keyDown();
    }

    public keyDown():void{
        window.addEventListener("keydown", (e)=>{
            if(e.key === "w"){
                // this.upPressed = true;
             console.log("w ")
            }
            if(e.key === "s"){
             // this.downPressed = true;
            }
            if(e.key === "a"){
             // this.leftPressed = true;
             this.hp.ui.selectState = this.hp.ui.loginSelect;
            }
            if(e.key === "d"){
             // this.rightPressed = true;
             this.hp.ui.selectState = this.hp.ui.newgameState;
            }

            if(e.key === "e"){

                if(this.hp.ui.selectState === this.hp.ui.newgameState){
                    console.log("newgame");
                    window.location.replace("/create");
                }
                if(this.hp.ui.selectState === this.hp.ui.loginSelect){
                    console.log("logineee");
                    window.location.replace("/login");
                }
            }
        })

        console.log("osyaaaaa")
    }

    // public keyUp():void{
    //     window.addEventListener("keyup",(e)=>{
    //         if(e.key === "w"){
    //             this.upPressed = false;
    //            }
    //            if(e.key === "s"){
    //             this.downPressed = false;
    //            }
    //            if(e.key === "a"){
    //             this.leftPressed = false;
    //            }
    //            if(e.key === "d"){
    //             this.rightPressed = false;
    //            }
    //     })
    // }
}
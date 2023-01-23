export class KeyHandler {
    // upPressed:boolean = false;
    // downPressed:boolean = false;
    // leftPressed:boolean = false;
    // rightPressed:boolean = false;
    constructor(hp) {
        this.hp = hp;
        this.keyDown();
    }
    keyDown() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "w") {
                // this.upPressed = true;
                console.log("w ");
            }
            if (e.key === "s") {
                // this.downPressed = true;
            }
            if (e.key === "a") {
                // this.leftPressed = true;
                this.hp.ui.selectState = this.hp.ui.loginSelect;
            }
            if (e.key === "d") {
                // this.rightPressed = true;
                this.hp.ui.selectState = this.hp.ui.newgameState;
            }
            if (e.key === "e") {
                if (this.hp.ui.selectState === this.hp.ui.newgameState) {
                    console.log("newgame");
                    window.location.replace("/create");
                }
                if (this.hp.ui.selectState === this.hp.ui.loginSelect) {
                    console.log("logineee");
                    window.location.replace("/login");
                }
            }
        });
        console.log("osyaaaaa");
    }
}
//# sourceMappingURL=KeyHandlers.js.map
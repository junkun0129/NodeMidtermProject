import { KeyHandler } from "./KeyHandlers.js";
import { UI } from "./UI.js";
export class HomePanel {
    constructor() {
        this.pageState = 1;
        this.homeScene = 1;
        this.createAccauntScene = 2;
        this.loginScene = 3;
        this.ui = new UI(this);
        this.keyH = new KeyHandler(this);
        this.canvas = document.querySelector("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        const c = this.canvas.getContext("2d");
        if (!c) {
            throw new Error("failed homepage canvas");
        }
        this.c = c;
    }
    setup() {
        this.gameloop();
    }
    gameloop() {
        this.draw();
        requestAnimationFrame(this.gameloop.bind(this));
    }
    draw() {
        // console.log("jumpei")
        this.ui.draw(this.c);
    }
}
function start() {
    window.onload = () => {
        let iwatani = new HomePanel;
        iwatani.setup();
    };
}
start();
//# sourceMappingURL=HomePanel.js.map
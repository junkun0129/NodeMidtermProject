import { KeyHandler } from "./KeyHandlers.js";
import { UI } from "./UI.js";


export class HomePanel{
    canvas: HTMLCanvasElement;
    c: CanvasRenderingContext2D;

    public pageState:number = 1;
    public homeScene:number = 1;
    public createAccauntScene:number = 2;
    public loginScene:number = 3;
    

    public ui:UI = new UI(this);
    public keyH:KeyHandler = new KeyHandler(this);

    
    constructor(){
        this.canvas = <HTMLCanvasElement>document.querySelector("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        const c = this.canvas.getContext("2d");
        if(!c){
            throw new Error("failed homepage canvas");
        }

        this.c = c;
    }

    public setup():void{
        this.gameloop();
    }

    public gameloop():void{

        this.draw();
        requestAnimationFrame(this.gameloop.bind(this));
    }

    public draw():void{
       // console.log("jumpei")
       
       this.ui.draw(this.c);
    }
}

function start():void{
    window.onload = ()=>{
        let iwatani = new HomePanel;

        iwatani.setup();
    }
}

start();
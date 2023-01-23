import { HomePanel } from "./HomePanel.js";

export class UI{

    hp:HomePanel;

    public selectState = 1;
    public loginSelect = 1;
    public newgameState = 2;

    constructor(hp:HomePanel){  
        this.hp = hp;
    }


    draw(c:CanvasRenderingContext2D){
       let image = new Image;
       image.src = "/img/homepage-background.png";
       c.drawImage(image, 0,0,window.innerWidth,window.innerHeight)

       c.fillStyle = "black";
       c.globalAlpha = 0.6;
       c.fillRect(0,0,window.innerWidth, window.innerHeight)

       c.fillStyle = "white";
       c.globalAlpha = 1;
       c.font = "100px monospace";
       c.fillText("IWATANI QUEST", window.innerWidth/2/2, window.innerHeight/2/2);

       c.font = "50px monospace";
       c.fillText("continue" , 450,450)
       c.fillText("new game" , 850,450)

       if(this.selectState === this.loginSelect){

           c.strokeStyle = "white";
           c.lineJoin = "bevel";
           c.lineWidth = 7;
           c.strokeRect(410,385,300,100)
        }
        
        if(this.selectState === this.newgameState){

            c.strokeStyle = "white";
            c.lineJoin = "bevel";
            
            c.lineWidth = 7;
            c.strokeRect(810,385,300,100)
        }
    // c.fillStyle = "black"
    // c.fillRect(100,100,100,100)
    }
}
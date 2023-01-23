import { GamePanel } from "./GamePanel.js";
export class Doors{
    gp:GamePanel;
    objectX: number;
    objectY:number;
    imageName:string;
    name: string;
    collision: boolean;
    

    constructor(gp:GamePanel, name:string, objectX:number, objectY:number, imageName:string, collision:boolean){
        this.gp=gp;
        this.name = name;
        this.objectX = objectX;
        this.objectY = objectY;
        this.imageName = imageName;
        this.collision = collision;
        
    }

    draw(c:CanvasRenderingContext2D):void{
        let image = new Image;
        image.src = this.imageName;
        
        let objectX:number = this.objectX - this.gp.player.playerX+750;
        let objectY:number = this.objectY - this.gp.player.playerY+350;
        
        c.drawImage(image, objectX, objectY, this.gp.tilesize, this.gp.tilesize);
    }

    
    
    
}
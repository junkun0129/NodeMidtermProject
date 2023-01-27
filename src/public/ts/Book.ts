import { GamePanel } from "./GamePanel";
export class Book{
    gp:GamePanel
    imageName:string;
    x:number;
    y:number;
    mapstate:number;

    constructor(gp:GamePanel, imageName:string, x:number, y:number, mapstate:number){

        this.gp = gp;
        this.imageName = imageName
        this.x = x;
        this.y = y;
        this.mapstate = mapstate;
    }
    
    
    
    draw(c:CanvasRenderingContext2D):void{
        if(this.gp.mapState === this.mapstate){

            let image = new Image;
            image.src = this.imageName;
            
            let objectX:number = this.x - this.gp.player.playerX+750;
            let objectY:number = this.y - this.gp.player.playerY+350;
            
            c.drawImage(image, objectX, objectY, this.gp.tilesize, this.gp.tilesize);
        }
    }
}
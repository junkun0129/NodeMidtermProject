import { Player } from "./Player.js";
import { Keyhandler } from "./KeyHandler.js";
import { TileManager } from "./TileManager.js";
import { CollisionMap } from "./CollisionMap.js";
import { CollisionTile } from "./CollisionTile.js";
import { CollisionChecker } from "./CollisionChecker.js";
import { UI } from "./UI.js";
import { Doors } from "./Doors.js";
import { Asset } from "./Asset.js";
import { LSManager } from "./LSManager.js";
import { Npc } from "./npc/Npc.js";
import { Entity } from "./npc/Entity.js";
import { Sounds } from "./Sounds.js";



export class GamePanel{


    // public oneC = new oneClass(this);
    canvas: HTMLCanvasElement;
    c: CanvasRenderingContext2D;
    count: number = 0;

    //game state
    public gameState:number = 1;
    public fieldScene:number = 1;
    public menuScene:number = 2;
    public itemViewSecne:number = 3;
    public startOverMakeSureScene:number = 4;
    public talkingScene:number = 5;
    
    public gameStartOver:boolean = false;

    //map state
    public field1:number = 0;
    public myHouse:number = 1;
    public inn:number = 2;
    public mapState:number = this.field1;
    public maps:string[] = [];
    public collisionDatas:number[][] = [];
    public mapsChange:boolean = true;
    
    
    public player:Player = new Player(this);
    public entity:Entity = new Entity(this);
    public npc:Npc[] = [];
    public tileM:TileManager = new TileManager(this);
    public keyH:Keyhandler = new Keyhandler(this);
    public collisionM:CollisionMap = new CollisionMap(this);
    public collisionC:CollisionChecker = new CollisionChecker(this);
    public ui:UI = new UI(this);
    public doors:Doors[] = [];
    public asset:Asset = new Asset(this);
    public strageM:LSManager = new LSManager();
    public sound:Sounds[] = [];
    



    

   

    public collision:boolean = false;
    public collisionNPC:boolean = false;
    //public collisionArray:CollisionTile[] = this.collisionM.mapArrayCreate(); 
    
    public screenWidth:number = 1500;
    public screenHeight:number = 700;

    public worldWidth:number = 3840;
    public worldHeight:number = 2560;

    public originalTilesize:number = 32;
    public scale:number = 2;
    public tilesize:number = this.originalTilesize*this.scale;

    public showCoodinates:boolean = true;

   
    constructor(){
        
        this.canvas = <HTMLCanvasElement>document.querySelector(".field1");
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
        const c = this.canvas.getContext("2d");
        
        if(!c){
            throw new Error("failed");
        }

        this.c = c;
    }



    public setup():void{
        
        this.asset.setObject();
        this.asset.setNpc();
        this.asset.setSounds();
        this.asset.setMaps();
        this.asset.setCollisions();
        this.asset.setDoor();
        //console.log(this.collisionDatas[0]+"iwatanidaze")
       
        this.gameloop();


        
    }

   
    public gameloop():void{

        //map create
        this.collisionM.mapArrayCreate();
        
        let time = Date.now();
        let delta:number = 0;
        let iwatani4:number = 0;
        
        
        
        //draw on canvas 
        this.draw();

        if(this.gameState === this.fieldScene){

            //player 
            this.player.update();

            //npc
            if(this.npc.length > 0){
                for(let i:number = 0; this.npc.length>i; i++){
                    this.npc[i].update();
                }
            }
        }

        //DOM map
        if(this.mapState === this.field1){

            this.canvas = <HTMLCanvasElement>document.querySelector(".field1");
        }else if(this.mapState === this.myHouse){
            this.canvas = <HTMLCanvasElement>document.querySelector(".myhouse");
        }
       
        
        //console.log("まえの"+time);
            
        //start over
        if(this.gameStartOver){
            this.asset.setObject();
            localStorage.removeItem("itemInventory");
            this.player.itemInventory = [];
            this.player.playerX = this.player.playerXOriginal;
            this.player.playerY = this.player.playerYOriginal;
        }
        
        
        // delta = Date.now()-time;
        
        

        // if(delta+16<=17){
        //     iwatani4 = 16;
        // }else{
        //     iwatani4 = 16-((delta+16)-17);
        // }
       
        
        
        // setTimeout(() => {

        //     //reset canvas
        //     this.c.clearRect(0,0,1500,700);

        //     time = Date.now();
        //     //console.log("いまの"+time);

        //     //next draw
        //     requestAnimationFrame(this.gameloop.bind(this)); 
        // }, iwatani4);
        
        
        requestAnimationFrame(this.gameloop.bind(this)); 
    }

    public draw():void{
        
        
        // this.count++;
        

        this.tileM.draw(this.c);
        this.player.draw(this.c);

        //collision tile
        this.collisionM.draw(this.c);
        



        

        //object
        for(let i:number = 0; i<this.doors.length; i++){

            if(this.doors[i] !== undefined){

                this.doors[i].draw(this.c);
            }
        }

        this.asset.draw(this.c);

        this.ui.draw(this.c);
       
        


        

    }
}

//start game
function start():void{

    window.onload = ()=>{
        let iwatani = new GamePanel;
        
        
        iwatani.setup();
    }
}

start();

// console.log("iwataniiiiii");

// let iwatani = new GamePanel;
// iwatani.setup();
// window.onload = ()=>{
//     iwatani.gameloop();
// }





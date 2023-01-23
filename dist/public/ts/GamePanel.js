import { Player } from "./Player.js";
import { Keyhandler } from "./KeyHandler.js";
import { TileManager } from "./TileManager.js";
import { CollisionMap } from "./CollisionMap.js";
import { CollisionChecker } from "./CollisionChecker.js";
import { UI } from "./UI.js";
import { Asset } from "./Asset.js";
import { LSManager } from "./LSManager.js";
import { Entity } from "./npc/Entity.js";
export class GamePanel {
    constructor() {
        this.count = 0;
        //game state
        this.gameState = 1;
        this.fieldScene = 1;
        this.menuScene = 2;
        this.itemViewSecne = 3;
        this.startOverMakeSureScene = 4;
        this.talkingScene = 5;
        this.gameStartOver = false;
        //map state
        this.field1 = 0;
        this.myHouse = 1;
        this.mapState = this.field1;
        this.maps = [];
        this.collisionDatas = [];
        this.mapsChange = true;
        this.player = new Player(this);
        this.entity = new Entity(this);
        this.npc = [];
        this.tileM = new TileManager(this);
        this.keyH = new Keyhandler(this);
        this.collisionM = new CollisionMap(this);
        this.collisionC = new CollisionChecker(this);
        this.ui = new UI(this);
        this.doors = [];
        this.asset = new Asset(this);
        this.strageM = new LSManager();
        this.sound = [];
        this.collision = false;
        this.collisionNPC = false;
        //public collisionArray:CollisionTile[] = this.collisionM.mapArrayCreate(); 
        this.screenWidth = 1500;
        this.screenHeight = 700;
        this.worldWidth = 3840;
        this.worldHeight = 2560;
        this.originalTilesize = 32;
        this.scale = 2;
        this.tilesize = this.originalTilesize * this.scale;
        this.canvas = document.querySelector(".field1");
        this.canvas.width = this.screenWidth;
        this.canvas.height = this.screenHeight;
        const c = this.canvas.getContext("2d");
        if (!c) {
            throw new Error("failed");
        }
        this.c = c;
    }
    setup() {
        this.asset.setObject();
        this.asset.setNpc();
        this.asset.setSounds();
        this.asset.setMaps();
        this.asset.setCollisions();
        this.asset.setDoor();
        //console.log(this.collisionDatas[0]+"iwatanidaze")
        this.gameloop();
    }
    gameloop() {
        //map create
        this.collisionM.mapArrayCreate();
        let time = Date.now();
        let delta = 0;
        let iwatani4 = 0;
        //draw on canvas 
        this.draw();
        if (this.gameState === this.fieldScene) {
            //player 
            this.player.update();
            //npc
            if (this.npc.length > 0) {
                for (let i = 0; this.npc.length > i; i++) {
                    this.npc[i].update();
                }
            }
        }
        //DOM map
        if (this.mapState === this.field1) {
            this.canvas = document.querySelector(".field1");
        }
        else if (this.mapState === this.myHouse) {
            this.canvas = document.querySelector(".myhouse");
        }
        //console.log("まえの"+time);
        //start over
        if (this.gameStartOver) {
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
    draw() {
        // this.count++;
        this.tileM.draw(this.c);
        this.player.draw(this.c);
        //collision tile
        this.collisionM.draw(this.c);
        //object
        for (let i = 0; i < this.doors.length; i++) {
            if (this.doors[i] !== undefined) {
                this.doors[i].draw(this.c);
            }
        }
        this.asset.draw(this.c);
        this.ui.draw(this.c);
    }
}
//start game
function start() {
    window.onload = () => {
        let iwatani = new GamePanel;
        iwatani.setup();
    };
}
start();
// console.log("iwataniiiiii");
// let iwatani = new GamePanel;
// iwatani.setup();
// window.onload = ()=>{
//     iwatani.gameloop();
// }
//# sourceMappingURL=GamePanel.js.map
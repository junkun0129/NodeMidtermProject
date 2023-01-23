//import { GamePanel } from "./GamePanel.js";
export class CollisionTile {
    //public gp:GamePanel = new GamePanel;
    constructor(i, j, collisionNum) {
        this.originalTilesize = 32;
        this.scale = 2;
        this.tilesize = this.originalTilesize * this.scale;
        this.worldX = j * this.tilesize;
        this.worldY = i * this.tilesize;
        this.collisionNum = collisionNum;
    }
}
//# sourceMappingURL=CollisionTile.js.map
import { CollisionTile } from "./CollisionTile.js";
export class CollisionMap {
    constructor(gp) {
        this.collisionIndex = 594;
        this.doorIndex = 3597;
        this.collisionArray = [];
        this.gp = gp;
    }
    mapArrayCreate() {
        if (this.gp.mapsChange) {
            const collisionMap = [];
            for (let i = 0; i < this.gp.collisionDatas[this.gp.mapState].length; i += 60) {
                collisionMap.push(this.gp.collisionDatas[this.gp.mapState].slice(i, 60 + i));
            }
            const collisionMapNext = [];
            collisionMap.forEach((row, i) => {
                row.forEach((num, j) => {
                    if (num === this.collisionIndex || num === this.doorIndex) {
                        collisionMapNext.push(new CollisionTile(i, j, num));
                    }
                });
            });
            this.collisionArray = collisionMapNext;
            this.gp.mapsChange = false;
        }
    }
    draw(c) {
        this.collisionArray.forEach((tile) => {
            let collisionTileX = tile.worldX - this.gp.player.playerX + 750;
            let collisionTileY = tile.worldY - this.gp.player.playerY + 350;
            if (tile.collisionNum === this.collisionIndex) {
                c.fillStyle = "rgb(0,0,0,0)";
            }
            else if (tile.collisionNum === this.doorIndex) {
                c.fillStyle = "rgb(200,200,200)";
            }
            c.fillRect(collisionTileX, collisionTileY, this.gp.tilesize, this.gp.tilesize);
        });
    }
}
//# sourceMappingURL=CollisionMap.js.map
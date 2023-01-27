export class Book {
    constructor(gp, imageName, x, y, mapstate) {
        this.gp = gp;
        this.imageName = imageName;
        this.x = x;
        this.y = y;
        this.mapstate = mapstate;
    }
    draw(c) {
        if (this.gp.mapState === this.mapstate) {
            let image = new Image;
            image.src = this.imageName;
            let objectX = this.x - this.gp.player.playerX + 750;
            let objectY = this.y - this.gp.player.playerY + 350;
            c.drawImage(image, objectX, objectY, this.gp.tilesize, this.gp.tilesize);
        }
    }
}
//# sourceMappingURL=Book.js.map
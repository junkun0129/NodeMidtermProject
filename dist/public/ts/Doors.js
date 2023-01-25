export class Doors {
    constructor(gp, name, x, y, imageName, collision, from, to) {
        this.gp = gp;
        this.name = name;
        this.x = x;
        this.y = y;
        this.imageName = imageName;
        this.collision = collision;
        this.from = from;
        this.to = to;
    }
    draw(c) {
        if (this.gp.mapState === this.from) {
            let image = new Image;
            image.src = this.imageName;
            let objectX = this.x - this.gp.player.playerX + 750;
            let objectY = this.y - this.gp.player.playerY + 350;
            c.drawImage(image, objectX, objectY, this.gp.tilesize, this.gp.tilesize);
        }
    }
}
//# sourceMappingURL=Doors.js.map
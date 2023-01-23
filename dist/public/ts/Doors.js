export class Doors {
    constructor(gp, name, objectX, objectY, imageName, collision) {
        this.gp = gp;
        this.name = name;
        this.objectX = objectX;
        this.objectY = objectY;
        this.imageName = imageName;
        this.collision = collision;
    }
    draw(c) {
        let image = new Image;
        image.src = this.imageName;
        let objectX = this.objectX - this.gp.player.playerX + 750;
        let objectY = this.objectY - this.gp.player.playerY + 350;
        c.drawImage(image, objectX, objectY, this.gp.tilesize, this.gp.tilesize);
    }
}
//# sourceMappingURL=Doors.js.map
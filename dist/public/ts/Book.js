export class Book {
    constructor(gp, imageName, x, y, mapstate) {
        this.jumpable = false;
        this.speakable = false;
        this.dialogs = ["a", "k", "k", "d"];
        this.dialogIndex = 0;
        this.gp = gp;
        this.imageName = imageName;
        this.x = x;
        this.y = y;
        this.mapstate = mapstate;
    }
    speak() {
        const maxDialogIndex = this.dialogs.length;
        if (this.dialogIndex === maxDialogIndex) {
            this.gp.gameState = this.gp.fieldScene;
            this.dialogIndex = 0;
        }
        this.gp.ui.currentDialog = this.dialogs[this.dialogIndex];
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
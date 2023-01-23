export class Player {
    constructor(gp) {
        this.spriteCounter = 0;
        this.spriteNum = 1;
        this.itemInventory = [];
        this.gp = gp;
        this.direction = "down";
        this.playerXOriginal = 3000;
        this.playerYOriginal = 2000;
        this.playerX = this.playerXOriginal;
        this.playerY = this.playerYOriginal;
        this.speed = 7;
        this.screenX = 750;
        this.screenY = 350;
        this.image = new Image;
    }
    update() {
        if (this.gp.keyH.downPressed === true || this.gp.keyH.upPressed === true || this.gp.keyH.leftPressed === true || this.gp.keyH.rightPressed === true) {
            if (this.gp.keyH.downPressed === true) {
                this.direction = "down";
                console.log("down");
            }
            ;
            if (this.gp.keyH.upPressed === true) {
                this.direction = "up";
                console.log("up");
            }
            ;
            if (this.gp.keyH.leftPressed === true) {
                this.direction = "left";
                console.log("left");
            }
            ;
            if (this.gp.keyH.rightPressed === true) {
                this.direction = "right";
                console.log("right");
            }
            ;
            this.gp.collision = false;
            //player to collision
            this.gp.collisionC.checkCollisionEntity(this.direction);
            this.playerPosition();
            //intract with NPC
            let NPCbumped = this.gp.collisionC.CheckCollisionPlayerToEntity(this.direction);
            this.intaractNPC(NPCbumped);
            //intract with object
            let deleteIndex = this.gp.collisionC.CheckCollisionObject(this.direction);
            if (deleteIndex !== 999) {
                this.picableIf(deleteIndex);
                //if it is door
                // if(this.gp.asset.itemsOnMap[deleteIndex].name === "doors"){
                //     this.gp.mapState = this.gp.myHouse;
                //     this.gp.mapsChange = true;
                // }
            }
            //player walking
            if (!this.gp.collision) {
                switch (this.direction) {
                    case "down": {
                        this.playerY += this.speed;
                        console.log(this.direction);
                        break;
                    }
                    case "up": {
                        this.playerY -= this.speed;
                        console.log(this.direction);
                        break;
                    }
                    case "left": {
                        this.playerX -= this.speed;
                        console.log(this.direction);
                        break;
                    }
                    case "right": {
                        this.playerX += this.speed;
                        console.log(this.direction);
                        break;
                    }
                }
            }
            //change spritesheet like walking
            this.spriteCounter++;
            if (this.spriteCounter > 10) {
                if (this.spriteNum === 1) {
                    this.spriteNum = 2;
                }
                else if (this.spriteNum === 2) {
                    this.spriteNum = 1;
                }
                this.spriteCounter = 0;
            }
        }
    }
    intaractNPC(i) {
        if (i !== 999) {
            console.log(this.gp.npc[i]);
            this.gp.gameState = this.gp.talkingScene;
            this.gp.npc[i].speak();
        }
    }
    picableIf(deleteIndex) {
        //if item pickable
        if (this.gp.asset.itemsOnMap[deleteIndex].pickable) {
            this.itemInventory.push(this.gp.asset.itemsOnMap[deleteIndex]);
            this.gp.strageM.setToStrage("itemInventory", this.itemInventory);
            this.gp.asset.itemsOnMap.splice(deleteIndex, 1);
            this.gp.strageM.setToStrage("itemOnMap", this.gp.asset.itemsOnMap);
        }
        else if (this.gp.asset.itemsOnMap.length > 0) {
            if (this.gp.asset.itemsOnMap[deleteIndex].name === "rock") {
                for (let i = 0; this.itemInventory.length > i; i++) {
                    if (this.itemInventory[i].name === "bomb") {
                        let rock = this.gp.asset.itemsOnMap.findIndex(array => array.name === "rock");
                        this.gp.asset.itemsOnMap.splice(rock, 1);
                        this.gp.strageM.setToStrage("itemOnMap", this.gp.asset.itemsOnMap);
                        this.itemInventory.splice(i, 1);
                        this.gp.strageM.setToStrage("itemInventory", this.itemInventory);
                    }
                }
            }
        }
    }
    playerPosition() {
        if (this.gp.mapsChange) {
            switch (this.gp.gameState) {
                case this.gp.field1:
                    this.playerX = 2000;
                    this.playerY = 2000;
                    break;
                case this.gp.myHouse:
                    this.playerX = 3500;
                    this.playerY = 2200;
                    break;
            }
        }
    }
    draw(c) {
        this.image.src = "/img/main.png";
        switch (this.direction) {
            case "down":
                if (this.spriteNum === 1) {
                    //this.image.src = "/img/yuusya-down1.png";
                    c.drawImage(this.image, 0, 0, 32, 32, this.screenX, this.screenY, this.gp.tilesize, this.gp.tilesize);
                }
                else if (this.spriteNum === 2) {
                    //this.image.src = "/img/yuusya-down2.png";
                    c.drawImage(this.image, 65, 0, 32, 32, this.screenX, this.screenY, this.gp.tilesize, this.gp.tilesize);
                }
                break;
            case "up":
                if (this.spriteNum === 1) {
                    //this.image.src = "/img/yuusya-up1.png";
                    c.drawImage(this.image, 0, 97, 32, 32, this.screenX, this.screenY, this.gp.tilesize, this.gp.tilesize);
                }
                else if (this.spriteNum === 2) {
                    //this.image.src = "/img/yuusya-up2.png";
                    c.drawImage(this.image, 65, 97, 32, 32, this.screenX, this.screenY, this.gp.tilesize, this.gp.tilesize);
                }
                break;
            case "left":
                if (this.spriteNum === 1) {
                    //this.image.src = "/img/yuusya-left1.png";
                    c.drawImage(this.image, 0, 33, 32, 32, this.screenX, this.screenY, this.gp.tilesize, this.gp.tilesize);
                }
                else if (this.spriteNum === 2) {
                    //this.image.src = "/img/yuusya-left2.png";
                    c.drawImage(this.image, 65, 33, 32, 32, this.screenX, this.screenY, this.gp.tilesize, this.gp.tilesize);
                }
                break;
            case "right":
                if (this.spriteNum === 1) {
                    //this.image.src = "/img/yuusya-right1.png";
                    c.drawImage(this.image, 0, 65, 32, 32, this.screenX, this.screenY, this.gp.tilesize, this.gp.tilesize);
                }
                else if (this.spriteNum === 2) {
                    //this.image.src = "/img/yuusya-right2.png";
                    c.drawImage(this.image, 65, 65, 32, 32, this.screenX, this.screenY, this.gp.tilesize, this.gp.tilesize);
                }
                break;
        }
        //if(this.spriteCounter<= 100)
        // c.drawImage(this.image, this.screenX, this.screenY,this.gp.tilesize,this.gp.tilesize);
    }
}
//# sourceMappingURL=Player.js.map
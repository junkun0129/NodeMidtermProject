export class Sounds {
    //public MusicControlNum:number = 0;
    constructor(gp, url) {
        this.gp = gp;
        this.url = url;
    }
    playMusic() {
        // this.MusicControlNum++
        // if(this.MusicControlNum > 50){
        //     let audio = new Audio(this.url);    
        //     audio.play();
        //     this.MusicControlNum = 0;
        // }
        let audio = new Audio(this.url);
        audio.play();
    }
}
//# sourceMappingURL=Sounds.js.map
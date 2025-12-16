import Phaser from 'phaser';
import Player from '../sprites/Player';

export default class Level1 extends Phaser.Scene {
    constructor() {
        super('Level1');
    }
    
    create() {
        // FIX: Changed 'office_bg.png' to 'office.png' to match JSON
        let bg = this.add.image(this.scale.width/2, this.scale.height/2, 'game_assets', 'room background.png');
        
        let scaleX = this.scale.width / bg.width;
        let scaleY = this.scale.height / bg.height;
        bg.setScale(Math.max(scaleX, scaleY));

        this.player = new Player(this, 100, 480);
    }

    update() {
        this.player.update();
        if (this.player.x > this.scale.width - 50) this.scene.start('Level2');
    }
}
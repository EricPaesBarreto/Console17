import Phaser from 'phaser';
import Player from '../sprites/Player';

export default class Level2 extends Phaser.Scene {
    constructor() {
        super('Level2');
    }

    create() {

        let bg = this.add.image(this.scale.width/2, this.scale.height/2, 'game_assets', 'office.png');
        let scaleX = this.scale.width / bg.width;
        let scaleY = this.scale.height / bg.height;
        bg.setScale(Math.max(scaleX, scaleY));
        this.physics.world.setBoundsCollision(false, true, true, true);
        this.add.text(50, 50, '<- Level 2: Go Left to Return', { fontSize: '32px', fill: '#0f0' });
        
        // Spawn Player slightly away from the left edge so they don't loop instantly
        this.player = new Player(this, 100, 480);
    }

    update() {
        this.player.update();

        // LOGIC: If player touches LEFT edge (x < 50), return to Level 1
        if (this.player.x < 50) {
            this.scene.start('Level1');
        }
    }
}
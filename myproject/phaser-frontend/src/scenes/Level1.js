import Phaser from 'phaser';
import Player from '../sprites/Player';

export default class Level1 extends Phaser.Scene {
    constructor() {
        super('Level1');
    }

    create() {
        // Background text
        this.physics.world.setBoundsCollision(true, false, true, true);
        this.add.text(50, 50, 'Level 1: Go Right ->', { fontSize: '32px', fill: '#fff' });

        // Spawn Player on the LEFT side (100)
        this.player = new Player(this, 1400, 600);
    }

    update() {
        this.player.update();

        // LOGIC: If player touches RIGHT edge, go to Level 2
        if (this.player.x > this.scale.width ) {
            this.scene.start('Level2');
        }
    }
}
import Phaser from 'phaser';

// Import the specific asset
import player from '../assets/man_without.png'; 

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    preload() {
        
        this.load.image('player', player);
    }

    create() {
        this.add.text(100, 100, 'MY GAME', { fontSize: '40px', fill: '#fff' });

        const startBtn = this.add.text(100, 200, 'START GAME', { 
            fontSize: '30px', 
            fill: 'rgba(255, 143, 188, 1)',
            backgroundColor: '#000',
            padding: { x: 10, y: 5 }
        })
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.scene.start('Level1'));
    }
}
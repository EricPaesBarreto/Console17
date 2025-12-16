import Phaser from 'phaser';

import atlasImg from '../assets/char_room-0.png';
import atlasJson from '../assets/char_room.json';

export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
    }

    preload() {
        this.load.atlas('game_assets', atlasImg, atlasJson);
    }

    create() {
        // 1. Right Walk (Frames 1.png to 4.png)
        // Your JSON has files named: "1.png", "2.png", "3.png", "4.png"
        this.anims.create({
            key: 'right', 
            frames: this.anims.generateFrameNames('game_assets', { 
                prefix: '',       // FIX: No prefix!
                start: 1,         // Start at 1.png
                end: 4,           // End at 4.png
                zeroPad: 0,       // FIX: No zeros!
                suffix: '.png'
            }),
            frameRate: 4,
            repeat: -1
        });

        // 2. Left Walk (Frames 5.png to 8.png)
        // Your JSON has files named: "5.png" ... "8.png"
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNames('game_assets', { 
                prefix: '',       // FIX: No prefix!
                start: 5,         
                end: 8,           
                zeroPad: 0,
                suffix: '.png'
            }),
            frameRate: 4,
            repeat: -1
        });

        // 3. Idle (Frame 5-5.png)
        this.anims.create({
            key: 'idle',
            frames: [ { key: 'game_assets', frame: '5-5.png' } ], 
            
        });

        // --- MENU UI ---
        this.add.text(this.scale.width / 2, 200, 'THE GAME', { 
            fontSize: '64px', fill: '#ffffff', fontStyle: 'bold'
        }).setOrigin(0.5);

        const startBtn = this.add.text(this.scale.width / 2, 350, 'START GAME', { 
            fontSize: '32px', fill: '#0f0', backgroundColor: '#000000', padding: { x: 20, y: 10 }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.scene.start('Level1'));
    }
}
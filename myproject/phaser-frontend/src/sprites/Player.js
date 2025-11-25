import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        // Match the key 'player' loaded in MainMenu.js
        super(scene, x, y, 'player'); 

        // 1. Add this sprite to the scene
        scene.add.existing(this);
        
        // 2. Enable physics (gravity, collisions)
        scene.physics.add.existing(this);

        // 3. SETTINGS
        // CHANGE THIS NUMBER to resize your character!
        // 2 = Double size, 4 = Quadruple size, etc.
        this.setScale(4); 
        
        // DISABLED: This was causing the "Stop at border" issue.
        // We want to walk off the edge to trigger the next level.
        // this.setCollideWorldBounds(true); 
        
        // 4. Setup Keyboard Keys (Up, Down, Left, Right)
        this.setCollideWorldBounds(true); 
        this.cursors = scene.input.keyboard.createCursorKeys();
    }

    update() {
        // Default: Stop moving if no key is pressed
        this.setVelocity(0);

        // Check Left/Right
        if (this.cursors.left.isDown) {
            this.setVelocityX(-300); // Go Left
            if (this.anims) this.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.setVelocityX(300);  // Go Right
            if (this.anims) this.anims.play('right', true);
        }

       
    }
}
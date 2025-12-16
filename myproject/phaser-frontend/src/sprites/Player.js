import Phaser from 'phaser';

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        // Start with the idle frame "5-5.png" found in your JSON
        super(scene, x, y, 'game_assets', '5-5.png'); 

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setScale(5); 
        this.setCollideWorldBounds(true); 
        this.cursors = scene.input.keyboard.createCursorKeys();
        this.body.setSize(20, 80); 
    
    // 3. Center the box on the sprite
    // (x, y) offset from top-left.
        this.body.setOffset(15, 10);
    }

    update() {
        this.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.setVelocityX(-400);
            
            // FIX: Play the 'left' animation, NOT 'walk'
            // Since frames 5-8 are already looking left, we DO NOT flipX
            this.setFlipX(false); 
            this.anims.play('left', true); 
        } 
        else if (this.cursors.right.isDown) {
            this.setVelocityX(400);
            this.setFlipX(false);
            
            // FIX: Play the 'right' animation, NOT 'walk'
            this.anims.play('right', true);
        } 
        else {
            // FIX: Play the 'idle' animation
            this.anims.play('idle', true);
        }
    }
}
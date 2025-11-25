import 'bootstrap/dist/css/bootstrap.min.css';
import Phaser from 'phaser';
import './style.css';

// We don't need to import images here anymore. 
// MainMenu handles loading assets.
import MainMenu from './scenes/MainMenu';
import Level1 from './scenes/Level1';
import Level2 from './scenes/Level2';

const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    render: {
        pixelArt: true,
        antialias: false
    },
    parent: 'game-container',
    backgroundColor: 0x0C3D57,
    
    scale: {
        mode: Phaser.Scale.RESIZE, 
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    
    // This list determines which scenes run. MainMenu is first.
    scene: [MainMenu, Level1, Level2]
};

const game = new Phaser.Game(config);
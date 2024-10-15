var input=false
let config = {
  type: Phaser.AUTO,
    width: 800,
    height: 500,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
      preload: preload,
        create: create,
        update: update
    }
};
var map = '1111111111111111' +
          '1000000000000001' +
          '1000000000000001' +
          '1000000000000001' +
          '1000000000000001' +
          '1000000000000001' +
          '1000000000000001' +
          '1000000000000001' +
          '1111111111111111';
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(20, 10, 150, 100);
function loadimg(){
    this.load.image('block', 'assets/block.png');
}
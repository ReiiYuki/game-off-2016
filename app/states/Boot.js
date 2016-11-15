export default class Boot extends Phaser.State{
  init(){
    this.game.stage.backgroundColor = "#b2d550"
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    this.game.scale.pageAlignHorizontally = true
    this.game.scale.pageAlignVertically = true
  }
  preload(){
    this.game.load.image('preloadbar', '/sprites/Sprite02.png')
  }
  create(){
    this.game.state.start('Preloader')
  }
}

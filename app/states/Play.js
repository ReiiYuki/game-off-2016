import Hero from '../prefabs/Hero'
export default class Play extends Phaser.State{
  init(){
    this.hero = new Hero(this.game,50,50,"sprite")
    this.game.add.existing(this.hero)
    console.log('play')
  }
  update(){
  }

}

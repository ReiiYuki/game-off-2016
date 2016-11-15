import Boot from './states/Boot'
// import Preloader from './states/Preloader'
import Play from './states/Play'
class Game extends Phaser.Game{
	constructor(width,height){
		super(width, height, Phaser.CANVAS ,null)
		this.state.add('Boot', Boot)
		// this.state.add('Preloader', Preloader)
		// this.state.add('Play', Play)
		this.state.start('Boot')
	}

}
// 160px x 144px
new Game(160,144)

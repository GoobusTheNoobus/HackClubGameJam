import * as ex from 'excalibur';
import { Player } from './Entities/Player'

const game = new ex.Engine({
  width: 1920,
  height: 1080,
  backgroundColor: ex.Color.fromHex('#070007'),
  displayMode: ex.DisplayMode.FitScreenAndFill,
});

game.start();
game.toggleDebug(); 

let player = new Player("Goobus")

game.add(player)
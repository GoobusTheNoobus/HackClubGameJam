import * as ex from 'excalibur';

const game = new ex.Engine({
  width: 1920,
  height: 1080,
  backgroundColor: ex.Color.fromHex('#070007'),
  displayMode: ex.DisplayMode.FitScreenAndFill,
  pixelRatio: 2,
});
game.start();
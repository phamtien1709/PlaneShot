var TP = {};
TP.configs = {
  //scoring
  BONUS_KILL_ENEMY  : 10,
  GAME_WIDTH        : 640,
  GAME_HEIGHT       : 960
};

window.onload = function(){
  TP.game = new Phaser.Game(TP.configs.GAME_WIDTH,TP.configs.GAME_HEIGHT,Phaser.CANVAS,'', null, false, false);

  TP.game.state.add('boot', bootState);
  TP.game.state.add('load', loadState);
  TP.game.state.add('menu', menuState);
  TP.game.state.add('play', playState);
  TP.game.state.add('win', winState);
  TP.game.state.start('boot');
}

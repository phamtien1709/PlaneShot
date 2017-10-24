var TP = {};
//configs play state
TP.configs = {
  GAME_WIDTH: 640,
  GAME_HEIGHT: 960,
  P1_START_POSITION: {
    x: 200,
    y: 800,
    SPEED: 300,
    bulletDelay: 200
  },
  P2_START_POSITION: {
    x: 400,
    y: 800,
    SPEED: 300,
    bulletDelay: 200
  }
};

window.onload = function() {
  TP.game = new Phaser.Game(TP.configs.GAME_WIDTH, TP.configs.GAME_HEIGHT, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
    render: render
  }, false, false);
}

// preparations before game starts
var preload = function() {
  TP.game.scale.minWidth = TP.configs.GAME_WIDTH / 2;
  TP.game.scale.minHeight = TP.configs.GAME_HEIGHT / 2;
  TP.game.scale.maxWidth = TP.configs.GAME_WIDTH;
  TP.game.scale.maxHeight = TP.configs.GAME_HEIGHT;
  TP.game.scale.pageAlignHorizontally = true;
  TP.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  TP.game.time.advancedTiming = true;

  TP.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  TP.game.load.image('bulletType2', 'Assets/Original Sprites/BulletType2.png');
  TP.game.load.image('background', 'Assets/Map1.png');
}

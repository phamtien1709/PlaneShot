var TP = {};
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

// initialize the game
var create = function() {
  TP.game.physics.startSystem(Phaser.Physics.ARCADE);
  TP.keyboard = TP.game.input.keyboard;

  TP.background = TP.game.add.sprite(0, -960, 'background');

  TP.bulletGroup = TP.game.add.physicsGroup();
  TP.enemyGroup = TP.game.add.physicsGroup();
  TP.playerGroup = TP.game.add.physicsGroup();

  TP.players = [];
  TP.players.push(
    new ShipType2Controller(TP.configs.P1_START_POSITION.x, TP.configs.P1_START_POSITION.y, '-Player', {
      up: Phaser.Keyboard.UP,
      down: Phaser.Keyboard.DOWN,
      left: Phaser.Keyboard.LEFT,
      right: Phaser.Keyboard.RIGHT,
      fire: Phaser.Keyboard.SPACEBAR,
      SPEED: TP.configs.P1_START_POSITION.SPEED,
      bulletDelay: TP.configs.P1_START_POSITION.bulletDelay
    })
  );

  TP.players.push(
    new ShipType3Controller(TP.configs.P2_START_POSITION.x, TP.configs.P2_START_POSITION.y, '-Partner', {
      up: Phaser.Keyboard.W,
      down: Phaser.Keyboard.S,
      left: Phaser.Keyboard.A,
      right: Phaser.Keyboard.D,
      fire: Phaser.Keyboard.F,
      SPEED: TP.configs.P2_START_POSITION.SPEED,
      bulletDelay: TP.configs.P2_START_POSITION.bulletDelay
    })
  );

  new EnemyController(320, 200, {
    spriteName: 'EnemyType1.png',
    health: 5
  });

}

// update game state each frame
var update = function() {
  TP.background.y += 3;

  if (TP.background.y > 0) {
    TP.background.y -= 960;
  }

  TP.game.physics.arcade.overlap(
    TP.bulletGroup,
    TP.enemyGroup,
    onBulletHitEnemy
  );

}

// before camera render (mostly for debug)
var render = function() {}

var onBulletHitEnemy = function(bulletSprite, enemySprite) {
  console.log(bulletSprite.frameName);
  if (bulletSprite.frameName != 'BulletType3.png'){
    bulletSprite.kill();
  }
  enemySprite.damage(1);
}

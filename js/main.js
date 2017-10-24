// initialize the game
var create = function() {
  TP.game.physics.startSystem(Phaser.Physics.ARCADE);
  TP.keyboard = TP.game.input.keyboard;

  TP.background = TP.game.add.sprite(0, -960, 'background');

  TP.bulletGroup = TP.game.add.physicsGroup();
  TP.enemyGroup = TP.game.add.physicsGroup();
  TP.playerGroup = TP.game.add.physicsGroup();


//creat players
  TP.players = [];
  TP.players.push(
    new ShipType1Controller(TP.configs.P1_START_POSITION.x, TP.configs.P1_START_POSITION.y, '-Player', {
      up: Phaser.Keyboard.UP,
      down: Phaser.Keyboard.DOWN,
      left: Phaser.Keyboard.LEFT,
      right: Phaser.Keyboard.RIGHT,
      fire: Phaser.Keyboard.L,
      SPEED: TP.configs.P1_START_POSITION.SPEED,
      bulletDelay: TP.configs.P1_START_POSITION.bulletDelay
    })
  );

  TP.players.push(
    new ShipType2Controller(TP.configs.P2_START_POSITION.x, TP.configs.P2_START_POSITION.y, '-Partner', {
      up: Phaser.Keyboard.W,
      down: Phaser.Keyboard.S,
      left: Phaser.Keyboard.A,
      right: Phaser.Keyboard.D,
      fire: Phaser.Keyboard.G,
      SPEED: TP.configs.P2_START_POSITION.SPEED,
      bulletDelay: TP.configs.P2_START_POSITION.bulletDelay
    })
  );
    console.log(TP.playerGroup.children);
// scroing
  TP.styleInGame = { font: "20px Arial", fill: "black", boundsAlignH: "center", boundsAlignV: "middle" };
  TP.styleEndGame = {font: "40px Arial", fill: "black", boundsAlignH: "center", boundsAlignV: "middle" }
  TP.frame = 0;
  TP.score = 0;
  TP.displayingText = TP.game.add.text( 10, 10, "Score: " + TP.score, TP.styleInGame);
  TP.countPlayer = TP.playerGroup.children.length;
//create Enemy
  new EnemyController({
    spriteName: 'EnemyType1.png',
    health: Math.floor((Math.random() * 5) + 1)
  });
}

// update game state each frame
var update = function() {
  TP.background.y += 3;
  if(TP.countPlayer > 0){
    TP.frame++;
    if(TP.frame % 130 === 0){
      new EnemyController({
        spriteName: 'EnemyType1.png',
        health: Math.floor((Math.random() * 5) + 1)
      });
    }
  } else {
    TP.playerGroup.destroy();
    TP.enemyGroup.destroy();
    TP.displayingText.destroy();
    var scoreEnd = TP.game.add.text(TP.game.world.centerX, TP.game.world.centerY, "                Score: " + TP.score + " \n Please F5 for New Game :)))", TP.styleEndGame);
    scoreEnd.anchor.setTo(0.5,0.5);
  }

  if (TP.background.y > 0) {
    TP.background.y -= 960;
  }

  TP.game.physics.arcade.overlap(
    TP.bulletGroup,
    TP.enemyGroup,
    onBulletHitEnemy
  );
  TP.game.physics.arcade.overlap(
    TP.enemyGroup,
    TP.playerGroup,
    onEnemyHitPlayer
  )

}

// before camera render (mostly for debug)
var render = function() {}

var onBulletHitEnemy = function(bulletSprite, enemySprite) {
  bulletSprite.kill();
  enemySprite.damage(1);
  if(enemySprite.health === 0) {
    TP.score += 10;
    TP.displayingText.setText("Score: " + TP.score);
  }
}

var onEnemyHitPlayer = function(enemySprite, playerSprite) {
  playerSprite.destroy();
  TP.countPlayer --;
}

var winState = {
  preload: function(){
    TP.game.scale.minWidth = 800;
    TP.game.scale.minHeight = 450;
    TP.game.scale.maxWidth = 1600;
    TP.game.scale.maxHeight = 900;
    TP.game.scale.pageAlignHorizontally = true;
    TP.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    TP.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
    TP.game.load.image('background','Assets/background2.png');
    TP.game.load.image('homeButton', 'Assets/homeButton.png');
    TP.game.load.image('replayButton', 'Assets/replayButton.png');
    TP.game.load.image('broken1', 'Assets/broke1.png');
    TP.game.load.image('broken2', 'Assets/broke2.png');
    TP.game.load.image('broken3', 'Assets/broke3.png');
    TP.game.load.image('broken4', 'Assets/broke4.png');
  },
  create: function(){
    TP.game.add.sprite(0, 0, 'background');

    TP.shipBroke1 = TP.game.add.sprite(300, 100, 'broken1');
    TP.shipBroke1.scale.set(0.5);
    TP.game.physics.arcade.enable(TP.shipBroke1);
    TP.shipBroke1.body.velocity.x = 20;
    TP.shipBroke1.body.velocity.y = 40;
    TP.shipBroke1.anchor = new Phaser.Point(0.5, 0.5);
    // TP.shipBroke1.rotation += TP.game.math.degToRad(10);

    TP.shipBroke2 = TP.game.add.sprite(300, 50, 'broken2');
    TP.shipBroke2.scale.set(0.5);
    TP.game.physics.arcade.enable(TP.shipBroke2);
    TP.shipBroke2.body.velocity.x = -10;
    TP.shipBroke2.body.velocity.y = 20;
    TP.shipBroke2.anchor = new Phaser.Point(0.5, 0.5);
    // TP.shipBroke2.rotation += TP.game.math.degToRad(-10);


    TP.shipBroke3 = TP.game.add.sprite(350, 100, 'broken3');
    TP.shipBroke3.scale.set(0.5);
    TP.game.physics.arcade.enable(TP.shipBroke3);
    TP.shipBroke3.body.velocity.x = 50;
    TP.shipBroke3.body.velocity.y = 0;
    TP.shipBroke3.anchor = new Phaser.Point(0.5, 0.5);
    // TP.shipBroke3.rotation += TP.game.math.degToRad(5);


    TP.shipBroke4 = TP.game.add.sprite(350, 50, 'broken4');
    TP.shipBroke4.scale.set(0.5);
    TP.game.physics.arcade.enable(TP.shipBroke4);
    TP.shipBroke4.body.velocity.x = 10;
    TP.shipBroke4.body.velocity.y = 10;
    TP.shipBroke4.anchor = new Phaser.Point(0.5, 0.5);
    // TP.shipBroke4.rotation += TP.game.math.degToRad(-7);

    var checkReplay = false;
    var checkReHome = false;
    var replayButton = TP.game.add.button(100, 100, 'replayButton', function(){
      checkReplay = true;
      replayButton.pendingDestroy = true;
      this.replay();
    }, this);
    var homeButton = TP.game.add.button(TP.configs.GAME_WIDTH - 250, 100, 'homeButton', function(){
      checkReHome = true;
      homeButton.pendingDestroy = true;
      this.rehome();
    }, this);

    //broken SHIP

    TP.style = { font: "bold 50px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
    var score = TP.game.add.text(TP.game.world.centerX, TP.game.world.centerY,
    "     Score: " + TP.score + "\nHighscore: " + localStorage.getItem("highscore") , TP.style);
    score.anchor.setTo(0.5, 0.5);
  },
  update: function() {
    TP.shipBroke1.rotation += TP.game.math.degToRad(1);
    TP.shipBroke2.rotation += TP.game.math.degToRad(-1);
    TP.shipBroke3.rotation += TP.game.math.degToRad(2);
    TP.shipBroke4.rotation += TP.game.math.degToRad(-0.5);
  },
  rehome: function(){
    TP.game.state.start('menu');
  },
  replay: function(){
    TP.game.state.start('play');
  }
}

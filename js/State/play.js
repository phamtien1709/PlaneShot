var playState = {
  // initialize the game
  create: function(){
    TP.game.add.sprite(0, 0, 'background');
    //TP.game.add.sprite(300, 300, 'spaceBomb');
    TP.blackHole = TP.game.add.sprite(300, 700, 'BlackHole');
    TP.blackHole.anchor = new Phaser.Point(0.5, 0.5);
    TP.blackHole.scale.set(1);

    //physics group
    TP.sunGroup = TP.game.add.physicsGroup();
    TP.enemyBulletGroup = TP.game.add.physicsGroup();
    TP.enemy3Group = TP.game.add.physicsGroup();
    TP.bulletTokenGroup = TP.game.add.physicsGroup();
    TP.shieldTokenGroup = TP.game.add.physicsGroup();
    TP.sunTokenGroup = TP.game.add.physicsGroup();
    TP.bulletGroup = TP.game.add.physicsGroup();
    TP.shieldGroup = TP.game.add.physicsGroup();
    TP.enemyGroup = TP.game.add.physicsGroup();
    TP.playerGroup = TP.game.add.physicsGroup();
    TP.meteorGroup = TP.game.add.physicsGroup();
    TP.warningGroup = TP.game.add.physicsGroup();

    //Scorring
    TP.style = { font: "30px Arial", fill: "white", boundsAlignH: "center", boundsAlignV: "middle" };
    TP.score = 0;
    TP.frame = 0;
    TP.displayingText = TP.game.add.text( 10, 10, "Score: " + TP.score, TP.style);
    TP.playerDie = false;
    TP.playerShooting = false;

    //create token
    TP.tokens = [];
    TP.tokenController = new TokenController();

    // create player
    TP.player = new PlayerController();
    TP.shield = {};
    TP.enemies = [];
    TP.enemyFactory = {};
    TP.enemyFactories = [];
    TP.meteorFactories = [];
    TP.enemyPool = {};
    TP.enemy2Pool = {};
    TP.meteorPool = {};
    TP.explosions = [];
    TP.meteors = [];
    TP.suns = [];
    TP.bullets = [];
    TP.enemy3 = {};
    TP.enemyBullets = [];
    TP.enemyBulletPool = [];
    TP.bulletPool = {};

    // create EnemyFactory
    TP.enemyFactory = new EnemyFactory();
    TP.meteorFactories.push(new MeteorFactory());

    //
    TP.enemy3 = new Enemy3Controller();
    TP.enemy3.sprite.kill();

    // TP.enemyPool = new Enemy1Pool();
    // TP.enemyPool.addEnemy();


    //tester
    //TP.enemies.push(new EnemyType2Controller(100, 100, 0, 100));
    //TP.game.add.sprite(500, 200, 'BurningSun');
    //TP.suns.push(new SunController(500, 600));

    //sound
    TP.explosionSound = [];

    TP.game.physics.startSystem(Phaser.Physics.ARCADE);
    TP.keyboard = TP.game.input.keyboard;
  },

  // update game state each frame
  update: function(){
    //TP.bullets.push(new Bullet(0));
    //scorring
    //console.log(TP.gameTime);
    if(!TP.playerDie){
      TP.frame++;
      TP.score += (TP.frame % 60 === 0);
      TP.displayingText.setText("Score: " + TP.score);
    }else {
      TP.displayingText.destroy();

      if(localStorage.getItem("highscore") === null){
        localStorage.setItem("highscore", TP.score);
      }
      else if(localStorage.getItem("highscore") < TP.score){
        localStorage.setItem("highscore", TP.score);
      }
      TP.game.state.start('win');
    }


    //blackHole spin
    TP.blackHole.rotation += TP.game.math.degToRad(-1);
  },

  // before camera render (mostly for debug)
  render: function(){
    // TP.game.debug.body(TP.player.sprite);
    // TP.tokens.forEach((enemy) => {
    //   TP.game.debug.body(enemy.sprite);
    // });
  },
}

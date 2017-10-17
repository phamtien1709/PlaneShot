var menuState = {
  preload: function(){
    TP.game.scale.minWidth = 640;
    TP.game.scale.minHeight = 960;
    TP.game.scale.maxWidth = 640;
    TP.game.scale.maxHeight = 960;
    TP.game.scale.pageAlignHorizontally = true;
    TP.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    TP.game.load.image('background','Assets/Map1.png');

  },
  create: function(){
    TP.game.add.sprite(0, -960, 'background');
    TP.gameName = TP.game.add.sprite(TP.game.width/2, TP.game.height/2 - 120, 'gameName');
    TP.gameName.anchor = new Phaser.Point(0.5, 0.5);

    var checkPlay = false;
    var button = TP.game.add.button(TP.game.world.centerX - 150, TP.game.world.centerY + 130, 'button', function(){
      checkPlay = true;
      button.pendingDestroy = true;
      this.start();
    }, this);
  },
  start: function(){
    console.log("Menu to Play");
    TP.game.state.start('play');
  }
};

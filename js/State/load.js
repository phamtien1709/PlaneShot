var loadState = {
  // preparations before game starts
  preload: function(){

    TP.game.scale.minWidth = 640;
    TP.game.scale.minHeight = 960;
    TP.game.scale.maxWidth = 640;
    TP.game.scale.maxHeight = 960;
    TP.game.scale.pageAlignHorizontally = true;
    TP.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    TP.game.time.advancedTiming = true;

    TP.game.load.image('background','Assets/Map1.png');


  },

  create: function(){
    var stateTrailer1 = TP.game.add.text(100, 100, 'LOADING...',{
      font: "100px Chiller",
      fill: "#ffffff"
    });
  //   var spacebarKey = TP.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  //   spacebarKey.onDown.addOnce(this.start, this);
  // },
  // start: function(){
  //   console.log("Load to Menu");
    TP.game.state.start('menu');
  }
};

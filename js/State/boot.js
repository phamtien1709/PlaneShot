var bootState = {
  create: function(){
    TP.game.physics.startSystem(Phaser.Physics.ARCADE);
    var stateTrailer1 = TP.game.add.text(100, 100, 'LOADING...',{
      font: "100x Chiller",
      fill: "#ffffff"
    });
  //   var spacebarKey = TP.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  //   spacebarKey.onDown.addOnce(this.start, this);
  // },
  // start: function(){
  //   console.log("Boot to Load");
    TP.game.state.start('load');
  // }
  }
};

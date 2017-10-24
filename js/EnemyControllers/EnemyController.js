class EnemyController {
  constructor(configs) {
    this.configs = configs;
    this.x = Math.floor((Math.random() * TP.game.scale.maxWidth) + 1);
    this.y = -30;
    this.sprite = TP.enemyGroup.create(this.x, this.y, 'assets', this.configs.spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.sprite.health = this.configs.health;
    this.configs = configs;
    this.configs.moveRadius = Math.floor((Math.random() * 250) + 1);
    this.configs.outHeight = 980;
    this.configs.randomMoveDown = Math.floor((Math.random() * 2) + 1);
    this.configs.startingX = this.x;
    this.configs.randomMoveRadius = 800 + Math.floor((Math.random() * 1000) + 1);

    this.sprite.update = this.update.bind(this);
  }

  update() {
    this.sprite.position.x =
      this.configs.startingX + this.configs.moveRadius * Math.sin(TP.game.time.time / this.configs.randomMoveRadius);
    this.sprite.position.y += this.configs.randomMoveDown;
    this.onEnemyGetOut(this.sprite);
  }

  onEnemyGetOut(enemySprite){
    if(this.sprite.position.y > this.configs.outHeight) {
      enemySprite.kill();
    }
  }
}

class EnemyController {
  constructor(x, y, configs) {
    this.configs = configs;
    this.sprite = TP.enemyGroup.create(x, y, 'assets', this.configs.spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);
    this.sprite.health = this.configs.health;
    this.configs = configs;
    this.configs.moveRadius = 250;
    this.configs.startingX = x;

    this.sprite.update = this.update.bind(this);
  }

  update() {
    this.sprite.position.x =
      this.configs.startingX + this.configs.moveRadius * Math.sin(TP.game.time.time / 1000);
  }
}

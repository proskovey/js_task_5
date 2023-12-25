export default class Character {
  constructor(name, attack, defence) {
    this.name = name;
    this.type = this.__proto__.constructor.name;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }
    this._name = name;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить level умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

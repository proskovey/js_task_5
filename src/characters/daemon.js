import Character from './character';

class Daemon extends Character {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.defence = 40;
    }
}

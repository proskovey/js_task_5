import Character from './character';

class Zombie extends Character {
    constructor(name) {
        super(name);
        this.attack = 40;
        this.defence = 10;
    }
}

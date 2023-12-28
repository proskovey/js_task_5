import Character from './character';

class Undead extends Character {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.defence = 25;
    }
}

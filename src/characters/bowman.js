import Character from './character';

class Bowman extends Character {
    constructor(name) {
        super(name);
        this.attack = 25;
        this.defence = 25;
    }
}

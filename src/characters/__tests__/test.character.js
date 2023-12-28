import Character from '../character';
import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('test class for Character', () => {
	const anyUser = new Character();
	expect(anyUser).toEqual({
		attack: undefined, defence: undefined, level: 1, health: 100,
});
});

test('test class for Bowerman', () => {
	const bowerman = new Bowerman();
	expect(bowerman).toEqual({
		attack: 25, defence: 25, level: 1, health: 100,
});
});

test('test class for Swordsman', () => {
	const swordsman = new Swordsman();
	expect(swordsman).toEqual({
		attack: 40, defence: 10, level: 1, health: 100,
});
});

test('test class for Magician', () => {
	const magician = new Magician();
	expect(magician).toEqual({
		attack: 10, defence: 40, level: 1, health: 100,
});
});

test('test class for Undead', () => {
	const undead = new Undead();
	expect(undead).toEqual({
		attack: 25, defence: 25, level: 1, health: 100,
});
});

test('test class for Zombie', () => {
	const zombie = new Zombie();
	expect(zombie).toEqual({
		attack: 40, defence: 10, level: 1, health: 100,
});
});

test('test class for Daemon', () => {
	const daemon = new Daemon();
	expect(daemon).toEqual({
		attack: 10, defence: 40, level: 1, health: 100,
});
});

test('test class for levelUp function for Bowerman', () => {
	const bowerman = new Bowerman();
	bowerman.health = 50;
	bowerman.levelUp();
	expect(bowerman).toEqual({
		attack: 30, defence: 30, level: 2, health: 100,
});
});

test('test class for levelUp function for Swordsman', () => {
	const swordsman = new Swordsman();
	swordsman.health = 20;
	swordsman.levelUp();
	expect(swordsman).toEqual({
		attack: 48, defence: 12, level: 2, health: 100,
});
});

test('test class for levelUp function for Magician', () => {
	const magician = new Magician();
	magician.levelUp();
	expect(magician).toEqual({
		attack: 12, defence: 48, level: 2, health: 100,
});
});

test('test class for levelUp function for dead Magician', () => {
	const magician = new Magician();
	magician.health = 0;

	expect(() => {
		magician.levelUp();
	}).toThrow();

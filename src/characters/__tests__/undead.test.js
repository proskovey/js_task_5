import Undead from '../undead';

test('instance of the class Undead', () => {
  const person = new Undead('dany');
  expect(person).toEqual({
    health: 100, level: 1, attack: 25, defence: 25, type: 'Undead', name: 'dany',
  });
});

test('levelUp for class', () => {
  const person = new Undead('dany');
  person.levelUp();
  expect(person).toEqual({
    health: 100, level: 2, attack: 30, defence: 30, name: 'dany', type: 'Undead',
  });
});

import Swordsman from '../swordsman';

test('instance of the class Swordsman', () => {
  const person = new Swordsman('dany');
  expect(person).toEqual({
    health: 100, level: 1, attack: 40, defence: 10, type: 'Swordsman', name: 'dany',
  });
});

test('levelUp for class', () => {
  const person = new Swordsman('dany');
  person.levelUp();
  expect(person).toEqual({
    health: 100, level: 2, attack: 48, defence: 12, name: 'dany', type: 'Swordsman',
  });
});

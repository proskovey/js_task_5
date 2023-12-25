import Character from '../character';

test('check name length', () => {
    expect(() => {let one = new Character('1', 10, 10)}).toThrow();

    expect(() => {let moreTen = new Character('12345678900', 10, 10)}).toThrow();

    expect(() => {let two = new Character('12', 10, 10)}).not.toThrow();

    expect(() => {let some = new Character('some', 10, 10)}).not.toThrow();

    expect(() => {let ten = new Character('1234567890', 10, 10)}).not.toThrow();
});

test('check method levelUp', () => {
    let char = new Character('zom', 10, 10);
    char.levelUp();
    const expected = {_name: 'zom', type: 'Character', health: 100, level: 2, attack: 12, defence: 12};
    expect(char).toEqual(expected);

    char.health = -1;
    expect(() => {char.levelUp()}).toThrow();
});

test.each([
    ['health more 0', -1, 10, -1],
    ['health equal 0', 0, 10, -9],
    ['health less 0', 10, 10, 1]
])(
    'check method damage', (healthStatus, health, points, expected) => {
    let char = new Character('zom', 10, 10);
    char.health = health;
    char.damage(points);
    
    const expectedChar = {_name: 'zom', type: 'Character', health: expected, level: 1, attack: 10, defence: 10};
    expect(char).toEqual(expectedChar);
});

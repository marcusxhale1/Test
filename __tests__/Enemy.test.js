const Enemy = require("../Enemy.js");
const Potion = require("../Potion");

jest.mock('../Potion.js');

test('creates an enemy object', () => {
    const enemy = new Enemy('Hideko', 'sword');

    expect(enemy.name).toBe('Hideko');
    expect(enemy.weapon).toBe('sword');
    expect(enemy.health).toEqual(expect.any(Number));
    expect(enemy.strength).toEqual(expect.any(Number));
    expect(enemy.agility).toEqual(expect.any(Number));
    expect(enemy.potion).toEqual(expect.any(Object));
})
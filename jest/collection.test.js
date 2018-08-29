
const L = require('../dist/L.cjs.js');

test('count', () => {
    const input1 = [1, 2, 3, 4];
    const input2 = [6.1, 4.2, 6.3];

    expect(L.count(input1)).toEqual(4);
    expect(L.count(input1, (item) => {
        return item > 2;
    })).toEqual(2);
});

test('countBy', () => {
    const input1 = [6.1, 4.2, 6.3];
    const output1 = { '4': 1, '6': 2 };
    expect(L.countBy(input1, Math.floor)).toEqual(output1);

    const input2 = ['one', 'two', 'three'];
    const output2 = { '3': 2, '5': 1 };
    expect(L.countBy(input2, 'length')).toEqual(output2);
});

test('every', () => {
    const input = [true, 1, null, 'yes'];
    expect(L.every(input, Boolean)).toBe(false);

    const users = [
        { 'user': 'barney', 'age': 36, 'active': false },
        { 'user': 'fred', 'age': 40, 'active': false }
    ];
    const matcher = { 'user': 'barney', 'active': false };
    expect(L.every(users, matcher)).toEqual(false);
});

test('copy', () => {
    let input = {name: 'Loliner', age: 25};
    let output = {name: 'Loliner', age: 25};
    expect(L.copy(input)).toEqual(output);
    input.name = 'Jack';
    expect(L.deepCompare(input, output)).toBe(false);

    let input1 = {name: 'Loliner', age: 25, city: ['Beijing', 'Shanghai']};
    let output1 = {name: 'Loliner', age: 25, city: ['Beijing', 'Shanghai']};
    expect(L.copy(input1)).toEqual(output1);
    input1['city'].push('Guangzhou');
    expect(L.deepCompare(input1, output1)).toBe(false);
});
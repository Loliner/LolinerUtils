
const L = require('../dist/L.cjs.js');

test('count', () => {
    const input1 = [1, 2, 3, 4];
    const input2 = [6.1, 4.2, 6.3];

    expect(L.count(input1)).toEqual(4);
    expect(L.count(input1, (item) => {
        return item > 2;
    })).toEqual(2);
});
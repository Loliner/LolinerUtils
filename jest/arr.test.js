
const L = require('../dist/L.cjs.js');

test('chunk', () => {
    const input = [1, 2, 3, 4];
    const output = [[1, 2], [3, 4]];

    expect(L.chunk(input, 2)).toEqual(output);
    // expect(L.deepCompareArray(L.chunk(input, 2), output)).toBe(true);
});

test('unique', () => {
    const input1 = [1, 2, 3, 4];
    const input2 = [3, 4, 5, 6];
    const output = [1, 2, 3, 4, 5, 6];

    expect(L.unique(input1.concat(input2))).toEqual(output);
    // expect(L.deepCompareArray(L.unique(input1.concat(input2)), output)).toBe(true);
});

test('compact', () => {
    const input = [0, 1, false, 2, '', 3];
    const output = [1, 2, 3];
    expect(L.compact(input)).toEqual(output);
    // expect(L.deepCompareArray(L.compact(input), output)).toBe(true);
});

test('flattenArray', () => {
    const input = [1, [2, [3, [4]], 5]];
    const output1 = [1, 2, [3, [4]], 5];
    const output2 = [1, 2, 3, 4, 5];

    expect(L.flattenArray(input, 1)).toEqual(output1);
    expect(L.flattenArray(input, Infinity)).toEqual(output2)
    // expect(L.deepCompareArray(L.flatten(input, 1), output1)).toBe(true);
    // expect(L.deepCompareArray(L.flatten(input, Infinity), output2)).toBe(true);
});

test('flattenObject', () => {
    const input = { a: 1, b: { c: 1, d: { e: 1 } } };
    const output1 = { a: 1, c: 1, d: { e: 1 } };
    const output2 = { a: 1, c: 1, e: 1 };

    expect(L.flattenObject(input, 1)).toEqual(output1);
    expect(L.flattenObject(input, Infinity)).toEqual(output2);

    const a = { c: 1 };
    const b = { d: 2 };
    a.b = b;
    b.a = a;
    const output3 = { c: 1, d: 2 };

    expect(L.flattenObject(a, Infinity)).toEqual(output3);
});
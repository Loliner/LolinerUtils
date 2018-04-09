
const L = require('../dist/L.cjs.js');

const num1 = 1;
const num2 = 1;
const num3 = 2;

const str1 = 'a';
const str2 = 'a';
const str3 = 'b';

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 3, 4];

const obj1 = { name: 'Loliner' };
const obj2 = { name: 'Loliner' };
const obj3 = { name: 'Loliner', age: 20 };

const complexArr1 = [
    { name: 'Loliner', age: 20, skill: ['javascript', 'python', 'java'] },
    { name: 'Jack', age: 23, skill: ['cocos2dx', 'unity'] },
    { name: 'Bob', age: 24, skill: ['php', 'c#', 'java'] },
];
const complexArr2 = [
    { name: 'Loliner', age: 20, skill: ['javascript', 'python', 'java'] },
    { name: 'Jack', age: 23, skill: ['cocos2dx', 'unity'] },
    { name: 'Bob', age: 24, skill: ['php', 'c#', 'java'] },
];
const complexArr3 = [
    { name: 'Loliner', age: 20, skill: ['javascript', 'python', 'java'] },
    { name: 'Jack', age: 23, skill: ['cocos2dx', 'unity'] },
    { name: 'Bob', age: 24, skill: ['php', 'c#', 'c++'] },
];

test('compare number', () => {
    expect(L.deepCompare(num1, num2)).toBe(true);
    expect(L.deepCompare(num1, num3)).toBe(false);
});

test('compare string', () => {
    expect(L.deepCompare(str1, str2)).toBe(true);
    expect(L.deepCompare(str1, str3)).toBe(false);
});

test('simple arr', () => {
    expect(L.deepCompare(arr1, arr2)).toBe(true);
    expect(L.deepCompare(arr1, arr3)).toBe(false);
});

test('simple obj', () => {
    expect(L.deepCompare(obj1, obj2)).toBe(true);
    expect(L.deepCompare(obj1, obj3)).toBe(false);
});

test('complex array', ()=> {
    expect(L.deepCompare(complexArr1, complexArr2)).toBe(true);
    expect(L.deepCompare(complexArr1, complexArr3)).toBe(false);
});
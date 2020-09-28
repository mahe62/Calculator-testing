/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const functions = require('../helpers');

test('1 tambah "1" adalah 2', ()=> {
    expect(functions.incrementQty(1)).toBe(2);
});
test('4 kurang "1" adalah 3', ()=> {
    expect(functions.decrementQty(4)).toBe(3);
});
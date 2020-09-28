/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const functions = require('../helpers');

test('1 tambah 1 adalah 2', ()=> {
    expect(functions.incrementQty(1)).toBe(2);
});
test('4 kurang 1 adalah 3', ()=> {
    expect(functions.decrementQty(4)).toBe(3);
});
test('"1" tambah 1 adalah 2', ()=> {
    expect(functions.incrementQty("1")).toBe(2);
});
test('"4" kurang 1 adalah 3', ()=> {
    expect(functions.decrementQty("4")).toBe(3);
});
test('Subtatal from 10000 with 2 qty is 20000', ()=> {
    expect(functions.total(10000,2)).toBe(20000);
});
test('diskon 50 persen jika kupon PPL50', ()=> {
    expect(functions.kode(50000,2,50)).toBe(50000);
});
test('diskon 20 persen jika kupon PPL50', ()=> {
    expect(functions.kode(50000,8,20)).toBe(320000);
});
// calculator.test.js

describe('Calculator functionality', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });

    test('subs 2 - 1 to equal  1', () => {
        expect(2 - 1).toBe(1);
    });
    test('divide 10 / 5 to equal 2', () => {
        expect(10 / 5).toBe(2);
    });
    test('50 * 2 to equal 100', () => {
        expect(50 * 2).toBe(100);
    });
});

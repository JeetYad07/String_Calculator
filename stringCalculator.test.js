
const add = require('./stringCalculator');

describe('String Calculator Tests', () => {
    test('should return 0 for empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
    });

    test('should return the sum of two numbers', () => {
        expect(add("1,5")).toBe(6);
    });

    test('should handle multiple numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
    });

    test('should handle new lines as delimiters', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should support custom delimiter', () => {
        expect(add("//;\n1;2;3")).toBe(6);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
    });

    test('should handle large numbers', () => {
        expect(add("1000,2000,3000")).toBe(6000);
    });

    test('should handle mixed delimiters without custom specification', () => {
        expect(add("1,2\n3")).toBe(6);
    });

    test('should support custom delimiter with special characters', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });
});

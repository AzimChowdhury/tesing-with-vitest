import { describe, expect, it } from "vitest";
import { divide } from "./unit1";



describe('divide function', () => {

    // Test for correctly dividing two positive numbers

    it('should correctly divide two positive numbers', () => {
        expect(divide(10, 2)).toBe(5);
    });

    //   Test for divide negative number
    it('should handle division of negative numbers', () => {
        expect(divide(-10, 2)).toBe(-5);
    });

    // Test if divide by zero
    it('should throw an error when trying to divide by zero', () => {
        expect(() => {
            divide(5, 0);
        }).toThrowError('Division by zero');
    });



    // some extra testing
    it('should return 0 when given 0', () => {
        expect(divide(0, 2)).toBe(0);
    });

    it('should return positive when both numbers are negative', () => {
        expect(divide(-10, -2)).toBe(5);
    })
});

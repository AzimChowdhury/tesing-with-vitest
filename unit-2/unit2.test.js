import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { executeCallback, myCallback } from './unit2';


describe('executeCallback()', () => {

    // const originalConsoleLog = console.log;
    let consoleOutput = '';
    console.log = vi.fn((output) => {
        consoleOutput += output + '\n';

    });

    beforeEach(() => {
        consoleOutput = '';
    });

    // Test case for callback execution
    it('should correctly call the provided callback function', () => {
        executeCallback(myCallback, 'Buy groceries');
        expect(consoleOutput).toContain('Task: Buy groceries');
    });

    // Test case for callback execution with task text
    it('should execute the callback function with the provided taskText argument', () => {
        executeCallback(myCallback, 'Do laundry');
        expect(consoleOutput).toContain('Task: Do laundry');
    });

    // Restore the original console.log
    afterAll(() => {
        // console.log = originalConsoleLog;
    });
});

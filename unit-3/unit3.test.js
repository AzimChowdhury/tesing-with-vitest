import { describe, expect, it } from "vitest";
import { fetchData } from "./unit3";


describe('fetchData function', () => {

    const data = { name: 'John', age: 30 }
    // Test for successful data fetch
    it('should resolve with the correct data on successful fetch', async () => {
        // call with data
        const result = await fetchData(data);
        expect(result).toEqual(data);
    });

    // Test case for error handling
    it('should reject the Promise with an error on failure', async () => {

        // calling the fetchData function without any argument
        await expect(fetchData()).rejects.toThrow('Failed to fetch data');
    });
});

const {multiply} = require("../multiplication");
test("thst 5 * 2 equals 10", () => {
    expect(multiply(5, 2)).toBe(10);
})
test("that 2 * 5 equals 4", () => {
    expect(multiply(2, 5)).toBe(10);
})
describe("testing another function in multiply", () => {
    test("test 4 * 2 equals 8", () => {
        expect(multiply(4 , 2)).toBe(8);
        expect(multiply(3 , 2)).not.toBe(7);
        expect(multiply(3, 3)).toEqual(9);
    })
    
})
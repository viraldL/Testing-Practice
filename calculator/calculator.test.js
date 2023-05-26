const calculator = require("./calculator");

test("(ADD) add numbers", () => {
    expect(calculator.add(1,2)).toBe(3);
});

test("(ADD) add big numbers", () => {
    expect(calculator.add(6172,8897)).toBe(15069);
});

test("(ADD) add if numbers are strings", () => {
    expect(calculator.add("2","2")).toBe(4);
});

test("(ADD) float numbers add", () => {
    expect(calculator.add(0.3,0.2)).toBe(0.5);
});

test("(ADD) float numbers add if numbers are strings", () => {
    expect(calculator.add("0.3","0.2")).toBe(0.5);
});

test("(ADD) add negative numbers", () => {
    expect(calculator.add(-5,-3)).toBe(-8);
});

test("(SUBTRACT) subtract numbers", () => {
    expect(calculator.subtract(5,2)).toBe(3);
});

test("(SUBTRACT) subtract big numbers", () => {
    expect(calculator.subtract(12342,455)).toBe(11887);
});

test("(SUBTRACT) negative outcome", () => {
    expect(calculator.subtract(3,5)).toBe(-2);
});

test("(SUBTRACT) substract negative numbers", () => {
    expect(calculator.subtract(-3,-2)).toBe(-1);
});

test("(DIVIDE) divide numbers", () => {
    expect(calculator.divide(10,5)).toBe(2);
});

test("(DIVIDE) divide big numbers", () => {
    expect(calculator.divide(1684,4)).toBe(421);
});

test("(DIVIDE) 0 divide by", () => {
    expect(calculator.divide(0,2)).toBe(0);
});

test("(DIVIDE) divide by 0", () => {
    expect(calculator.divide(4,0)).toBe("Don't divide by 0!!");
});

test("(DIVIDE) divide negative numbers 1", () => {
    expect(calculator.divide(-6,3)).toBe(-2);
});

test("(DIVIDE) divide negative numbers 2", () => {
    expect(calculator.divide(-6,-3)).toBe(2);
});

test("(MULTIPLY) multiply numbers", () => {
    expect(calculator.multiply(2,6)).toBe(12);
});

test("(MULTIPLY) multiply big numbers", () => {
    expect(calculator.multiply(3252,98)).toBe(318696);
});

test("(MULTIPLY) multiply with 0", () => {
    expect(calculator.multiply(123233,0)).toBe(0);
});

test("(MULTIPLY) multiply negative numbers 1", () => {
    expect(calculator.multiply(-5,3)).toBe(-15);
});

test("(MULTIPLY) multiply negative numbers 2", () => {
    expect(calculator.multiply(-5,-2)).toBe(10);
});

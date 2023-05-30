const analyzeArray = require("./analyzeArray");

test("empty array", () => {
    expect(analyzeArray([])).toEqual({average: 0, min: 0, max: 0, length: 0})
});

test("return average", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
});

test("return min", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
});

test("return max", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
});

test("return length", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6})
});

test("array with one item", () => {
    expect(analyzeArray([5])).toEqual({average: 5, min: 5, max: 5, length: 1})
});

test("negative numbers", () => {
    expect(analyzeArray([-1,5,-3,3])).toEqual({average: 1, min: -3, max: 5, length: 4})
});

test("array with NaN", () => {
    expect(analyzeArray([1,8,"3",4,"2",6])).toEqual({average: 4, min: 1, max: 8, length: 6})
});
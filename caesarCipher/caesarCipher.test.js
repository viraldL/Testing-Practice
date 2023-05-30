const caesarCipher = require("./caesarCipher");

test("simple word 1", () => {
    expect(caesarCipher("aabbcc", 1)).toBe("bbccdd");
});

test("simple word 2", () => {
    expect(caesarCipher("Hello", 5)).toBe("mjqqt");
});

test("simple word with interpunction", () => {
    expect(caesarCipher("AbCD!?/", 2)).toBe("cdef!?/");
});

test("multiple special characters", () => {
    expect(caesarCipher("tyuiop]}}}/$$!!?/", 5)).toBe("ydzntu]}}}/$$!!?/");
});

test("switch from z to a", () => {
    expect(caesarCipher("zZ", 1)).toBe("aa");
});

test("big shift", () => {
    expect(caesarCipher("viralDL", 25)).toBe("uhqzkck");
});

test("shift bigger than 25", () => {
    expect(caesarCipher("viralDL", 26)).toBe("Shift from 0 to 25");
});

test("negative shift", () => {
    expect(caesarCipher("Hello", -1)).toBe("Shift from 0 to 25");
});


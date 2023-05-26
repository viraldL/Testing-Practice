const reverseString = require("./reverseString");

test("One word", () => {
    expect(reverseString("Hello")).toBe("olleH");
});

test("One word variation", () => {
    expect(reverseString("hEllOOOo")).toBe("oOOOllEh");
});

test("Two words", () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test("More words variations", () => {
    expect(reverseString("Lorem ipsum dolor sit amet")).toBe("tema tis rolod muspi meroL");
});

test("Special characters", () => {
    expect(reverseString("1527 !$%SDad")).toBe("daDS%$! 7251");
});
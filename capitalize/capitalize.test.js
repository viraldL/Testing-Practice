const capitalize = require("./capitalize");

test("all chars lowercase", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("all chars uppercase", () => {
    expect(capitalize("HELLO")).toBe("Hello");
});

test("all chars different 1", () => {
    expect(capitalize("hElLo")).toBe("Hello");
});

test("all chars different 2", () => {
    expect(capitalize("HeLlOO")).toBe("Helloo");
});

test("More than one word 1", () => {
    expect(capitalize("hello world")).toBe("Hello World");
});

test("Long sentence", () => {
    expect(capitalize("Lorem ipsum dolor sit amet consectetur adipiscing elit")).toBe("Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit");
});

test("Long sentence with interpunction", () => {
    expect(capitalize("Lorem ipsum dolor sit amet, consectetur adipiscing eli!?")).toBe("Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Eli!?");
});

test("Numbers", () => {
    expect(capitalize("Number 1 and number2")).toBe("Number 1 And Number2");
});

test("No chars", () => {
    expect(capitalize("1 2 3 ^&#")).toBe("1 2 3 ^&#");
});

test("One char", () => {
    expect(capitalize("s")).toBe("S");
});

test("Two chars", () => {
    expect(capitalize("tb")).toBe("Tb");
});
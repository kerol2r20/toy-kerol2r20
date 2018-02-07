import index = require("../index");
import math = require("../math");

test("Hello", () => {
    expect(index.hello()).toMatch("hello world");
});

test("Add", () => {
    expect(math.add(1, 1)).toBe(2);
    expect(math.add(1.0, 2.0)).toBeCloseTo(3.0);
});

test("Sub", () => {
    expect(math.sub(1, 2)).toBe(-1);
    expect(math.sub(1.0, 2.0)).toBeCloseTo(-1.0);
});

test("Mul", () => {
    expect(math.mul(1, 2)).toBe(2);
    expect(math.mul(1.0, 2.0)).toBeCloseTo(2.0);
});

test("Div", () => {
    expect(math.div(2, 1)).toBe(2);
    expect(math.div(1.0, 2.0)).toBeCloseTo(0.5);
});

const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");
const { describe, test } = require("node:test");
const assert = require("node:assert");

///////Suite
describe("Lab-TDD tests", () => {
  // Add function tests
  describe("Add function tests", () => {
    test("Add function should return 8 when adding 5 and 3", () => {
      assert.strictEqual(add(3, 5), 8);
    });
    test("Add function should return 0 when adding -5 and 5", () => {
      assert.strictEqual(add(-5, 5), 0);
    });
  });

  // Subtract function tests
  describe("Subtract function tests", () => {
    test("Subtract function should return 8 when subtracting 12 from 20", () => {
      assert.strictEqual(subtract(20, 12), 8);
    });
    test("Subtract function should return -15 when subtracting 10 from -5", () => {
      assert.strictEqual(subtract(-5, 10), -15);
    });
  });

  // Multiply function tests
  describe("Multiply function tests", () => {
    test("Multiply function should return 108 when multiplying 12 and 9", () => {
      assert.strictEqual(multiply(12, 9), 108);
    });
    test("Multiply function should return 0 when multiplying by 0", () => {
      assert.strictEqual(multiply(10, 0), 0);
    });
  });

  // Divide function tests
  describe("Divide function tests", () => {
    test("Divide function should return 4 when dividing 32 over 8", () => {
      assert.strictEqual(divide(32, 8), 4);
    });
    test("Zero division should throw an error", () => {
      assert.throws(() => divide(10, 0), Error);
    });
  });

  // Modulas function tests
  describe("Modulas function tests", () => {
    test("Modulas function should return 1 when finding 17 mod 4", () => {
      assert.strictEqual(modulas(17, 4), 1);
    });
    test("Modulas function should return 0 when finding 20 mod 5", () => {
      assert.strictEqual(modulas(20, 5), 0);
    });
  });

  // Power function tests
  describe("Power function tests", () => {
    test("Power function should return 32 when 2 is raised to the power of 5", () => {
      assert.strictEqual(power(2, 5), 32);
    });
    test("Power function should return 1 when any number is raised to the power of 0", () => {
      assert.strictEqual(power(7, 0), 1);
    });
  });

  // SquareRoot function tests
  describe("SquareRoot function tests", () => {
    test("SquareRoot function should return 5 when finding the square root of 25", () => {
      assert.strictEqual(squareRoot(25), 5);
    });
    test("SquareRoot function should throw an error when finding the square root of a negative number", () => {
      assert.throws(() => squareRoot(-9), Error);
    });
  });

  // Floor function tests
  describe("Floor function tests", () => {
    test("Floor function should return 3 when flooring 3.99", () => {
      assert.strictEqual(floor(3.99), 3);
    });
    test("Floor function should return -4 when flooring -3.14", () => {
      assert.strictEqual(floor(-3.14), -4);
    });
  });

  // Ceiling function tests
  describe("Ceiling function tests", () => {
    test("Ceiling function should return 16 when ceiling 15.3", () => {
      assert.strictEqual(ceiling(15.3), 16);
    });
    test("Ceiling function should return -15 when ceiling -15.7", () => {
      assert.strictEqual(ceiling(-15.7), -15);
    });
  });
});

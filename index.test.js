const test = require("node:test");
const assert = require("node:assert");
const { add, addWrong } = require("./index.js");

// Case from the requirement: 1 + 1 = 2
test("add(1, 1) should return 2", () => {
  assert.strictEqual(add(1, 1), 2);
});

// Case from the requirement: 1 + 3 = 4
test("add(1, 3) should return 4", () => {
  assert.strictEqual(add(1, 3), 4);
});

test("add(2, 3) should return 5", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("add handles zero", () => {
  assert.strictEqual(add(0, 0), 0);
  assert.strictEqual(add(0, 7), 7);
});

test("add handles negative numbers", () => {
  assert.strictEqual(add(-1, 1), 0);
  assert.strictEqual(add(-5, -3), -8);
});

test("add handles floating point numbers", () => {
  assert.strictEqual(add(1.5, 2.5), 4);
});

// ---------------------------------------------------------------------------
// DEMO: the tests below exercise the buggy addWrong() on purpose.
// They are EXPECTED TO FAIL and turn the GitHub Actions job red, which is
// exactly the point -- it shows the unit tests catching a wrong addition.
// Delete this block once the demo is done.
// ---------------------------------------------------------------------------
test("DEMO addWrong(1, 1) should return 2 -> FAILS (returns '11')", () => {
  assert.strictEqual(addWrong(1, 1), 2);
});

test("DEMO addWrong(1, 3) should return 4 -> FAILS (returns '13')", () => {
  assert.strictEqual(addWrong(1, 3), 4);
});

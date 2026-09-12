/**
 * Add two numbers.
 * @param {number} a first addend
 * @param {number} b second addend
 * @returns {number} the sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * A deliberately WRONG addition, used to demonstrate how unit tests catch bugs.
 * BUG: the two values are concatenated as strings instead of added numerically,
 *      so addWrong(1, 1) returns "11" instead of 2.
 * @param {number|string} a first value
 * @param {number|string} b second value
 * @returns {string} the concatenation of a and b (WRONG result)
 */
function addWrong(a, b) {
  return String(a) + String(b);
}

/**
 * The classic greeting.
 * @returns {string} the hello world message
 */
function helloWorld() {
  return "hello every one 20027";
}

// Only print when this file is executed directly (e.g. `node index.js`),
// so it stays quiet when imported by the unit tests.
if (require.main === module) {
  console.log(helloWorld());
}

module.exports = { add, addWrong, helloWorld };

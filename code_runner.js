// assign the tape library to the variable "test"
const testCode = require('tape');

const unitTest = require("./unit_tests/test_sum"); // Description of the Tape test output
testCode(unitTest.testCodeString, { timeout: 10000 }, function (t) {
  t.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so passes
  t.end();
});

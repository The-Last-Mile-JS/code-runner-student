// assign the tape library to the variable "test"
const testCode = require('tape');
const unitTest = require("./unit_tests/test_sum");  // Unit tests
const code = require("./problems/sum");             // Written function


testCode(unitTest.testCodeString, { timeout: 10000 }, function (t) {
    for (index = 0; index < unitTest.testCases.length; ++index){
        console.log(`Test Case #${index}`, "\nInput(s):", unitTest.testCases[index]);
        t.equal(unitTest.answers[index], code.mainFunc(unitTest.testCases[index][0], unitTest.testCases[index][1]));
    }
    t.end();
});

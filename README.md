# code-runner-student [![Build Status](https://travis-ci.org/The-Last-Mile-JS/code-runner-student.svg?branch=master)](https://travis-ci.org/The-Last-Mile-JS/code-runner-student)
A code runner, which uses the Tape framework, that allows an individual student to check the correctness of his/her codes on the Command Line Interface (CLI). 

![System](https://github.com/The-Last-Mile-JS/code-runner-student/blob/master/overall_view.png)

## How to Use
This code runner (*code_runner.js*, *tap.js*, and *unit_test.js*) is included for each question to use the test cases in *unit_test.js* to check the correctness of the students' codes. The *code_runner.js* and *unit_test.js* need to be customized as the number arguments for `code.mainFunc` in *code_runner.js* may change depending on the coding problem and the test cases in *unit_test.js* need to be tailored to the questions.

## Output

After calling `node tap.js code_runner.js`, the student will see the report in their CLI.

Example:
![System](https://github.com/The-Last-Mile-JS/code-runner-student/blob/master/Output.png)

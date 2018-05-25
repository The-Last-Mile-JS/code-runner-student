# Code Runner (Student)
[![Build Status](https://travis-ci.org/The-Last-Mile-JS/code-runner-student.svg?branch=master)](https://travis-ci.org/The-Last-Mile-JS/code-runner-student) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br>
A code runner, which uses the Tape.js unit-testing framework, that allows an individual student to check the correctness of his/her codes on the Command Line Interface (CLI). <br>
![System](https://github.com/The-Last-Mile-JS/code-runner-student/blob/master/Output.png)

## Table of Content
- [How It Works](#mechanism)
- Setup (Admin)
    - Inclusion of Code Runner into Problem Folder
    - What to Modify?
- [Usage (Student)](#usage)
    - [Commands](#commands)
    
<a name="mechanism"></a>
## How It Works 
The `mainFunc` (where the students write the function solution) in the `module.exports` object and the unit tests are passed into the `Tape.js` driver *"code_runner.js"*. The driver runs the `mainFunc` against the unit tests, and the output of the unit-testing is formatted by *"tap.js"* before it is displayed on the Command Line Interface.<br><br>
![System](https://github.com/The-Last-Mile-JS/code-runner-student/blob/master/overall_view.png)

## How to Use
This code runner (*code_runner.js*, *tap.js*, and *unit_test.js*) is included for each question to use the test cases in *unit_test.js* to check the correctness of the students' codes. The *code_runner.js* and *unit_test.js* need to be customized as the number arguments for `code.mainFunc` in *code_runner.js* may change depending on the coding problem and the test cases in *unit_test.js* need to be tailored to the questions.

## Usage (Student) <a name="usage"></a>

### Commands <a name="commands"></a>

After calling `node tap.js code_runner.js`, the student will see the report in their CLI.

Example:

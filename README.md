# Code Runner (Student)
[![Build Status](https://travis-ci.org/The-Last-Mile-JS/code-runner-student.svg?branch=master)](https://travis-ci.org/The-Last-Mile-JS/code-runner-student) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)<br>
A code runner, which uses the Tape.js unit-testing framework, that allows an individual student to check the correctness of his/her codes on the Command Line Interface (CLI). <br>

## Table of Content
- [How It Works](#mechanism)
- [Dependencies](#dependencies)
- [Setup (Admin)](#setup)
    - [Inclusion of Code Runner into Problem Folder](#inclusion)
    - [What to Modify?](#modification)
- [Usage (Student)](#usage)
    - [Commands](#commands)
    - [Customizing Unit Tests](#unitTestCustomization)

<a name="mechanism"></a>
## How It Works
The `mainFunc` (where the students write the function solution) in the `module.exports` object and the unit tests are passed into the `Tape.js` driver *"code_runner.js"*. The driver runs the `mainFunc` against the unit tests, and the output of the unit-testing is formatted by *"tap.js"* before it is displayed on the Command Line Interface.<br><br>
![System](https://github.com/The-Last-Mile-JS/code-runner-student/blob/master/overall_view.png)

<a name="dependencies"></a>
### Dependencies
Ensure that the below dependencies are installed through `npm`.
- [tape.js](https://github.com/substack/tape) (v4.9): tap-producing test harness for node and browsers
- [cli-color](https://github.com/medikoo/cli-color) (v1.2): Formatting for the console output.

<a name="setup"></a>
## Setup (Admin)

<a name="inclusion"></a>
### Inclusion of Code Runner into Problem Folder
Inside the problem folder, there should be four files:
1. *problem.js*: Contains the problem and empty space for student's codes
2. *code_runner.js*: Driver of unit-tests
3. *tap.js*: Used for formatting the result in the command line
4. *unit_test.js*: Unit tests for students' codes

<a name="modification"></a>
### What to Modify?
1. *unit_test.js*: Change the description of the unit tests, test cases and the expected results in the `module.exports` object.
2. *code_runner.js*: Depending on the test cases (arguments) and the expected results, modify the line that equates expected answers to student code's output  `t.equal(unitTest.answers[index], student.mainFunc(unitTest.testCases[index][0], unitTest.testCases[index][1]));`.

<a name="usage"></a>
## Usage (Student)

<a name="commands"></a>
### Commands
After writing the codes in the *"problem.js"* file and calling `node tap.js code_runner.js` on his command line, the student will see the report in his CLI.<br>
![Output](https://github.com/The-Last-Mile-JS/code-runner-student/blob/master/Output.png)

<a name="unitTestCustomization"></a>
### Customizing Unit Tests
The student can go to *"unit_test.js"* and modify two fields of `module.exports` object:
1. test cases in the `testCases` field
2. expected outputs in the `answers` field
